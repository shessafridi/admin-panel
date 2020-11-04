/* eslint-disable import/no-anonymous-default-export */

import { fetchUtils, DataProvider } from 'ra-core';
import segmentService from './segmentService';

const getById = (id: number, res: string) => {
  const slice = segmentService.getSliceData(res);
  return slice.find(val => val.id === id);
};

export default (
  apiUrl: string,
  httpClient = fetchUtils.fetchJson
): DataProvider => ({
  getList: async (resource, params) => {
    await segmentService.getSegments();
    return { total: 10, data: segmentService.getSliceData(resource) };
  },

  getOne: async (resource, params) => {
    await segmentService.getSegments();
    return { data: { ...getById(parseInt(params.id.toString()), resource) } };
  },

  getMany: async (resource, params) => {
    console.log(params, 'UPDATE');
    await segmentService.getSegments();
    return { data: segmentService.getSliceData(resource) };
  },

  getManyReference: async (resource, params) => {
    await segmentService.getSegments();
    return { total: 10, data: segmentService.getSliceData(resource) };
  },

  update: (resource, params) => {
    console.log(params, 'UPDATE');
    return segmentService
      .update(params.data, resource)
      .then(({ json }) => ({ data: { id: json.id, ...json } }));
  },
  // httpClient(`${apiUrl}/${resource}/${params.id}`, {
  //   method: 'PUT',
  //   body: JSON.stringify(params.data),
  // }).then(({ json }) => ({ data: json })),

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

  create: (resource, params) => {
    console.log(params, 'CREATE');
    return segmentService.create(params.data, resource).then(({ json }) => ({
      data: { ...json, id: json.id },
    }));
  },

  delete: (resource, params) => {
    return segmentService
      .delete(parseInt(params.id as string), resource)
      .then(({ json }) => ({
        data: json,
      }));
  },

  // simple-rest doesn't handle filters on DELETE route, so we fallback to calling DELETE n times instead
  deleteMany: (resource, params) =>
    Promise.all(
      params.ids.map(id =>
        segmentService.delete(parseInt(id as string), resource)
      )
    ).then(responses => ({ data: responses.map(({ json }) => json.id) })),
});