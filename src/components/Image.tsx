import { useEffect, useState } from "react";

interface Props {
  images: any[];
}
const Image = ({ images }: Props) => {
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
    <img
      style={{ height: "100px" }}
      src={images?.[currentIndex]?.thumb}
      alt='Hello World og mugshots'
    />
  );
};

export default Image;
