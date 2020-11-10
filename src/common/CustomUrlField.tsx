import React from 'react';
import { TextInput } from 'react-admin';

export interface CustomUrlFieldProps {
  path: string;
}

const CustomUrlField: React.FC<CustomUrlFieldProps> = ({ path, ...rest }) => {
  return (
    <TextInput
      {...rest}
      style={{ display: 'none' }}
      defaultValue={path}
      source='customUrlField'
    />
  );
};

export default CustomUrlField;
