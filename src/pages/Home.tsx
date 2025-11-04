import homePage from "@/assets/hero.png";
import Clients from "@/components/Clients";
import Destination from "@/components/Destination";
import Services from "@/components/Services";

const Home = () => {
  return (
    <>
      <div className="relative min-h-screen w-full">
        <img
          src={homePage}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/30 to-black/50" />
        <div className="relative flex flex-col justify-center items-center text-center text-white px-4 py-12 min-h-screen">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white via-gray-100 to-blue-50 bg-clip-text text-transparent tracking-tight">
            Explore the World with Us
          </h1>
          <p className="text-lg md:text-2xl mb-8 text-gray-200 font-medium">
            Discover amazing places at exclusive deals
          </p>
          <button className="border rounded-3xl px-6 py-3 text-white font-semibold hover:bg-blue-600 transition-colors duration-400 hover:scale-105 text-lg md:text-xl">
            Get Started
          </button>
        </div>
      </div>
      <Destination />
      <Services/>
      <Clients/>
    </>
  );
};

export default Home;
