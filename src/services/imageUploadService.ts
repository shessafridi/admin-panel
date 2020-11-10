import { fetchUtils } from 'ra-core';
import { fileUploadUrl } from '../config';
import objectPath from 'object-path';
class ImageService {
  private _uploadAllFiles = (files: File[]) => {
    console.log(files);
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

  private _setCustomProperty = (data: any, value: any) => {
    const fieldName: string = data.customUrlField;
    delete data.customUrlField;
    return objectPath.set(data, fieldName, value);
  };

  private _mapToGallery = (link: string, index: number) => ({
    id: index + 1,
    imageUrl: link.replace(/"/g, ''),
  });

  uploadSingleImage = async (data: any) =>
    await this._uploadFile(data.imageUpload.rawFile).then(res => {
      delete data.imageUpload;
      if (data.customUrlField)
        return this._setCustomProperty(data, res.body.replace(/"/g, ''));

      return (data.imageUrl = res.body.replace(/"/g, ''));
    });

  uploadMultipleImages = async (data: any) =>
    await this._uploadAllFiles(
      data.imageUpload.map((raw: any) => raw.rawFile)
    ).then(res => {
      delete data.imageUpload;
      if (data.customUrlField) {
        let gallery: any[] = objectPath.get(data, data.customUrlField) || [];
        gallery = [...gallery, ...res.map(this._mapToGallery)];
        gallery.forEach((val, i) => (val.id = i + 1));
        return this._setCustomProperty(data, gallery);
      }

      return (data.imageUrl = res.map(this._mapToGallery));
    });
}

export default new ImageService();
