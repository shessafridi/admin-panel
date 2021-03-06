import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import React from 'react';

function MainContainer(props) {
  const isSmall = useMediaQuery(useTheme().breakpoints.down('sm'));
  return (
    <div
      style={{
        padding: '10px',
      }}
    >
      <div
        style={{
          boxShadow: '0 3px 66px -24px rgba(0,0,0,.2)',
          padding: `10px ${isSmall ? '15px' : '40px'}`,
          borderRadius: '10px',
          backgroundColor: 'white',
          marginTop: '8px',
        }}
      >
        {props.children}
      </div>
    </div>
  );
}

export default MainContainer;
