import React from 'react';
import { parseUrl } from '../common/Video/YouTubeLinkParser';
import YouTubePlayer from '../common/Video/YouTubePlayer';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles({
  root: {
    width: '100%',
    height: '200px',
  },
});

function YouTubePlayerField(props) {
  const classes = useStyles();
  if (parseUrl(props.link)) {
    return (
      <YouTubePlayer
        className={props.className || classes.root}
        link={props.link}
      />
    );
  }
  return (
    <>
      <div>Please enter a valid YouTube Url</div>
    </>
  );
}

export default YouTubePlayerField;
