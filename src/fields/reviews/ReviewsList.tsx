import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import * as React from 'react';
import { DeleteButton, TextField } from 'react-admin';
import GridViewButton from '../../common/GridViewButton';
import ListView from '../../common/ListView';
import CreateReview from './ReviewsCreate';
import EditReview from './ReviewsEdit';

export interface ReviewListProps {}
const ReviewList: React.FC<ReviewListProps> = props => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));

  const [showModal, setShowModal] = React.useState<string | boolean>(false);
  const [record, setRecord] = React.useState<any>();

  return (
    <ListView
      showModal={showModal}
      setShowModal={setShowModal}
      record={record}
      createDialogView={CreateReview}
      editDialogView={EditReview}
      desc='Add or remove Reviews.'
      {...props}
    >
      <TextField label='Name' source='name' sortable={false} />
      <TextField label='Review' source='review' sortable={false} />
      <GridViewButton
        showDialog={() => setShowModal('edit')}
        setRecord={setRecord}
      />
      {!isSmall && <DeleteButton />}
    </ListView>
  );
};

export default ReviewList;
