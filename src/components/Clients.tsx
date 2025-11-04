import { clients } from "@/data/clients";

const Clients = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      <h2 className="text-3xl font-semibold mb-8 text-center">
        What Our Clients Say
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {clients.map((client) => (
          <div
            key={client.id}
            className="bg-white rounded-lg shadow-lg hover:shadow-2xl p-4 flex flex-col justify-center items-center transition transform duration-300 text-center hover:scale-105 cursor-pointer overflow-hidden"
          >
            <img src={client.image} alt="" className="w-24 h-24 rounded-full mx-auto mb-4" />
            <h3 className="font-semibold mb-2">{client.name}</h3>
            <p className="italic mb-2">{client.location}</p>
            <p className="italic mb-2">{client.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clients;
