import { MapPin, Send, CheckCircle, X } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData(e.target);

        try {
            const response = await fetch(`https://formsubmit.co/ajax/${import.meta.env.VITE_CONTACT_EMAIL}`, {
                method: "POST",
                body: formData
            });

            if (response.ok) {
                setShowSuccess(true);
                e.target.reset();
                setTimeout(() => setShowSuccess(false), 5000);
            } else {
                alert("Something went wrong. Please try again.");
            }
        } catch (error) {
            alert("Error sending message. Please check your internet connection.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="animate-fade-in">
            <header className="mb-8">
                <h2 className="text-3xl font-bold text-white relative inline-block pb-4 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-1.5 after:bg-gold-crayola after:rounded-md">
                    Contact
                </h2>
            </header>

            <div className="space-y-8">
                {/* Map */}
                <div className="w-full h-[300px] bg-onyx rounded-3xl border border-glass-border relative overflow-hidden">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224090.7638451152!2d76.95317926135893!3d28.647194765103443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sDelhi!5e0!3m2!1sen!2sin!4v1716383674488!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0, filter: 'grayscale(100%) invert(92%) contrast(83%)' }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Map of Delhi"
                    ></iframe>
                    <div className="absolute top-4 right-4 z-10 bg-eerie-black/80 backdrop-blur-sm p-3 rounded-xl border border-white/10 flex items-center gap-2">
                        <MapPin className="text-gold-crayola w-5 h-5" />
                        <span className="text-white/90 text-sm font-medium">New Delhi, India</span>
                    </div>
                </div>

                {/* Form */}
                <div>
                    <h3 className="text-2xl font-bold text-white mb-6">Contact Form</h3>
                    <form
                        className="space-y-6"
                        onSubmit={handleSubmit}
                    >
                        {/* Honeypot for spammers */}
                        <input type="text" name="_honey" style={{ display: 'none' }} />

                        {/* Disable Captcha for cleaner UI */}
                        <input type="hidden" name="_captcha" value="false" />

                        <div className="grid md:grid-cols-2 gap-6">
                            <input
                                type="text"
                                name="name"
                                placeholder="Full Name"
                                required
                                className="bg-onyx border border-white/10 rounded-xl px-5 py-4 w-full text-white focus:border-gold-crayola focus:outline-none transition-colors placeholder:text-light-gray-70"
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Email Address"
                                required
                                className="bg-onyx border border-white/10 rounded-xl px-5 py-4 w-full text-white focus:border-gold-crayola focus:outline-none transition-colors placeholder:text-light-gray-70"
                            />
                        </div>
                        <textarea
                            name="message"
                            rows="4"
                            placeholder="Your Message"
                            required
                            className="bg-onyx border border-white/10 rounded-xl px-5 py-4 w-full text-white focus:border-gold-crayola focus:outline-none transition-colors placeholder:text-light-gray-70 resize-none"
                        ></textarea>

                        <div className="flex justify-end">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="flex items-center gap-2 px-8 py-4 bg-onyx border border-white/10 text-gold-crayola rounded-xl font-bold hover:bg-jet transition-colors group disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                <Send size={18} className={`group-hover:translate-x-1 transition-transform ${isSubmitting ? 'animate-pulse' : ''}`} />
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            {/* Success Modal */}
            {showSuccess && (
                <div className="fixed inset-0 flex items-center justify-center z-50 px-4 animate-fade-in">
                    <div
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                        onClick={() => setShowSuccess(false)}
                    ></div>
                    <div className="bg-eerie-black border border-gold-crayola/30 p-8 rounded-2xl shadow-2xl relative z-10 max-w-sm w-full text-center transform transition-all scale-100 flex flex-col items-center gap-4">
                        <button
                            onClick={() => setShowSuccess(false)}
                            className="absolute top-4 right-4 text-light-gray-70 hover:text-white transition-colors"
                        >
                            <X size={20} />
                        </button>

                        <div className="w-16 h-16 bg-gold-crayola/10 rounded-full flex items-center justify-center mb-2">
                            <CheckCircle className="w-8 h-8 text-gold-crayola" />
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
                            <p className="text-light-gray-70">
                                Thanks for reaching out. I'll get back to you as soon as possible.
                            </p>
                        </div>

                        <button
                            onClick={() => setShowSuccess(false)}
                            className="bg-gold-crayola text-eerie-black font-bold py-2 px-6 rounded-lg hover:bg-gold-crayola/90 transition-colors mt-2 w-full"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
