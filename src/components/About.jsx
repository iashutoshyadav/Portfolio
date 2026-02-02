import Skills from "./Skills";

export default function About() {
    return (
        <article className="animate-fade-in pt-6 md:pt-10">
            <header className="mb-10">
                <h2 className="text-3xl md:text-4xl font-bold text-white relative inline-block pb-5 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-1.5 after:bg-gold-crayola after:rounded-full after:shadow-glow">
                    About Me
                </h2>
            </header>

            <section className="text-light-gray text-base md:text-lg leading-relaxed space-y-6 mb-14 font-light">
                <div className="glass-card p-6 md:p-8 rounded-2xl">
                    <p className="mb-6">
                        I'm a <b className="text-white font-semibold">Full Stack Engineer</b> from India with experience building scalable digital products and intelligent applications.
                        I focus on engineering solutions that merge Generative AI with solid system architecture to solve practical, real-world problems.
                    </p>
                    <p>
                        I develop software that prioritizes performance, security, and ease of use. My work is guided by data and optimization, ensuring applications are fast, efficient, and reliable.
                        I’ve contributed to impactful projects for global brands like Nestlé as well as innovative early-stage startups.
                    </p>
                </div>
            </section>

            <section>
                <h3 className="text-2xl font-bold text-white mb-8">Technical Skills</h3>
                <Skills />
            </section>
        </article>
    );
}
