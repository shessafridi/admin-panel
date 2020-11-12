import { makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles({
  root: {
    maxHeight: '10rem',
    width: '100%',
    objectFit: 'cover',
    objectPosition: 'center center',
  },
});

function IterableImageField(props: { src: any }) {
  const classes = useStyles();
  console.log(props);
  return <img className={classes.root} src={props.src} alt='' />;
}

export default IterableImageField;
