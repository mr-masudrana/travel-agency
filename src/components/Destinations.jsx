const destinations = [
  { id: 1, name: "Maldives", img: "https://source.unsplash.com/400x300/?maldives" },
  { id: 2, name: "Paris", img: "https://source.unsplash.com/400x300/?paris" },
  { id: 3, name: "Bali", img: "https://source.unsplash.com/400x300/?bali" },
  { id: 4, name: "Dubai", img: "https://source.unsplash.com/400x300/?dubai" },
];

export default function Destinations() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Popular Destinations</h2>
      <div className="grid md:grid-cols-4 gap-6">
        {destinations.map((d) => (
          <div key={d.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:scale-105 transition">
            <img src={d.img} alt={d.name} className="w-full h-48 object-cover" />
            <div className="p-4 text-center">
              <h3 className="text-xl font-semibold">{d.name}</h3>
              <button className="mt-3 px-4 py-2 bg-yellow-500 text-black rounded-md hover:bg-yellow-400">Book Now</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
