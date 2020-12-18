import { useMediaQuery, useTheme } from '@material-ui/core';
import * as React from 'react';
import { Datagrid, DeleteButton, List, TextField } from 'react-admin';
import CreateDialog from '../../common/CreateDialog';
import PaddedContainer from '../../common/PaddedContainer';
import EditDialog from '../../common/EditDialog';
import GridViewButton from '../../common/GridViewButton';
import EditHeader from './HeaderEdit';
import ListActions from '../../common/ListAction';

export interface HeadersListProps {}
const HeadersList: React.FC<HeadersListProps> = props => {
  const anyProps = props as any;
  const title = anyProps.resource[0].toUpperCase() + anyProps.resource.slice(1);

  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));

  const [showModal, setShowModal] = React.useState<string | boolean>(false);
  const [record, setRecord] = React.useState<any>();

  return (
    <PaddedContainer padding='10px'>
      <h2>{title} List</h2>

      <List pagination={false} actions={<ListActions />} {...props}>
        <Datagrid style={{ overflowY: 'hidden', overflowX: 'scroll' }}>
          <TextField source='id' sortable={false} />
          <TextField source='title' sortable={false} />
          {!isSmall && <TextField source='text' sortable={false} />}
          <GridViewButton
            showDialog={() => setShowModal('edit')}
            setRecord={setRecord}
            buttonProps={{ color: 'primary' }}
          >
            Edit
          </GridViewButton>
          {!isSmall && <DeleteButton />}
        </Datagrid>
      </List>
      {showModal === 'create' && (
        <CreateDialog record={record} setVisable={setShowModal} {...props} />
      )}
      {showModal === 'edit' && (
        <EditDialog
          id={record!.id}
          record={record!}
          renderChild={EditHeader}
          setVisable={setShowModal}
          {...props}
        />
      )}
    </PaddedContainer>
  );
};

export default HeadersList;
