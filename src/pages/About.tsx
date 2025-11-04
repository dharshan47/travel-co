import homePage from "@/assets/hero.png";

const About = () => {
  return (
    <>
      <div className="relative min-h-screen w-full">
        <img
          src={homePage}
          alt=""
          className="w-full h-full object-cover absolute inset-0"
        />
        <div className=" absolute inset-0 bg-gradient-to-t from-black/50 via-black/30 to-black/50 " />
        <div className="relative min-h-screen flex flex-col justify-center items-center text-white py-12 px-4 text-center">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold bg-gradient-to-r from-white via-gray-100 to-blue-50 bg-clip-text text-transparent ">
            About Us
          </h1>
        </div>
      </div>
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <img
              src={homePage}
              className="w-full h-full object-cover rounded-2xl "
            />
          </div>
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-semibold mb-4">Who We Are</h3>
            <p className="text-gray-800 mb-4">
              We are a passionate travel agency committed to providing the best
              travel experience for our clients. Our team of dedicated
              professionals works tirelessly to ensure your trips are seamless
              and unforgettable.
            </p>
            <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
            <p className="text-gray-800 mb-4">
              Our mission is to create amazing travel experience that inspire
              and enrich the lives of our clients. We believe in personalized
              service, attention to detail, and providing exceptional value.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
