import { fetchUtils } from 'ra-core';
import imageUploadService from './imageUploadService';
import { apiUrl } from '../config';
import { ResourceSlice } from '../models/Slice';

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
    const token = localStorage.getItem('auth');
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

  private _uploadImagesIfExist = async (data: any) => {
    if (data.imageUpload.rawFile) {
      await imageUploadService
        .uploadFile(data.imageUpload.rawFile)
        .then(res => {
          delete data.imageUpload;
          return (data.imageUrl = res.body.replace(/"/g, ''));
        });
    }
    if (data.imageUpload && Array.isArray(data.imageUpload)) {
      await imageUploadService
        .uploadAllFiles(data.imageUpload.map((raw: any) => raw.rawFile))
        .then(res => {
          delete data.imageUpload;
          return (data.imageUrl = res.map(link => link.replace(/"/g, '')));
        });
    }
  };

  // CRUD

  // Create
  create = async (data: any, resource: string) => {
    const slice = this.getSlice(resource);
    data.id = slice.data.length + 1;
    slice.data.push(data);

    await this._uploadImagesIfExist(data);

    return this._updateDb(slice).then(() => ({
      data: { ...data, id: data.id },
    }));
  };

  // Read
  getSliceData = (resource: string): any[] => this.segmentsObj[resource].data;
  getSlice = (resource: string): ResourceSlice => this.segmentsObj[resource];

  // Update
  update = async (data: any, resource: string) => {
    const slice = this.getSlice(resource);
    const index = slice.data.findIndex(val => val.id === data.id);
    slice.data[index] = data;

    await this._uploadImagesIfExist(data);

    return this._updateDb(slice).then(() => ({
      data: { ...data, id: data.id },
    }));
  };

  // Delete
  delete = (id: number, resource: string) => {
    const slice = this.getSlice(resource);
    const index = slice.data.findIndex(val => val.id === id);
    const rem = slice.data.splice(index, 1);

    return this._updateDb(slice).then(() => ({
      data: rem[0],
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
