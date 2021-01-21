import { fileUploadUrl } from '../config';
import objectPath from 'object-path';
import loggerService from './loggerService';
class ImageService {
  private _uploadAllFiles = (files: File[]) => {
    return Promise.all(
      files.map(file => this._uploadFile(file))
    ).then(response => response.map(res => res.body));
  };
  private _uploadFile = (file: File) => {
    const form = new FormData();
    form.append('upload_preset', 'alhamd');
    form.append('file', file);
    return fetch(fileUploadUrl, {
      method: 'POST',
      body: form,
    })
      .then(res => res.json())
      .then(res => ({
        body: res.url.replace(/"/g, '').replace(/http/g, 'https'),
      }))
      .catch(e => {
        loggerService.logError(e);
        return {
          body: null,
          error: e,
        };
      });
  };

  private _setCustomProperty = (data: any, fieldName: string, value: any) => {
    return objectPath.set(data, fieldName, value);
  };

  private _mapToGallery = (link: string, index: number) => ({
    id: index + 1,
    imageUrl: link,
  });

  uploadSingleImage = async (data: any, file: any, path: string) =>
    await this._uploadFile(file.rawFile).then(res => {
      return this._setCustomProperty(data, path, res.body);
    });

  uploadMultipleImages = async (data: any, files: any, path: string) =>
    await this._uploadAllFiles(files.map((file: any) => file.rawFile)).then(
      res => {
        let gallery: any[] = objectPath.get(data, path) || [];
        gallery = [...gallery, ...res.map(this._mapToGallery)];
        gallery.forEach((val, i) => (val.id = i + 1));
        return this._setCustomProperty(data, path, gallery);
      }
    );
}

export default new ImageService();
