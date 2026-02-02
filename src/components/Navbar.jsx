export default function Navbar({ activeTab, setActiveTab }) {
    const tabs = ["About", "Resume", "Projects", "Contact"];

    return (
        <nav className="absolute top-0 right-0 z-10 w-full md:w-auto flex justify-center md:block">
            <div className="md:rounded-bl-3xl md:rounded-tr-3xl bg-onyx/80 backdrop-blur-xl border border-glass-border px-8 py-5 shadow-2xl ring-1 ring-white/5">
                <ul className="flex gap-8 md:gap-10 list-none">
                    {tabs.map((tab) => (
                        <li key={tab}>
                            <button
                                onClick={() => setActiveTab(tab)}
                                className={`text-sm md:text-base font-semibold transition-all duration-300 relative ${activeTab === tab ? "text-gold-crayola" : "text-light-gray hover:text-white"
                                    }`}
                            >
                                {tab}
                                {activeTab === tab && (
                                    <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-gold-crayola shadow-glow rounded-full"></span>
                                )}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}
