import { fetchUtils } from 'ra-core';
import { apiUrl } from '../config';
import { ResourceSlice } from '../models/Slice';

class SegmentService {
  segmentsObj: any = {};

  getSlice = (resource: string): any[] => this.segmentsObj[resource].data;
  getSliceResource = (resource: string): ResourceSlice =>
    this.segmentsObj[resource];

  delete = (id: number, resource: string) => {
    const slice = this.getSliceResource(resource);
    const index = slice.data.findIndex(val => val.id === id);
    slice.data.splice(index, 1);

    return this.updateDb(slice);
  };

  getSegmentBody = (slice: ResourceSlice) =>
    JSON.stringify({
      SegmentDetailID: slice.id,
      SegmentID: slice.id,
      Title: JSON.stringify(slice.data),
    });

  updateDb = (slice: ResourceSlice) => {
    return fetchUtils.fetchJson(`${apiUrl}/${slice.id}`, {
      method: 'PUT',
      body: this.getSegmentBody(slice),
    });
  };

  getSegments = async () => {
    if (Object.keys(this.segmentsObj).length === 0) {
      try {
        console.log(apiUrl, 'DEBUG');
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
