import React, { useState } from 'react';
import PhotoGrid from './components/PhotoGrid';
import PhotoForm from './components/PhotoForm';
import './App.css';

function App() {
  const [photos, setPhotos] = useState([]);

  const addPhoto = (photo) => {
    setPhotos([...photos, photo]);
  };

  const editPhoto = (index, updatedPhoto) => {
    const updatedPhotos = photos.map((photo, ind) => (ind === index ? updatedPhoto : photo));
    setPhotos(updatedPhotos);
  };

  const deletePhoto = (index) => {
    const updatedPhotos = photos.filter((_, ind) => ind !== index);
    setPhotos(updatedPhotos);
  };

  return (
    <div className="App">
      <div>
        <PhotoForm addPhoto={addPhoto} />
      </div>
      <div>
        <PhotoGrid photos={photos} editPhoto={editPhoto} deletePhoto={deletePhoto} />
      </div>
    </div>
  );
}

export default App;

