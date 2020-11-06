import { fetchUtils } from 'ra-core';
import imageUploadService from '../common/imageUploadService';
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
      headers: this.getHttpHeaders(),
      body: this._getSegmentBody(slice),
    });
  };

  private getHttpHeaders() {
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

  // CRUD

  // Create
  create = async (data: any, resource: string) => {
    const slice = this.getSlice(resource);
    data.id = slice.data.length + 1;
    slice.data.push(data);

    console.log(data, 'Create Data');
    if (Array.isArray(data.imageUrl)) {
      await imageUploadService
        .uploadAllFiles(data.imageUrl.map((raw: any) => raw.rawFile))
        .then(res => (data.imageUrl = res[0]));
    }

    return this._updateDb(slice).then(() => ({
      data: { ...data, id: data.id },
    }));
  };

  // Read
  getSliceData = (resource: string): any[] => this.segmentsObj[resource].data;
  getSlice = (resource: string): ResourceSlice => this.segmentsObj[resource];

  // Update
  update = (data: any, resource: string) => {
    const slice = this.getSlice(resource);
    const index = slice.data.findIndex(val => val.id === data.id);
    slice.data[index] = data;

    return this._updateDb(slice);
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
        console.log(e);
      }
    }
  };
}

export default new SegmentService();
