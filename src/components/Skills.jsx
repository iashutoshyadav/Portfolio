export default function Skills() {
    const skills = [
        {
            category: "Languages",
            items: ["JavaScript (ES6+)", "TypeScript", "Python", "C++", "Golang", "SQL"]
        },
        {
            category: "Core Concepts",
            items: ["Data Structures", "Algorithms", "OOPs", "DBMS", "OS", "System Design"]
        },
        {
            category: "Frontend",
            items: ["Next.js 15", "React.js", "Redux", "Tailwind CSS", "Framer Motion"]
        },
        {
            category: "Backend",
            items: ["Node.js", "Express.js", "Prisma", "GraphQL", "WebSockets"]
        },
        {
            category: "Database & Cloud",
            items: ["PostgreSQL", "MongoDB", "Redis", "Docker", "AWS EC2"]
        },
        {
            category: "AI & Tools",
            items: ["OpenAI API", "LangChain", "Git", "Figma", "Linux"]
        }
    ];

    return (
        <div className="grid md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
                <div key={index} className="glass-card p-6 rounded-2xl relative overflow-hidden group">
                    <h4 className="text-white font-bold text-lg mb-3 z-10 relative group-hover:text-gold-crayola transition-colors">{skill.category}</h4>
                    <div className="flex flex-wrap gap-2 z-10 relative">
                        {skill.items.map((item, i) => (
                            <span key={i} className="text-xs font-medium px-2.5 py-1 bg-jet/50 rounded-md text-light-gray-70 border border-white/5">
                                {item}
                            </span>
                        ))}
                    </div>
                    <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-gold-crayola/10 blur-3xl rounded-full group-hover:bg-gold-crayola/20 transition-all duration-500"></div>
                </div>
            ))}
        </div>
    );
}
