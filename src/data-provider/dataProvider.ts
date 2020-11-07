/* eslint-disable import/no-anonymous-default-export */

import { DataProvider } from 'ra-core';
import segmentService from './segmentService';
// import imageService from '../common/imageUploadService';

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

  update: (resource, params) => {
    return segmentService.update(params.data, resource);
  },

  // simple-rest doesn't handle provide an updateMany route, so we fallback to calling update n times instead
  updateMany: (resource, params) =>
    Promise.all(
      params.ids.map(id =>
        segmentService.update(parseInt(id as string), resource)
      )
    ).then(responses => ({ data: responses.map(res => res.data) })),

  create: (resource, params) => {
    return segmentService.create(params.data, resource);
  },

  delete: (resource, params) => {
    return segmentService.delete(parseInt(params.id as string), resource);
  },

  // simple-rest doesn't handle filters on DELETE route, so we fallback to calling DELETE n times instead
  deleteMany: (resource, params) =>
    Promise.all(
      params.ids.map(id =>
        segmentService.delete(parseInt(id as string), resource)
      )
    ).then(responses => ({ data: responses.map(res => res.data) })),
});
