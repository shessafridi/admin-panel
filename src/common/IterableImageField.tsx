import { makeStyles } from '@material-ui/core/styles';
import React from 'react';

const useStyles = makeStyles({
  root: {
    backgroundColor: '#bbb',
    width: '100%',
    maxHeight: '160px',
    objectFit: 'cover',
    objectPosition: 'center center',
  },
});

function IterableImageField(props: { src: any; [x: string]: any }) {
  const classes = useStyles();
  return (
    <img
      loading='lazy'
      {...props}
      height={300}
      className={classes.root}
      src={props.src}
      alt=''
    />
  );
}

export default IterableImageField;
