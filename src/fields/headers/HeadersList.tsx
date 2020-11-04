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
  return (
    <PaddedContainer padding='10px'>
      <h2>{title} List</h2>
      <List pagination={false} {...props}>
        <Datagrid>
          <TextField source='id' sortable={false} />
          <TextField source='title' sortable={false} />
          <TextField source='text' sortable={false} />
          <EditButton />
          <DeleteButton />
        </Datagrid>
      </List>
    </PaddedContainer>
  );
};

export default HeadersList;
