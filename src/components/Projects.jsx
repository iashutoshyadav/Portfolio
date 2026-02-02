import { useState } from 'react';
import { Eye, Github } from 'lucide-react';

export default function Projects() {
    const [activeCategory, setActiveCategory] = useState("All");

    const projects = [
        {
            title: "Echo Script Ai",
            category: "Web Development",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTApr20V3dTs1XAgBIjaJMu8b6XjsoQfDMxOQ&s",
            github: "https://github.com/iashutoshyadav/SpeechToText",
            live: "https://speech-to-text-pearl-iota.vercel.app/",
        },
        {
            title: "Audience-Query-Management-Response-System",
            category: "Artificial Intelligence",
            image: "https://plus.unsplash.com/premium_photo-1769904004445-79ecf42b7fb0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fEF1ZGllbmNlLVF1ZXJ5LU1hbmFnZW1lbnQtUmVzcG9uc2UtU3lzdGVtfGVufDB8fDB8fHww",
            github: "https://github.com/iashutoshyadav/Audience-Query-Management-Response-System",
            live: "https://www.audiencequery.online",
        },
        {
            title: "Task Flow",
            category: "Web Development",
            image: "https://plus.unsplash.com/premium_photo-1706281895733-b685a6435d27?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHRhc2slMjBmbG93fGVufDB8fDB8fHww",
            github: "https://github.com/iashutoshyadav/TaskManger",
            live: "https://www.tokoai.in",
        },
    ];

    const categories = ["All", "Web Development", "Artificial Intelligence"];

    const filteredProjects = activeCategory === "All"
        ? projects
        : projects.filter(project => project.category === activeCategory);

    return (
        <div className="animate-fade-in pt-6 md:pt-10">
            <header className="mb-10 flex flex-col md:flex-row md:justify-between md:items-end gap-6">
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white relative inline-block pb-5 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-1.5 after:bg-gold-crayola after:rounded-full after:shadow-glow">
                        Projects
                    </h2>
                </div>
                <ul className="flex flex-wrap gap-4 md:gap-6">
                    {categories.map((category) => (
                        <li key={category}>
                            <button
                                onClick={() => setActiveCategory(category)}
                                className={`text-sm md:text-base font-medium transition-all duration-300 relative pb-1
                                    ${activeCategory === category
                                        ? 'text-gold-crayola after:w-full after:bg-gold-crayola'
                                        : 'text-light-gray hover:text-white after:w-0 hover:after:w-1/2 after:bg-white'}
                                    after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:transition-all after:duration-300`}
                            >
                                {category}
                            </button>
                        </li>
                    ))}
                </ul>
            </header>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project, index) => (
                    <div
                        key={index}
                        className="group relative rounded-2xl overflow-hidden cursor-pointer bg-onyx shadow-xl hover:shadow-2xl hover:shadow-gold-crayola/10 transition-all duration-500 ring-1 ring-white/5 hover:ring-gold-crayola/30 hover:-translate-y-2">
                        <div className="aspect-[4/3] bg-jet relative overflow-hidden">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                            />
                            <div className="absolute inset-0 bg-onyx/60 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-4 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100 scale-75 group-hover:scale-100">
                                <a
                                    href={project.live}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 bg-onyx/80 backdrop-blur-md rounded-xl text-gold-crayola hover:bg-gold-crayola hover:text-eerie-black transition-all duration-300 shadow-lg ring-1 ring-white/10"
                                    title="View Live"
                                >
                                    <Eye size={22} />
                                </a>
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 bg-onyx/80 backdrop-blur-md rounded-xl text-gold-crayola hover:bg-gold-crayola hover:text-eerie-black transition-all duration-300 shadow-lg ring-1 ring-white/10"
                                    title="View Code"
                                >
                                    <Github size={22} />
                                </a>
                            </div>
                        </div>
                        <div className="p-6 relative z-10 bg-onyx">
                            <p className="text-gold-crayola text-xs font-semibold uppercase tracking-wider mb-2">{project.category}</p>
                            <h3 className="text-white font-bold text-xl group-hover:text-gold-crayola transition-colors duration-300 line-clamp-1">{project.title}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
