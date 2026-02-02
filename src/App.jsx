import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Resume from "./components/Resume";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function App() {
  const [activeTab, setActiveTab] = useState("About");

  return (
    <div className="bg-smoky-black min-h-screen py-6 md:py-14 px-4 md:px-12 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-jet/20 via-smoky-black to-smoky-black relative">
      <main className="max-w-[1250px] mx-auto grid grid-cols-1 xl:grid-cols-4 gap-8 items-start">
        <div className="xl:col-span-1 xl:sticky xl:top-10 z-30">
          <Sidebar />
        </div>
        <div className="xl:col-span-3 glass-panel rounded-3xl p-8 md:p-10 relative min-h-[85vh] animate-slide-up ring-1 ring-white/5" style={{ animationDelay: '100ms' }}>
          <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
          <div className="mt-20 md:mt-6">
            <div key={activeTab} className="animate-fade-in">
              {activeTab === "About" && <About />}
              {activeTab === "Resume" && <Resume />}
              {activeTab === "Projects" && <Projects />}
              {activeTab === "Contact" && <Contact />}
            </div>
          </div>
        </div>

      </main>
    </div>
  );
}
