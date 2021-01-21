import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import React from 'react';
import { Datagrid, List } from 'react-admin';
import Dialog from './Dialog/Dialog';
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
  title?: string;
}

const ListView: React.FC<ListViewProps> = ({
  createDialogView,
  children,
  record,
  editDialogView,
  desc,
  setShowModal,
  showModal,
  title,
  ...rest
}) => {
  const defaultTitle = rest.resource[0].toUpperCase() + rest.resource.slice(1);
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <MainContainer>
      <h3 className='listview-title'>{title || defaultTitle} List</h3>
      <p>{desc}</p>

      <List
        pagination={false}
        component='div'
        bulkActionButtons={isSmall ? false : undefined}
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
