import React from 'react';
import { Backdrop, Button, Fade, makeStyles, Modal } from '@material-ui/core';
import { useRefresh } from 'react-admin';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  modal: {
    display: 'flex',
    overflowY: 'scroll',
    flexDirection: 'column',
    alignItems: 'center',
    scrollbarWidth: 'none',
  },
  dialog: {
    position: 'relative',
    backgroundColor: 'white',
    maxWidth: '740px',
    width: '100%',
    marginTop: '40px',
    marginBottom: '30px',
    borderRadius: '10px',
    padding: '20px',
  },
});

export interface EditDialogProps {
  id: number;
  setVisable: (arg: boolean | string) => any;
  visable: string | boolean;
  renderChild: any;
  basePath?: string;
}

const EditDialog: React.FC<EditDialogProps> = ({
  setVisable,
  renderChild: RenderChild,
  visable,
  basePath,
  ...rest
}) => {
  const refresh = useRefresh();
  const handleSave = () => {
    refresh();
    setVisable(false);
  };
  const handleError = e => {
    alert('Something went wrong.');
    console.log(e);
  };

  const classes = useStyles();

  const handleClose = e => {
    setVisable(false);
  };

  return (
    <Modal
      className={classes.modal}
      open={visable === 'edit'}
      closeAfterTransition
      onClose={handleClose}
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={visable === 'edit'}>
        <div className={classes.dialog}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              margin: '0 10px',
            }}
          >
            <Typography variant='h6'>Edit Record</Typography>
            <Button
              style={{ color: '#f44336' }}
              onClick={() => setVisable(false)}
            >
              Close
            </Button>
          </div>
          <RenderChild
            basePath={basePath}
            undoable={false}
            onFailure={handleError}
            component='div'
            onSuccess={handleSave}
            {...rest}
          />
        </div>
      </Fade>
    </Modal>
  );
};

export default EditDialog;