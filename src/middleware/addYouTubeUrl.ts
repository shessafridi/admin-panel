import { ResourceData } from '../models/ResourceData';
import objectPath from 'object-path';
import { parseUrl } from '../common/YouTubeLinkParser';

export const addYouTubeUrlIfExist = (data: ResourceData) => {
  if (data.mergeFields) {
    const recordToMerge = Object.entries(data.mergeFields).map(
      ([path, record]) => ({
        path: path.replace(/_/g, '.'),
        record,
      })
    );
    recordToMerge.forEach(({ path, record }) => {
      let gallery: any[] = objectPath.get(data, path);
      const validated = validateYouTubeUrl(gallery, record);

      gallery = [...gallery, ...validated];

      objectPath.set(data, path, gallery);
    });
  }
  delete data.mergeFields;
};

const validateYouTubeUrl = (gallery: any[], record: any) => {
  let validated;
  if (Array.isArray(gallery)) {
    validated = (record as any[]).reduce((prev: any[], val) => {
      if (parseUrl(val.ytLink))
        prev.push({
          id: gallery.length + 1,
          ...val,
        });
      return prev;
    }, []);
  } else {
    validated = (record as any[]).reduce((prev: any[], val, i) => {
      if (parseUrl(val.ytLink))
        prev.push({
          id: i + 1,
          ...val,
        });
      return prev;
    }, []);
  }

  return validated;
};
