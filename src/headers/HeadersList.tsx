import * as React from 'react';
import {
  Datagrid,
  DeleteButton,
  EditButton,
  List,
  TextField,
} from 'react-admin';

export interface HeadersListProps {}
const HeadersList: React.FC<HeadersListProps> = props => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source='id' />
        <TextField source='title' />
        <TextField source='text' />
        <EditButton basePath='id' />
        <DeleteButton basePath='id' />
      </Datagrid>
    </List>
  );
};

export default HeadersList;
