/* eslint-disable import/no-anonymous-default-export */

import { fetchUtils, DataProvider } from 'ra-core';
import segmentService from './segmentService';

const getById = (id: number, res: string) => {
  const slice: any[] = JSON.parse(segmentService.getSlice(res));
  return slice.find(val => val.id === id);
};

export default (
  apiUrl: string,
  httpClient = fetchUtils.fetchJson
): DataProvider => ({
  getList: async (resource, params) => {
    await segmentService.getSegments();
    return { total: 10, data: segmentService.getSlice(resource) };
  },

  getOne: (resource, params) =>
    getById(parseInt(params.id.toString()), resource),

  getMany: async (resource, params) => {
    await segmentService.getSegments();
    return { data: segmentService.getSlice(resource) };
  },

  getManyReference: async (resource, params) => {
    await segmentService.getSegments();
    return { total: 10, data: segmentService.getSlice(resource) };
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
