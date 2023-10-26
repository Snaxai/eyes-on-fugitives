import React, { useState, useEffect } from 'react';

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to increment the index and loop back to the start
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    // Automatically transition to the next image every 3 seconds (3000 milliseconds)
    const interval = setInterval(nextImage, 3000);

    // Clean up the interval when the component unmounts
    return () => {
      clearInterval(interval);
    };
  }, [currentIndex]);

  return (
    <div style={{height: '500px', width: '400px'}}>
      <img style={{height:'500px'}} src={images[currentIndex].original} alt={`Image ${currentIndex + 1}`} />
    </div>
  );
};

export default ImageSlider;
