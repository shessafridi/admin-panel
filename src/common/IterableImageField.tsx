import { makeStyles } from '@material-ui/core';
import React from 'react';
import { ImageFieldProps } from 'react-admin';

const useStyles = makeStyles({
  root: {
    maxHeight: '10rem',
    margin: '0.5rem',
  },
});

function IterableImageField(props: ImageFieldProps) {
  const classes = useStyles();
  return <img className={classes.root} src={props.record?.imageUrl} alt='' />;
}

export default IterableImageField;
