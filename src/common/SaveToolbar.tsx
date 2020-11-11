import React from 'react';
import { SaveButton, Toolbar, ToolbarProps } from 'react-admin';

export interface SaveToolbarProps extends ToolbarProps {}

const SaveToolbar: React.FC<SaveToolbarProps> = (props: any) => {
  return (
    <Toolbar {...props}>
      <SaveButton disabled={props.saving && props.invalid} />
    </Toolbar>
  );
};

export default SaveToolbar;
