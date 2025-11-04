import { destinations } from "@/data/destination";

const Destination = () => {
  return (
    <div className="container mx-auto px-4 py-12 ">
      <h2 className="text-3xl font-bold mb-8 text-center">
        Featured Destination
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {destinations.map((destination) => (
          <div
            key={destination.id}
            className="bg-white rounded-2xl drop-shadow-lg hover:drop-shadow-2xl hover:scale-105 overflow-hidden transition-all duration-300 relative group cursor-pointer "
          >
            <div className="relative">
              <img
                src={destination.image}
                alt=""
                className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <h1 className="text-2xl font-bold mb-2 ">{destination.title}</h1>
              <p className="">{destination.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Destination;
