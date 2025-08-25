export default function Contact() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
      <form className="space-y-4">
        <input type="text" placeholder="Your Name" className="w-full border px-4 py-2 rounded-md" />
        <input type="email" placeholder="Your Email" className="w-full border px-4 py-2 rounded-md" />
        <textarea placeholder="Your Message" className="w-full border px-4 py-2 rounded-md h-32"></textarea>
        <button className="px-6 py-2 bg-yellow-500 text-black font-semibold rounded-md hover:bg-yellow-400">
          Send Message
        </button>
      </form>
    </section>
  );
}
