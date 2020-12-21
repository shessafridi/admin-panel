import React from 'react';
import { Backdrop, Fade, makeStyles, Modal } from '@material-ui/core';

const useStyles = makeStyles({
  modal: {
    display: 'flex',
    overflowY: 'scroll',
    flexDirection: 'column',
    alignItems: 'center',
    scrollbarWidth: 'none',
  },
  dialog: {
    flexBasis: 'auto',
    position: 'relative',
    backgroundColor: 'white',
    maxWidth: '760px',
    width: '100%',
    marginTop: '40px',
    marginBottom: '30px',
    borderRadius: '10px',
    padding: '20px',
    zIndex: -1,
  },
});

export interface FadeModalProps {
  visable: boolean;
  onClose: () => void;
}

const FadeModal: React.FC<FadeModalProps> = ({
  children,
  visable,
  onClose,
}) => {
  const classes = useStyles();
  return (
    <Modal
      className={classes.modal}
      open={visable}
      closeAfterTransition
      onClose={onClose}
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={visable}>
        <div className={classes.dialog}>{children}</div>
      </Fade>
    </Modal>
  );
};

export default FadeModal;
