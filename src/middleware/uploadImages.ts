import { ResourceData } from '../models/ResourceData';
import imageUploadService from '../services/imageUploadService';

export async function uploadImagesIfExist(data: ResourceData) {
  if (data.imageUploaders) {
    const images = Object.entries(data.imageUploaders).map(([path, files]) => ({
      path: path.replace(/_/g, '.'),
      files,
    }));
    await Promise.all(
      images.map(({ files, path }) => {
        if (Array.isArray(files))
          return imageUploadService.uploadMultipleImages(data, files, path);
        return imageUploadService.uploadSingleImage(data, files, path);
      })
    );
  }

  delete data.imageUploaders;
}
