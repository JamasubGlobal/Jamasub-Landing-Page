export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col items-center justify-center px-4">
      <div className="max-w-xl text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Jamasub Global</h1>
        <p className="text-lg md:text-xl mb-4 italic text-gray-600">
          Creative Execution. Smart Marketing. Real Business Growth.
        </p>
        <p className="text-base md:text-lg mb-8">
          We’re currently working behind the scenes to launch something impactful.
          Our global team is building systems that help freelancers, startups,
          and businesses grow — across borders.
        </p>
        <form className="flex flex-col sm:flex-row gap-4 justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
          <button
            type="submit"
            className="bg-black text-white px-6 py-2 rounded-xl hover:bg-gray-800 transition"
          >
            Notify Me
          </button>
        </form>
        <div className="mt-10 text-sm text-gray-500">
          📍 USA: 1942 Broadway Ste, Suite 314C, Boulder, CO 80302<br />
          📍 Nigeria: Ilorin, Kwara State
        </div>
      </div>
    </div>
  );
}
