import { fetchUtils } from 'ra-core';
import { apiUrl } from '../config';

class SegmentService {
  segmentsObj: any = {};

  getSlice = (searchQuery: string) => this.segmentsObj[searchQuery];

  getSegments = async () => {
    if (Object.keys(this.segmentsObj).length === 0) {
      try {
        console.log(apiUrl, 'DEBUG');
        const response: any[] = await (await fetchUtils.fetchJson(apiUrl)).json;
        response.forEach(val => {
          const title: string = val.Title.toLowerCase().replace(' ', '');
          this.segmentsObj[title] = val.Details;
        });
        console.log(this.segmentsObj);
      } catch (e) {
        console.log(e);
      }
    }
  };
}

export default new SegmentService();
