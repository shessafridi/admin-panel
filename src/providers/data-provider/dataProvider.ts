/* eslint-disable import/no-anonymous-default-export */

import { DataProvider } from 'ra-core';
import segmentService from '../../services/segmentService';

const getById = (id: number, res: string) => {
  const slice = segmentService.getSliceData(res);
  return slice.find(val => val.id === id);
};

export default (): DataProvider => ({
  getList: async (resource, params) => {
    await segmentService.getSegments();
    return {
      total: 10,
      data: segmentService.getSliceData(resource),
    };
  },

  getOne: async (resource, params) => {
    await segmentService.getSegments();
    return { data: { ...getById(parseInt(params.id.toString()), resource) } };
  },

  getMany: async (resource, params) => {
    await segmentService.getSegments();
    return { data: segmentService.getSliceData(resource) };
  },

  getManyReference: async (resource, params) => {
    await segmentService.getSegments();
    return { total: 10, data: segmentService.getSliceData(resource) };
  },

  update: async (resource, params): Promise<any> => {
    return await segmentService.update(params.data, resource);
  },

  // simple-rest doesn't handle provide an updateMany route, so we fallback to calling update n times instead
  updateMany: (resource, params) =>
    Promise.all(
      params.ids.map(id =>
        segmentService.update(parseInt(id as string), resource)
      )
    ).then(responses => ({ data: responses.map(res => res?.data) })),

  create: async (resource, params) => {
    return await segmentService.create(params.data, resource);
  },

  delete: (resource, params) => {
    return segmentService.delete(parseInt(params.id as string), resource);
  },

  // simple-rest doesn't handle filters on DELETE route, so we fallback to calling DELETE n times instead
  deleteMany: async (resource, params) => {
    return await segmentService.deleteMany(
      params.ids.map(id => parseInt(id as string)),
      resource
    );
  },
});
