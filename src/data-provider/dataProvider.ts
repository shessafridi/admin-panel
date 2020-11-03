/* eslint-disable import/no-anonymous-default-export */

import { fetchUtils, DataProvider } from 'ra-core';
import { apiUrl as segmentUrl } from '../config';

/**
 * Maps react-admin queries to a simple REST API
 *
 * This REST dialect is similar to the one of FakeRest
 *
 * @see https://github.com/marmelab/FakeRest
 *
 * @example
 *
 * getList     => GET http://my.api.url/posts?sort=['title','ASC']&range=[0, 24]
 * getOne      => GET http://my.api.url/posts/123
 * getMany     => GET http://my.api.url/posts?filter={id:[123,456,789]}
 * update      => PUT http://my.api.url/posts/123
 * create      => POST http://my.api.url/posts
 * delete      => DELETE http://my.api.url/posts/123
 *
 * @example
 *
 * import * as React from "react";
 * import { Admin, Resource } from 'react-admin';
 * import simpleRestProvider from 'ra-data-simple-rest';
 *
 * import { PostList } from './posts';
 *
 * const App = () => (
 *     <Admin dataProvider={simpleRestProvider('http://path.to.my.api/')}>
 *         <Resource name="posts" list={PostList} />
 *     </Admin>
 * );
 *
 * export default App;
 */

let segmentsObj: any = {};

const getSegments = async () => {
  const apiUrl = segmentUrl;
  if (Object.keys(segmentsObj).length === 0) {
    try {
      console.log(apiUrl, 'DEBUG');
      const response: any[] = await (await fetchUtils.fetchJson(apiUrl)).json;
      response.forEach(val => {
        const title: string = val.Title.toLowerCase().replace(' ', '');
        segmentsObj[title] = val.Details;
      });
      console.log(segmentsObj);
    } catch (e) {
      console.log(e);
    }
  }
};

const getById = (id: number, res: string) => {
  const slice: any[] = JSON.parse(segmentsObj[res]);
  return slice.find(val => val.id === id);
};

export default (
  apiUrl: string,
  httpClient = fetchUtils.fetchJson
): DataProvider => ({
  getList: async (resource, params) => {
    await getSegments();
    return { total: 10, data: JSON.parse(segmentsObj[resource]) };
  },

  getOne: (resource, params) =>
    getById(parseInt(params.id.toString()), resource),

  getMany: async (resource, params) => {
    await getSegments();
    const res = getById(parseInt(resource), resource);
    return { data: JSON.parse(res.Details) };
  },

  getManyReference: async (resource, params) => {
    await getSegments();
    const res = getById(parseInt(resource), resource);
    return { total: 10, data: JSON.parse(res.Details) };
  },

  update: (resource, params) =>
    httpClient(`${apiUrl}/${resource}/${params.id}`, {
      method: 'PUT',
      body: JSON.stringify(params.data),
    }).then(({ json }) => ({ data: json })),

  // simple-rest doesn't handle provide an updateMany route, so we fallback to calling update n times instead
  updateMany: (resource, params) =>
    Promise.all(
      params.ids.map(id =>
        httpClient(`${apiUrl}/${resource}/${id}`, {
          method: 'PUT',
          body: JSON.stringify(params.data),
        })
      )
    ).then(responses => ({ data: responses.map(({ json }) => json.id) })),

  create: (resource, params) =>
    httpClient(`${apiUrl}/${resource}`, {
      method: 'POST',
      body: JSON.stringify(params.data),
    }).then(({ json }) => ({
      data: { ...params.data, id: json.id },
    })),

  delete: (resource, params) => {
    console.log(params);
    return httpClient(`${apiUrl}/${resource}/${params.id}`, {
      method: 'DELETE',
    }).then(({ json }) => ({ data: json }));
  },

  // simple-rest doesn't handle filters on DELETE route, so we fallback to calling DELETE n times instead
  deleteMany: (resource, params) =>
    Promise.all(
      params.ids.map(id =>
        httpClient(`${apiUrl}/${resource}/${id}`, {
          method: 'DELETE',
        })
      )
    ).then(responses => ({ data: responses.map(({ json }) => json.id) })),
});
