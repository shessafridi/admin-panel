import withStyles from '@material-ui/core/styles/withStyles';
import { AutocompleteInput } from 'react-admin';

export const AutocompleteInputInDialog = withStyles({
  suggestionsContainer: { zIndex: 2000 },
})(AutocompleteInput);
