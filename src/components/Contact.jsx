import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
                    >
                        Let's Grow Together
                    </motion.h2>
                    <p className="text-lg text-gray-600">Ready to take your digital marketing to the next level?</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                    <motion.form
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                        onSubmit={(e) => e.preventDefault()}
                    >
                        <div>
                            <input type="text" placeholder="Your Name" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all" required />
                        </div>
                        <div>
                            <input type="email" placeholder="Your Email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all" required />
                        </div>
                        <div>
                            <input type="text" placeholder="Company Name" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all" />
                        </div>
                        <div>
                            <textarea rows="5" placeholder="Tell us about your project" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all" required></textarea>
                        </div>
                        <button type="submit" className="w-full py-4 bg-black text-white rounded-lg font-bold hover:bg-gray-800 transition-all transform hover:scale-[1.02] shadow-lg">
                            Send Message
                        </button>
                    </motion.form>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8 lg:pl-12 pt-8"
                    >
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                <Mail className="w-6 h-6 text-black" />
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-gray-900">Email</h4>
                                <p className="text-gray-600">mmdigitalgarage@gmail.com</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                <Phone className="w-6 h-6 text-black" />
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-gray-900">Phone</h4>
                                <p className="text-gray-600">9826983391</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                <MapPin className="w-6 h-6 text-black" />
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-gray-900">Location</h4>
                                <p className="text-gray-600">Kathmandu, Nepal</p>
                            </div>
                        </div>

                        {/* Map Placeholder or Embed could go here */}
                        <div className="h-48 bg-gray-100 rounded-2xl w-full flex items-center justify-center text-gray-400">
                            <span className="flex items-center gap-2"><MapPin size={16} /> Kathmandu, Nepal</span>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Contact;
