import { useState } from 'react';
import { Mail, Smartphone, Calendar, MapPin, ChevronDown, Github, Linkedin, Twitter } from 'lucide-react';

export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <aside className={`glass-panel rounded-3xl p-8 transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[800px]' : 'max-h-[160px] xl:max-h-full'} overflow-hidden relative ring-1 ring-white/5`}>

            <div className="flex flex-col items-center gap-8">
                {/* Avatar Box */}
                <div className="flex gap-5 items-center xl:flex-col xl:justify-center w-full">
                    <div className="relative group">
                        <div className="w-20 h-20 md:w-36 md:h-36 bg-onyx rounded-3xl flex items-center justify-center text-5xl md:text-7xl shadow-2xl ring-1 ring-white/5 overflow-hidden">
                            <span className="group-hover:scale-110 transition-transform duration-300">👨‍💻</span>
                        </div>
                        <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-4 border-eerie-black"></div>
                    </div>

                    <div className="text-left xl:text-center w-full">
                        <h1 className="text-2xl md:text-3xl font-bold text-white tracking-wide mb-2">Ashutosh Yadav</h1>
                        <span className="bg-onyx/50 border border-white/5 px-4 py-1.5 rounded-full text-xs md:text-sm text-white font-medium inline-block backdrop-blur-sm">
                            Full Stack Developer
                        </span>
                    </div>
                    <button
                        className="ml-auto xl:hidden bg-onyx p-3 rounded-xl text-gold-crayola border border-white/5 shadow-lg active:scale-95 transition-transform"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <ChevronDown className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                    </button>
                </div>
                <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent my-2 xl:my-4"></div>

                {/* Contact Info */}
                <div className="w-full space-y-6">
                    <ContactItem icon={<Mail size={18} />} title="Email" value="yadavashutosh162@gmail.com" type="email" />
                    <ContactItem icon={<Smartphone size={18} />} title="Phone" value="+91 7800059065" />
                    <ContactItem icon={<MapPin size={18} />} title="Location" value="India" />
                </div>

                {/* Separator */}
                <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent my-2 xl:my-4"></div>

                {/* Socials */}
                <div className="flex justify-center gap-5">
                    <SocialLink href="https://github.com/iashutoshyadav" icon={<Github size={20} />} />
                    <SocialLink href="https://www.linkedin.com/in/ashutosh-yadav7/" icon={<Linkedin size={20} />} />
                    <SocialLink href="#" icon={<Twitter size={20} />} />
                </div>
            </div>
        </aside>
    );
}

function ContactItem({ icon, title, value, type }) {
    return (
        <div className="flex items-center gap-4 group">
            <div className="p-3.5 rounded-xl bg-gradient-to-br from-onyx to-jet text-gold-crayola shadow-lg ring-1 ring-white/5 group-hover:ring-gold-crayola/50 transition-all duration-300">
                {icon}
            </div>
            <div className="text-sm overflow-hidden">
                <p className="text-light-gray-70 text-xs uppercase tracking-wider mb-0.5 font-medium">{title}</p>
                <p className="text-white font-medium truncate group-hover:text-gold-crayola transition-colors" title={value}>
                    {type === 'email' ? <a href={`mailto:${value}`}>{value}</a> : value}
                </p>
            </div>
        </div>
    );
}

function SocialLink({ href, icon }) {
    return (
        <a href={href} className="text-light-gray hover:text-gold-crayola transition-all hover:-translate-y-1 p-2">
            {icon}
        </a>
    );
}
