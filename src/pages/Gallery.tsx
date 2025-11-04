import homePage from "@/assets/hero.png";
import { images } from "@/data/images";

const Gallery = () => {
  return (
    <>
      <div className="relative min-h-screen w-full">
        <img
          src={homePage}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/30 to-black/50" />
        <div className="relative min-h-screen text-white py-12 px-4 flex flex-col justify-center items-center">
          <h1 className="text-5xl sm:text-6xl md:text-7xl  bg-gradient-to-r from-white via-gray-100 to-blue-50 bg-clip-text text-transparent font-bold ">
            Gallery
          </h1>
        </div>
      </div>
      <div className="container mx-auto py-12 px-4 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {images.map((image) => (
            <div key={image} className="rounded-2xl overflow-hidden shadow-lg hover:scale-105 cursor-pointer">
              <img src={image} alt="" className="w-full h-62 object-cover " />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Gallery;
