import React from 'react';
import { Button } from '@material-ui/core';
import { useNotify, useRefresh } from 'react-admin';

export interface EditDialogProps {
  id: number;
  setVisable: (arg: boolean | string) => any;
  renderChild: any;
  basePath?: string;
  record: any;
}

const EditDialog: React.FC<EditDialogProps> = ({
  setVisable,
  renderChild: RenderChild,
  basePath,
  ...rest
}) => {
  console.log({ rest });
  const notify = useNotify();
  const refresh = useRefresh();

  const handleSave = data => {
    console.log(data);
    notify('Changes Saved');
    refresh();
  };

  return (
    <div>
      Edit Dialog
      <Button onClick={() => setVisable(false)}>Close</Button>
      <RenderChild
        basePath={basePath}
        undoable={false}
        onSuccess={handleSave}
        {...rest}
      />
    </div>
  );
};

export default EditDialog;
