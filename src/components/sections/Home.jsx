import { RevealOnScroll } from "../RevealOnScroll";
import profilePic from "../../assets/fama.jpg";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative py-20"
    >
      <RevealOnScroll>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 px-6">
          
          <div className="flex-shrink-0">
            <img
              src={profilePic}
              alt="Roxanne Fama"
              className="w-60 h-60 rounded-full object-cover border-4 border-blue-500/50 shadow-[0_0_25px_rgba(59,130,246,0.4)]"
            />
          </div>

          <div className="text-center md:text-left">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
              Hi, I'm Roxanne Fama
            </h1>

            <p className="text-gray-400 text-lg mb-8 max-w-2xl">
              I’m a third year student at Western Institute of Technology, studying B.S in Information Technology.
              I aim to have a career in FullStack Development with a focus on Security and AI integration. I want to build scalable web applications,
              design user-friendly interfaces, and integrate intelligent features while addressing security vulnerabilities.
            </p>

            <div className="flex justify-center md:justify-start space-x-4">
              <a
                href="#projects"
                className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
