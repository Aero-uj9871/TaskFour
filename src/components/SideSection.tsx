import React from "react";
 
type SideImagesProps = {
  images: string[];
};
 
const SideSection: React.FC<SideImagesProps> = ({ images }) => {
  return (
    <section className="w-full h-[500px] overflow-y-auto p-2">
      <article className="grid grid-cols-2 gap-4">
        {images.map((image, index) => (
          <div key={index} className="w-[155px] h-[110px] flex items-center justify-center bg-white rounded-lg overflow-hidden">
            <img
              src={image}
              className="w-[155px] h-[110px] object-cover"
              alt={`Image ${index}`}
            />
          </div>
        ))}
      </article>
    </section>
  );
};
 
export default SideSection;