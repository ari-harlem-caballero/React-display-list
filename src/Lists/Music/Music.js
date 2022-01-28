import React from 'react';

export default function Music({
  artist,
  type,
  img,
  album
}) {
  return <div className='music-div'>
    <p className='music-artist'>Artist: {artist}</p>
    <p>Type: {type}</p>
    <img alt={artist} src={img} width={300}/>
    <div className='music-album'>
      <p className='album-title'>Album Title: {album.title}</p>
      <p>Release Date: {album.date}</p>
      <img alt={album.title} src={album.img} width={200}/>
    </div>
  </div>;
}

