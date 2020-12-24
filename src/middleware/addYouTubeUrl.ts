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

      gallery = validateYouTubeUrl(gallery, record);

      objectPath.set(data, path, gallery);
    });
  }
  delete data.mergeFields;
};

const validateYouTubeUrl = (gallery: any[], record: any) => {
  if (Array.isArray(gallery)) {
    const validated = (record as any[]).reduce((prev: any[], val) => {
      if (parseUrl(val?.ytLink))
        prev.push({
          id: gallery.length + 1,
          ...val,
        });
      return prev;
    }, []);
    return [...gallery, ...validated];
  }

  const validated = (record as any[]).reduce((prev: any[], val, i) => {
    if (parseUrl(val.ytLink))
      prev.push({
        id: i + 1,
        ...val,
      });
    return prev;
  }, []);

  return [...validated];
};
