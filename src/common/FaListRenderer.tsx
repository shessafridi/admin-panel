import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const FaListRenderer = (props: any) => {
  return (
    <div
      className='faListItem'
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
      }}
    >
      <span>{props.record.name} </span>
      <FontAwesomeIcon
        icon={props.record.name}
        style={{ float: 'right' }}
        color='black'
      />
    </div>
  );
};

export default FaListRenderer;
