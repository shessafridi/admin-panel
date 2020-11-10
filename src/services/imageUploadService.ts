import { fetchUtils } from 'ra-core';
import { fileUploadUrl } from '../config';
class ImageService {
  uploadAllFiles = (files: File[]) => {
    // const output: string[] = [];
    return Promise.all(
      files.map(file => this.uploadFile(file))
    ).then(response => response.map(res => res.body));
  };
  uploadFile = (file: File) => {
    const form = new FormData();
    form.append('formFile', file, file.name);
    console.log(form);
    console.log(file);
    return fetchUtils.fetchJson(fileUploadUrl, {
      method: 'POST',
      body: form,
    });
  };
}

export default new ImageService();
