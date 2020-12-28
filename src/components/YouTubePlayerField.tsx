import React from 'react';
import { parseUrl } from '../common/YouTubeLinkParser';
import YouTubePlayer from '../common/YouTubePlayer';

function YouTubePlayerField(props) {
  console.log(props);
  if (parseUrl(props.record.videoOptions.ytLink)) {
    return (
      <YouTubePlayer
        className={props.className}
        link={props.record.videoOptions.ytLink}
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
