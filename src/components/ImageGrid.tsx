import React, { useState } from "react";
import Navbar from "./Navbar";

type Image = {
  id: number;
  src: string;
};

interface ImageGridProps {
  images: Image[];
}

const ImageGrid: React.FC<ImageGridProps> = ({ images }) => {
  const [selectedImages, setSelectedImages] = useState<number[]>([]);
  const [gridImages, setGridImages] = useState<Image[]>(images);

  const toggleImageSelection = (imageId: number) => {
    if (selectedImages.includes(imageId)) {
      setSelectedImages(selectedImages.filter((id) => id !== imageId));
    } else {
      setSelectedImages([...selectedImages, imageId]);
    }
  };

  const handleDelete = (ids: number[]) => {
    setGridImages(gridImages.filter((image) => !ids.includes(image.id)));
    setSelectedImages([]);
  };
  return (
    <>
      <Navbar images={selectedImages} handleDelete={handleDelete} />
      <hr className="my-5" />
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {gridImages.map((image, index) => (
          <div
            key={image.id}
            className={`relative group cursor-pointer overflow-hidden ${
              index === 0
                ? "md:row-span-2 lg:row-span-2 md:col-span-2 lg:col-span-2"
                : "md:row-span-1 lg:row-span-1 md:col-span-1 lg:col-span-1"
            }`}
          >
            <input
              type="checkbox"
              className="absolute top-2 left-2 z-10 cursor-pointer"
              onChange={() => toggleImageSelection(image.id)}
              checked={selectedImages.includes(image.id)}
            />
            <img
              src={image.src}
              alt={`Image ${image.id}`}
              className={`w-full h-auto transform scale-100 group-hover:scale-105 hover:opacity-50 transition-transform duration-300 border border-gray-300 ${
                selectedImages.includes(image.id) ? "hover: opacity-50" : ""
              }`}
            />
          </div>
        ))}{" "}
      </div>
    </>
  );
};

export default ImageGrid;
