import React from 'react';
import Music from './Music';

export default function MusicList(props) {
  return <div className='music-list'>
    {props.musics.map((music, i) => <Music key={`${music.artist}-${i}`} {...music}/>)}
  </div>;
}

