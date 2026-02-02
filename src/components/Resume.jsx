
export default function Resume() {
    const experiences = [
        {
            title: "Full Stack Developer Intern",
            company: "Cognifyz Technologies",
            date: "July 2025 - Sept 2025",
            desc: "Building scalable web applications for clients using Next.js and Node.js. Optimized database performance by 40%."
        }
    ];

    const education = [
        {
            school: "Ajay Kumar Garg Engineering College",
            degree: "B.Tech in Computer Science",
            date: "2022 - 2026"
        }
    ];

    return (
        <div className="animate-fade-in space-y-12">
            <header className="mb-8">
                <h2 className="text-3xl font-bold text-white relative inline-block pb-4 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-1.5 after:bg-gold-crayola after:rounded-md">
                    Resume
                </h2>
            </header>

            <Section title="Experience" items={experiences} icon="💼" />
            <Section title="Education" items={education} icon="🎓" />
        </div>
    );
}

function Section({ title, items, icon }) {
    return (
        <div>
            <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-onyx rounded-xl shadow-sm text-gold-crayola text-xl border border-white/5">{icon}</div>
                <h3 className="text-2xl font-bold text-white">{title}</h3>
            </div>

            <div className="relative border-l border-white/10 ml-6 space-y-8 pl-8">
                {items.map((item, index) => (
                    <div key={index} className="relative">
                        <div className="absolute -left-[37px] top-1.5 w-4 h-4 rounded-full bg-jet border border-gold-crayola shadow-[0_0_10px_rgba(255,219,112,0.5)]"></div>
                        <h4 className="text-xl font-bold text-white mb-1">{item.title || item.degree}</h4>
                        <span className="text-gold-crayola text-sm font-medium mb-2 block">{item.date}</span>
                        <p className="text-light-gray-70 text-sm mb-2">{item.company || item.school}</p>
                        {item.desc && <p className="text-light-gray leading-relaxed text-sm max-w-2xl">{item.desc}</p>}
                    </div>
                ))}
            </div>
        </div>
    );
}
