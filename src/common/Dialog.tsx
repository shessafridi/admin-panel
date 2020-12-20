import React from 'react';
import Button from '@material-ui/core/Button';
import { useRefresh } from 'react-admin';
import Typography from '@material-ui/core/Typography';
import FadeModal from './FadeModal';

interface DialogProps {
  id?: number;
  setVisable: (arg: boolean | string) => any;
  type: 'edit' | 'create';
  visable: string | boolean;
  renderChild: any;
}

const Dialog: React.FC<DialogProps> = ({
  setVisable,
  renderChild: RenderChild,
  visable,
  type,
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

  return (
    <FadeModal visable={visable === type} onClose={() => setVisable(false)}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          margin: '0 10px',
        }}
      >
        <Typography variant='h6'>
          {type === 'create' ? 'Create a new record' : 'Edit Record'}
        </Typography>
        <Button style={{ color: '#f44336' }} onClick={() => setVisable(false)}>
          Close
        </Button>
      </div>
      <RenderChild
        undoable={type === 'edit' ? false : undefined}
        onFailure={handleError}
        component='div'
        onSuccess={handleSave}
        {...rest}
      />
    </FadeModal>
  );
};

export default Dialog;
