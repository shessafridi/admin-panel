import { fetchUtils } from 'ra-core';
import imageUploadService from './imageUploadService';
import { apiUrl } from '../config';
import { ResourceSlice } from '../models/Slice';
import { ResourceData } from '../models/ResourceData';
import authService from './authService';
import objectPath from 'object-path';

class SegmentService {
  segmentsObj: any = {};

  private _arrangeId = (slice: ResourceSlice) =>
    slice.data.forEach((val, i) => (val.id = i + 1));

  private _updateDb = (slice: ResourceSlice) => {
    this._arrangeId(slice);
    return fetchUtils.fetchJson(`${apiUrl}/${slice.id}`, {
      method: 'PUT',
      headers: this._getHttpHeaders(),
      body: this._getSegmentBody(slice),
    });
  };

  private _getHttpHeaders() {
    const token = authService.getToken();
    if (!!token) {
      return new Headers({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      });
    }
    return new Headers({
      'Content-Type': 'application/json',
    });
  }

  private _getSegmentBody = (slice: ResourceSlice) =>
    JSON.stringify({
      SegmentDetailID: slice.id,
      SegmentID: slice.id,
      Title: slice.title,
      Details: JSON.stringify(slice.data),
    });

  // Middleware
  private _callMiddleWare = async (data: ResourceData) => {
    await this._uploadImagesIfExist(data);
    this._mergeFieldsIfExist(data);
  };
  private _uploadImagesIfExist = async (data: ResourceData) => {
    if (data.imageUploaders) {
      const images = Object.entries(data.imageUploaders).map(
        ([path, files]) => ({
          path: path.replace(/_/g, '.'),
          files,
        })
      );
      await Promise.all(
        images.map(({ files, path }) => {
          if (Array.isArray(files))
            return imageUploadService.uploadMultipleImages(data, files, path);
          return imageUploadService.uploadSingleImage(data, files, path);
        })
      );
    }

    delete data.imageUploaders;
  };

  private _mergeFieldsIfExist = (data: ResourceData) => {
    if (data.mergeFields) {
      const recordToMerge = Object.entries(data.mergeFields).map(
        ([path, record]) => ({
          path: path.replace(/_/g, '.'),
          record,
        })
      );
      recordToMerge.forEach(({ path, record }) => {
        let gallery: any[] = objectPath.get(data, path);
        if (Array.isArray(gallery)) {
          gallery = [
            ...gallery,
            ...(record as any[]).map((val: any) => ({
              id: gallery.length + 1,
              ...val,
            })),
          ];
        } else {
          gallery = [
            ...(record as any[]).map((val: any, i) => ({
              id: i + 1,
              ...val,
            })),
          ];
        }
        objectPath.set(data, path, gallery);
      });
      console.log(recordToMerge);
    }
    delete data.mergeFields;
  };

  // CRUD

  // Create
  create = async (data: any, resource: string) => {
    const slice = this.getSlice(resource);
    data.id = slice.data.length + 1;

    try {
      await this._callMiddleWare(data);
      slice.data.push(data);
      return this._updateDb(slice).then(() => ({
        data: { ...data, id: data.id },
      }));
    } catch (e) {
      return Promise.reject(e);
    }
  };

  // Read
  getSliceData = (resource: string): any[] => this.segmentsObj[resource].data;
  getSlice = (resource: string): ResourceSlice => this.segmentsObj[resource];

  // Update
  update = async (data: any, resource: string) => {
    const slice = this.getSlice(resource);
    try {
      await this._callMiddleWare(data);
      const index = slice.data.findIndex(val => val.id === data.id);
      slice.data[index] = data;
      return this._updateDb(slice).then(() => ({
        data: { ...data, id: data.id },
      }));
    } catch (e) {
      return Promise.reject(e);
    }
  };

  // Delete
  delete = (id: number, resource: string) => {
    const slice = this.getSlice(resource);
    const index = slice.data.findIndex(val => val.id === id);
    const removed = slice.data.splice(index, 1);

    return this._updateDb(slice).then(() => ({
      data: removed[0],
    }));
  };

  // Loading data from the server
  getSegments = async () => {
    if (Object.keys(this.segmentsObj).length === 0) {
      try {
        const response: any[] = await (await fetchUtils.fetchJson(apiUrl)).json;
        response.forEach(val => {
          const title: string = val.Title.toLowerCase().replace(' ', '');
          this.segmentsObj[title] = {
            id: val.SegmentDetailID,
            title: val.Title,
            data: JSON.parse(val.Details),
          };
        });
        console.log(this.segmentsObj);
      } catch (e) {
        console.error(e);
      }
    }
  };
}

export default new SegmentService();
