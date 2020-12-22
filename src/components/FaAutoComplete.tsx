import React from 'react';
import { AutocompleteInputInDialog } from '../common/AutoCompleteInDialog';
import FaListRenderer from '../common/FaListRenderer';
import { icons } from '../common/icons';

function FaAutoComplete({ source, ...rest }) {
  return (
    <AutocompleteInputInDialog
      label='Navigation Icon'
      translateChoice={false}
      fullWidth
      source={source}
      suggestionLimit={40}
      matchSuggestion={(filter, choice) =>
        !!filter && choice.name.toLowerCase().startsWith(filter.toLowerCase())
      }
      inputText={choice => `${choice.name}`}
      optionText={<FaListRenderer />}
      choices={icons}
      {...rest}
    />
  );
}

export default FaAutoComplete;
