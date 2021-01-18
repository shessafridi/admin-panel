import React from 'react';
import {
  useListContext,
  TopToolbar,
  ExportButton,
  Button,
  sanitizeListRestProps,
} from 'react-admin';
import IconAdd from '@material-ui/icons/Add';

const ListActions = ({
  className,
  exporter,
  filters,
  maxResults,
  createAction,
  ...rest
}: any) => {
  const { currentSort, resource, filterValues, total } = useListContext();
  return (
    <TopToolbar className={className} {...sanitizeListRestProps(rest)}>
      <Button onClick={createAction} label='Add New'>
        <IconAdd />
      </Button>
      <ExportButton
        disabled={total === 0}
        resource={resource}
        sort={currentSort}
        filterValues={filterValues}
        maxResults={maxResults}
      />
      {/* Add your custom actions */}
    </TopToolbar>
  );
};
export default ListActions;
