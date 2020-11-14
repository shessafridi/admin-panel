import React from 'react';
import { parseUrl } from './YouTubeLinkParser';

export interface YouTubePlayerProps {
  link: string;
  id?: string;
}

const YouTubePlayer: React.FC<YouTubePlayerProps> = props => {
  const url = parseUrl(props.link);
  if (!url) return <p>Invalid Url</p>;
  return (
    <iframe
      title='YouTube Player'
      width='560'
      style={{ width: '100%', height: '100%', minHeight: '300px' }}
      src={'https://www.youtube.com/embed/' + url}
      frameBorder='0'
      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
      allowFullScreen
    ></iframe>
  );
};

export default YouTubePlayer;
