import { apiUrl } from '../config';
import { ResourceSlice } from '../models/Slice';
import { ResourceData } from '../models/ResourceData';
import authService from './authService';
import { uploadImagesIfExist } from '../middleware/uploadImages';
import { addYouTubeUrlIfExist } from '../middleware/addYouTubeUrl';
import loggerService from './loggerService';
import { Admission, AppAdmission, toAppAdmission } from './../models/Admission';

const segmentUrl = apiUrl + '/SegmentDetail';
const admissionUrl = apiUrl + '/Admissions';

class SegmentService {
  segmentsObj: any = {};

  private _arrangeId = (slice: ResourceSlice) =>
    slice.data.forEach((val, i) => (val.id = i + 1));

  private _updateDb = async (slice: ResourceSlice) => {
    this._arrangeId(slice);
    return fetch(`${segmentUrl}/${slice.id}`, {
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
    await uploadImagesIfExist(data);
    addYouTubeUrlIfExist(data);
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
      loggerService.logError(e);
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
      loggerService.logError(e);
      return Promise.reject(e);
    }
  };

  // Delete
  delete = async (id: number, resource: string) => {
    const slice = this.getSlice(resource);
    const index = slice.data.findIndex(val => val.id === id);
    if (slice.title === 'Admissions') {
      await this.deleteAdmission(id);
      slice.data = slice.data.filter(data => data.id !== id);
      return {
        data: slice.data[index],
      };
    } else {
      const removed = slice.data.splice(index, 1);
      return this._updateDb(slice).then(() => ({
        data: removed[0],
      }));
    }
  };

  deleteMany = async (recordsIds: number[], resource: string) => {
    const slice = this.getSlice(resource);

    if (slice.title === 'Admissions') {
      const deletedAdmission = recordsIds.map(
        id => slice.data.find(d => d.id === id)!
      );

      await Promise.all(
        deletedAdmission.map(ad => this.deleteAdmission(ad.id))
      );

      slice.data = slice.data.filter(data => !recordsIds.includes(data.id));

      return {
        data: deletedAdmission,
      };
    } else {
      const deletedRecords: any[] = [];
      for (let record of recordsIds) {
        const index = slice.data.findIndex(
          (val: { id: number }) => val.id === record
        );
        const [removed] = slice.data.splice(index, 1);
        deletedRecords.push(removed);
      }
      await this._updateDb(slice);
      return {
        data: deletedRecords,
      };
    }
  };

  deleteAdmission = async (id: number) => {
    return await (
      await fetch(admissionUrl + '/' + id, {
        method: 'DELETE',
      })
    ).json();
  };

  // Loading data from the server
  getSegments = async () => {
    if (Object.keys(this.segmentsObj).length === 0) {
      try {
        const response: any[] = await (await fetch(segmentUrl)).json();
        const admissions: Admission[] = await (
          await fetch(admissionUrl)
        ).json();

        const appAdmissions: AppAdmission[] = admissions
          .map(a => toAppAdmission(a))
          .sort((a, b) => {
            const aDate = new Date(a.submissionDate).valueOf();
            const bDate = new Date(b.submissionDate).valueOf();

            if (aDate > bDate) return -1;
            if (aDate < bDate) return 1;

            return 0;
          });

        response.forEach(val => {
          const title: string = val.Title.toLowerCase().replace(' ', '');
          this.segmentsObj[title] = {
            id: val.SegmentDetailID,
            title: val.Title,
            data: JSON.parse(val.Details),
          };
        });
        this.segmentsObj['admissions'] = {
          id: 4887645,
          title: 'Admissions',
          data: [...appAdmissions],
        };
        console.log(this.segmentsObj);
      } catch (e) {
        loggerService.logError(e);
        console.error(e);
      }
    }
  };
}

export default new SegmentService();
