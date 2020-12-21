import { useMediaQuery, useTheme } from '@material-ui/core';
import * as React from 'react';
import { DeleteButton, TextField } from 'react-admin';
import GridViewButton from '../../common/GridViewButton';
import ListView from '../../common/ListView';
import CreateNews from './NewsCreate';
import EditNews from './NewsEdit';

export interface NewsListProps {}
const NewsList: React.FC<NewsListProps> = props => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));

  const [showModal, setShowModal] = React.useState<string | boolean>(false);
  const [record, setRecord] = React.useState<any>();
  return (
    <ListView
      showModal={showModal}
      setShowModal={setShowModal}
      record={record}
      createDialogView={CreateNews}
      editDialogView={EditNews}
      desc='Customize the news section of the website.'
      {...props}
    >
      <TextField source='id' sortable={false} />
      <TextField source='title' sortable={false} />
      {!isSmall && <TextField source='text' sortable={false} />}
      <GridViewButton
        showDialog={() => setShowModal('edit')}
        setRecord={setRecord}
      />
      {!isSmall && <DeleteButton />}
    </ListView>
  );
};

export default NewsList;
