import { useMediaQuery, useTheme } from '@material-ui/core';
import * as React from 'react';
import { Datagrid, DeleteButton, List, TextField } from 'react-admin';
import GridViewButton from '../../common/GridViewButton';
import EditHeader from './HeaderEdit';
import ListActions from '../../common/ListAction';
import MainContainer from '../../common/MainContainer';
import CreateHeader from './HeaderCreate';
import Dialog from './../../common/Dialog';

export interface HeadersListProps {}
const HeadersList: React.FC<HeadersListProps> = props => {
  const anyProps = props as any;
  const title = anyProps.resource[0].toUpperCase() + anyProps.resource.slice(1);

  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));

  const [showModal, setShowModal] = React.useState<string | boolean>(false);
  const [record, setRecord] = React.useState<any>();

  return (
    <MainContainer>
      <h3>{title} List</h3>
      <p>Customize the header section of the website.</p>

      <List
        pagination={false}
        component='div'
        actions={<ListActions createAction={() => setShowModal('create')} />}
        {...props}
      >
        <Datagrid
          size='medium'
          style={{ overflowY: 'hidden', overflowX: 'scroll' }}
        >
          <TextField source='id' sortable={false} />
          <TextField source='title' sortable={false} />
          {!isSmall && <TextField source='text' sortable={false} />}
          <GridViewButton
            showDialog={() => setShowModal('edit')}
            setRecord={setRecord}
          />
          {!isSmall && <DeleteButton />}
        </Datagrid>
      </List>
      <Dialog
        type='create'
        renderChild={CreateHeader}
        visable={showModal}
        setVisable={setShowModal}
        {...props}
      />
      {record && (
        <Dialog
          id={record.id}
          type='edit'
          renderChild={EditHeader}
          visable={showModal}
          setVisable={setShowModal}
          {...props}
        />
      )}
    </MainContainer>
  );
};

export default HeadersList;
