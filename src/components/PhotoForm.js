import React, { useState } from 'react';

function PhotoForm({ addPhoto }) {
  const [description, setDescription] = useState('');
  const [photo, setPhoto] = useState(null);

  const handlePhotoChange = (e) => {
    setPhoto(URL.createObjectURL(e.target.files[0]));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (photo && description) {
      addPhoto({ photo, description });
      setPhoto(null);
      setDescription('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
        <div className='form-container'>
            <div className='form-left'>
                Upload Photo:
                <input type="file" onChange={handlePhotoChange} accept="image/*" required />
                <br/>
                Description:
                <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
                />
                <br/>
            </div>
            <div className='form-right'>
                <button type="submit" className = "addButton">Add Photo</button>
            </div>
        </div>
    </form>
  );
}

export default PhotoForm;
