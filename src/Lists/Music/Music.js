import React from 'react';

export default function Music({
  artist,
  type,
  img,
  album
}) {
  return <div className='music-div'>
    <p>Artist: {artist}</p>
    <p>Type: {type}</p>
    <img alt={artist} src={img}/>
    <div className='music-album'>
      <p>Album Title: {album.title}</p>
      <p>Release Date: {album.date}</p>
      <img alt={album.title} src={album.img}/>
    </div>
  </div>;
}

