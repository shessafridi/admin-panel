import { useMediaQuery, useTheme } from '@material-ui/core';
import * as React from 'react';
import {
  Datagrid,
  DeleteButton,
  EditButton,
  List,
  TextField,
} from 'react-admin';
import PaddedContainer from '../../common/PaddedContainer';

export interface HeadersListProps {}
const HeadersList: React.FC<HeadersListProps> = props => {
  const anyProps = props as any;
  const title = anyProps.resource[0].toUpperCase() + anyProps.resource.slice(1);

  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <PaddedContainer padding='10px'>
      <h2>{title} List</h2>

      <List pagination={false} {...props}>
        <Datagrid style={{ overflowY: 'hidden', overflowX: 'scroll' }}>
          <TextField source='id' sortable={false} />
          <TextField source='title' sortable={false} />
          {!isSmall && <TextField source='text' sortable={false} />}
          <EditButton />
          {!isSmall && <DeleteButton />}
        </Datagrid>
      </List>
    </PaddedContainer>
  );
};

export default HeadersList;
