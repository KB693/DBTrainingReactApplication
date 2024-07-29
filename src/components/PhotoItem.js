import React, { useState } from 'react';

function PhotoItem({ photo, index, editPhoto, deletePhoto }) {
  const [isEditing, setIsEditing] = useState(false);
  const [description, setDescription] = useState(photo.description);

  const handleEdit = () => {
    if (isEditing) {
      editPhoto(index, { ...photo, description });
    }
    setIsEditing(!isEditing);
  };

  return (
    <div className="photo-item">
      <img src={photo.photo} alt="Uploaded" />
      {isEditing ? (
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      ) : (
        <p>{photo.description}</p>
      )}
      <button onClick={handleEdit}>{isEditing ? 'Save' : 'Edit'}</button>
      <button onClick={() => deletePhoto(index)}>Delete</button>
    </div>
  );
}

export default PhotoItem;
