import React from 'react';
import PhotoItem from './PhotoItem';

function PhotoGrid({ photos, editPhoto, deletePhoto }) {
  return (
    <div className="photo-grid">
      {photos.map((photo, index) => (
        <PhotoItem
          key={index}
          index={index}
          photo={photo}
          editPhoto={editPhoto}
          deletePhoto={deletePhoto}
        />
      ))}
    </div>
  );
}

export default PhotoGrid;
