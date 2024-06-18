import React from 'react';

// Function to import all images from a directory
function importAll(r) {
  return r.keys().map(r);
}

const personalPhotos = importAll(require.context('../images/personalphotos', false, /\.(jpg|jpeg|png)$/));

const Gallery = () => {
  return (
    <div className="gallery-page">
      <h1>Gallery</h1>
      <div className="gallery">
        {personalPhotos.map((photo, index) => (
          <img key={index} src={photo} alt={`IMG ${index + 1}`} className="gallery-photo" />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
