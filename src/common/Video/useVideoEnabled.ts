import { useQueryWithStore } from 'react-admin';

export function useVideoEnabled(resource: string, id: string) {
  const { data } = useQueryWithStore({
    type: 'getOne',
    resource,
    payload: { id },
  });
  return data?.videoOptions.enabled;
}

export function useYouTubeLink(resource: string, id: string) {
  const { data } = useQueryWithStore({
    type: 'getOne',
    resource,
    payload: { id },
  });
  return data?.videoOptions.ytLink;
}
