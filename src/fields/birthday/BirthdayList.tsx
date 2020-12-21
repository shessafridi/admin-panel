import { useMediaQuery, useTheme } from '@material-ui/core';
import * as React from 'react';
import { DeleteButton, TextField } from 'react-admin';
import GridViewButton from '../../common/GridViewButton';
import ListView from '../../common/ListView';
import CreateBirthday from './BirthdayCreate';
import EditBirthday from './BirthdayEdit';

export interface BirthdayListProps {}
const BirthdayList: React.FC<BirthdayListProps> = props => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));

  const [showModal, setShowModal] = React.useState<string | boolean>(false);
  const [record, setRecord] = React.useState<any>();

  return (
    <ListView
      showModal={showModal}
      setShowModal={setShowModal}
      record={record}
      createDialogView={CreateBirthday}
      editDialogView={EditBirthday}
      desc='Add or remove birthdays.'
      {...props}
    >
      <TextField source='reg' sortable={false} />
      <TextField source='name' sortable={false} />
      <GridViewButton
        showDialog={() => setShowModal('edit')}
        setRecord={setRecord}
      />
      {!isSmall && <DeleteButton />}
    </ListView>
  );
};

export default BirthdayList;
