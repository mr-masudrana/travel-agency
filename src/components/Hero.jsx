export default function Hero() {
  return (
    <section className="relative h-[80vh] bg-cover bg-center" style={{backgroundImage: "url('https://source.unsplash.com/1600x900/?travel,beach')"}}>
      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
        <div className="text-center text-white px-4">
          <h1 className="text-5xl font-bold">Explore The World</h1>
          <p className="mt-4 text-lg">Find your next adventure with TravelX</p>
          <button className="mt-6 px-6 py-3 bg-yellow-500 text-black font-semibold rounded-lg shadow-lg hover:bg-yellow-400">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
}
