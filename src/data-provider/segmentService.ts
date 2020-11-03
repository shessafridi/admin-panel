import { fetchUtils } from 'ra-core';
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
      body: this.getSegmentBody(slice),
    });
  };

  getSliceData = (resource: string): any[] => this.segmentsObj[resource].data;
  getSlice = (resource: string): ResourceSlice => this.segmentsObj[resource];

  delete = (id: number, resource: string) => {
    const slice = this.getSlice(resource);
    const index = slice.data.findIndex(val => val.id === id);
    slice.data.splice(index, 1);

    return this._updateDb(slice);
  };

  create = (data: any, resource: string) => {
    const slice = this.getSlice(resource);
    data.id = slice.data.length + 1;
    slice.data.push(data);

    return this._updateDb(slice);
  };

  getSegmentBody = (slice: ResourceSlice) =>
    JSON.stringify({
      SegmentDetailID: slice.id,
      SegmentID: slice.id,
      Title: slice.title,
      Details: JSON.stringify(slice.data),
    });

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
