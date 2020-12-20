import React from 'react';
import Button from '@material-ui/core/Button';
import { useRefresh } from 'react-admin';
import Typography from '@material-ui/core/Typography';
import FadeModal from './FadeModal';

interface CreateDialogProps {
  setVisable: (arg: boolean | string) => any;
  visable: string | boolean;
  renderChild: any;
}

const CreateDialog: React.FC<CreateDialogProps> = ({
  setVisable,
  renderChild: RenderChild,
  visable,
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
    <FadeModal visable={visable === 'create'} onClose={() => setVisable(false)}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          margin: '0 10px',
        }}
      >
        <Typography variant='h6'>Create a new record</Typography>
        <Button style={{ color: '#f44336' }} onClick={() => setVisable(false)}>
          Close
        </Button>
      </div>
      <RenderChild
        onFailure={handleError}
        component='div'
        onSuccess={handleSave}
        {...rest}
      />
    </FadeModal>
  );
};

export default CreateDialog;
