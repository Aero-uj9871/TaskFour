import React from "react";
type SideImagesProps = {
  images: string[];
};
 
const HorCorousel: React.FC<SideImagesProps> = ({ images }) => {
  return (
    <section className="w-full overflow-x-auto whitespace-nowrap p-2 flex gap-4
      [&::-webkit-scrollbar]:h-2
      [&::-webkit-scrollbar-track]:rounded-full
      [&::-webkit-scrollbar-track]:bg-gray-100
      [&::-webkit-scrollbar-thumb]:rounded-full
      [&::-webkit-scrollbar-thumb]:bg-gray-300
      dark:[&::-webkit-scrollbar-track]:bg-neutral-700
      dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
     
      {images.map((image, index) => (
        <div key={index} className="min-w-[150px] h-32 flex items-center justify-center bg-white rounded-lg overflow-hidden">
          <img
            src={image}
            className="w-full h-full object-cover"
            alt={`Image ${index}`}
          />
        </div>
      ))}
    </section>
  );
};
 
export default HorCorousel;