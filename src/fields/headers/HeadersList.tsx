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
    <List pagination={false} {...props}>
      <Datagrid>
        <TextField source='id' sortable={false} />
        <TextField source='title' sortable={false} />
        <TextField source='text' sortable={false} />
        <EditButton />
        <DeleteButton />
      </Datagrid>
    </List>
  );
};

export default HeadersList;
