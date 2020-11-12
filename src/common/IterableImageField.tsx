import { makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles({
  root: {
    maxHeight: '18rem',
    width: '100%',
    objectFit: 'cover',
    objectPosition: 'center center',
  },
});

function IterableImageField(props: { src: any }) {
  const classes = useStyles();
  return <img loading='lazy' className={classes.root} src={props.src} alt='' />;
}

export default IterableImageField;
