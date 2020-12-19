import { Button, ButtonProps } from '@material-ui/core';
import React from 'react';
import IconEdit from '@material-ui/icons/Edit';

interface GridViewButtonProps {
  buttonProps?: ButtonProps;
  showDialog: () => any;
  setRecord: (record: any) => void;
  record?: any;
}

const GridViewButton: React.FC<GridViewButtonProps> = ({
  showDialog,
  setRecord,
  record,
}) => {
  const handleClick = () => {
    showDialog();
    setRecord(record);
  };

  return (
    <>
      <Button color='primary' startIcon={<IconEdit />} onClick={handleClick}>
        Edit
      </Button>
    </>
  );
};

export default GridViewButton;
