import React from 'react';

export interface EditDialogProps {
  id: number;
  setVisable: (arg: boolean | string) => any;
  renderChild: any;
}

const EditDialog: React.FC<EditDialogProps> = ({
  setVisable,
  renderChild,
  ...rest
}) => {
  console.log({ rest });
  return (
    <div onClick={() => setVisable(false)}>
      Edit Dialog
      {renderChild(rest)}
    </div>
  );
};

export default EditDialog;
