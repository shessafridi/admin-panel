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
  buttonProps,
  children,
  setRecord,
  record,
}) => {
  const handleClick = () => {
    showDialog();
    setRecord(record);
  };

  return (
    <>
      <Button startIcon={<IconEdit />} onClick={handleClick} {...buttonProps}>
        {children}
      </Button>
    </>
  );
};

export default GridViewButton;
