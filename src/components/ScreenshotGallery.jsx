import React from "react";

const ScreenshotGallery = ({ images }) => {
  return (
    <div className="flex gap-10 justify-center max-sm:flex-col max-sm:items-center">
      {images.map((image, index) => (
        <img key={index} src={image.src} alt={image.alt} />
      ))}
    </div>
  );
};

export default ScreenshotGallery;
