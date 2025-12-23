export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      {/* Navbar */}
      <nav className="p-6 flex justify-between items-center max-w-7xl mx-auto">
        <div className="text-2xl font-bold text-blue-600 tracking-tighter">STUDENTMENTOR</div>
        <button className="bg-blue-600 text-white px-5 py-2 rounded-full font-medium hover:bg-blue-700 transition">
          Get Started
        </button>
      </nav>

      {/* Hero Section */}
      <header className="px-6 py-20 text-center max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
          Level up your <span className="text-blue-600">learning</span> today.
        </h1>
        <p className="text-lg text-slate-600 mb-10 leading-relaxed">
          The ultimate platform for students to find mentors and accelerate their growth. 
          Built with speed and design in mind.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button className="bg-slate-900 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-slate-800 transition">
            Join the Community
          </button>
          <button className="border border-slate-200 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-slate-50 transition">
            Explore Mentors
          </button>
        </div>
      </header>

      {/* Features Section */}
      <section className="bg-slate-50 py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 text-center">
          <div className="p-8 bg-white rounded-2xl shadow-sm border border-slate-100">
            <h3 className="text-xl font-bold mb-4">1-on-1 Mentorship</h3>
            <p className="text-slate-600 text-sm">Direct access to industry experts who care about your career.</p>
          </div>
          <div className="p-8 bg-white rounded-2xl shadow-sm border border-slate-100">
            <h3 className="text-xl font-bold mb-4">Guided Projects</h3>
            <p className="text-slate-600 text-sm">Build real-world applications with step-by-step guidance.</p>
          </div>
          <div className="p-8 bg-white rounded-2xl shadow-sm border border-slate-100">
            <h3 className="text-xl font-bold mb-4">Global Network</h3>
            <p className="text-slate-600 text-sm">Connect with peers and mentors from around the world.</p>
          </div>
        </div>
      </section>
    </div>
  );
}