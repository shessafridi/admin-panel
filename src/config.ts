export const apiUrl =
  process.env.REACT_APP_API_URL || 'http://localhost:3100/segments';

export const authUrl =
  process.env.REACT_APP_AUTH_URL || 'https://api.alhamdian.pk/api/login';

export const fileUploadUrl =
  process.env.REACT_APP_FILE_UPLOAD_URL ||
  'https://api.cloudinary.com/v1_1/dney8huya/upload';

export const title = process.env.REACT_APP_TITLE || 'Alhamdian Dashboard';
export const DEFAULT_PATH = 'imageUrl';
