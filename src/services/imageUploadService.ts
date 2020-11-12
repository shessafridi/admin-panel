import { fetchUtils } from 'ra-core';
import { fileUploadUrl } from '../config';
import objectPath from 'object-path';
class ImageService {
  private _uploadAllFiles = (files: File[]) => {
    // console.log(files);
    // const output: string[] = [];
    return Promise.all(
      files.map(file => this._uploadFile(file))
    ).then(response => response.map(res => res.body));
  };
  private _uploadFile = (file: File) => {
    const form = new FormData();
    form.append('formFile', file, file.name);
    return fetchUtils.fetchJson(fileUploadUrl, {
      method: 'POST',
      body: form,
    });
  };

  private _setCustomProperty = (data: any, fieldName: string, value: any) => {
    return objectPath.set(data, fieldName, value);
  };

  private _mapToGallery = (link: string, index: number) => ({
    id: index + 1,
    imageUrl: link.replace(/"/g, ''),
  });

  uploadSingleImage = async (data: any, file: any, path: string) =>
    await this._uploadFile(file.rawFile).then(res => {
      return this._setCustomProperty(data, path, res.body.replace(/"/g, ''));
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
