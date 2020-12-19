import React from 'react';

function MainContainer(props) {
  return (
    <div
      style={{
        padding: '10px',
        backgroundColor: '#eee',
        borderRadius: '10px',
        boxShadow: '0 3px 66px -24px rgba(0,0,0,.2)',
      }}
    >
      <div style={{ padding: '10px 40px', backgroundColor: 'white' }}>
        {props.children}
      </div>
    </div>
  );
}

export default MainContainer;
