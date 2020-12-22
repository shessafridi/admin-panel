import React, { useContext } from 'react';
import { DeleteButton, SaveButton, Toolbar, ToolbarProps } from 'react-admin';
import { DialogContext } from './Dialog';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
});

export interface DialogToolBarProps extends ToolbarProps {}

const DialogToolBar: React.FC<DialogToolBarProps> = (props: any) => {
  const dialogContext = useContext(DialogContext);
  return (
    <Toolbar
      classes={{ spacer: 'noSpacer', toolbar: useStyles().toolbar }}
      width={'lg'}
      {...props}
    >
      <SaveButton disabled={props.saving && props.invalid} />
      <DeleteButton
        undoable={true}
        style={{}}
        label=''
        onClick={e => {
          e.stopPropagation();
          dialogContext.closeDialog();
        }}
      />
    </Toolbar>
  );
};

export default DialogToolBar;
