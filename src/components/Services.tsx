import { services } from "@/data/services";

const Services = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold mb-8 text-center">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <div
              key={service.id}
              className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center text-center cursor-pointer 
                         transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
            >
              <Icon className="text-blue-600 text-4xl mb-4" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-800">{service.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
