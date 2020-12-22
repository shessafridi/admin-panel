import { useTheme, useMediaQuery } from '@material-ui/core';
import React from 'react';
import { Datagrid, List } from 'react-admin';
import Dialog from './Dialog';
import ListActions from './ListAction';
import MainContainer from './MainContainer';

export interface ListViewProps {
  [x: string]: any;
  createDialogView: React.FC;
  editDialogView: React.FC;
  desc: string;
  showModal: string | boolean;
  setShowModal: (arg: boolean | string) => void;
  record: any;
}

const ListView: React.FC<ListViewProps> = ({
  createDialogView,
  children,
  record,
  editDialogView,
  desc,
  setShowModal,
  showModal,
  ...rest
}) => {
  const title = rest.resource[0].toUpperCase() + rest.resource.slice(1);
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <MainContainer>
      <h3>{title} List</h3>
      <p>{desc}</p>

      <List
        pagination={false}
        component='div'
        actions={<ListActions createAction={() => setShowModal('create')} />}
        {...rest}
      >
        <Datagrid
          size={isSmall ? 'small' : 'medium'}
          style={{ overflowY: 'hidden', overflowX: 'scroll' }}
        >
          {children}
        </Datagrid>
      </List>
      <Dialog
        type='create'
        renderChild={createDialogView}
        visable={showModal}
        setVisable={setShowModal}
        {...rest}
      />
      {record && (
        <Dialog
          id={record.id}
          type='edit'
          renderChild={editDialogView}
          visable={showModal}
          setVisable={setShowModal}
          {...rest}
        />
      )}
    </MainContainer>
  );
};

export default ListView;
