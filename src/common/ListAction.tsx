import * as React from 'react';
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
  ...rest
}: any) => {
  const { currentSort, resource, filterValues, total } = useListContext();
  return (
    <TopToolbar className={className} {...sanitizeListRestProps(rest)}>
      <Button
        onClick={() => {
          alert('Your custom action');
        }}
        label='Create'
      >
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
