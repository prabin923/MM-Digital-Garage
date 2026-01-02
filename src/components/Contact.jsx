import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Loader2, CheckCircle, XCircle } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        message: ''
    });
    const [isLoading, setIsLoading] = useState(false);
    const [status, setStatus] = useState({ type: '', message: '' });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setStatus({ type: '', message: '' });

        try {
            const response = await fetch('http://localhost:5000/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (data.success) {
                setStatus({ type: 'success', message: data.message });
                setFormData({ name: '', email: '', company: '', message: '' });
            } else {
                setStatus({ type: 'error', message: data.message });
            }
        } catch (error) {
            setStatus({ type: 'error', message: 'Failed to connect to the server. Please try again later.' });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section id="contact" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
                    >
                        Let's Grow Together
                    </motion.h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300">Ready to take your digital marketing to the next level?</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                    <motion.form
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                        onSubmit={handleSubmit}
                    >
                        {status.message && (
                            <div className={`p-4 rounded-lg flex items-center gap-2 ${status.type === 'success' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'}`}>
                                {status.type === 'success' ? <CheckCircle size={20} /> : <XCircle size={20} />}
                                {status.message}
                            </div>
                        )}
                        <div>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Your Name"
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white focus:border-transparent transition-all"
                                required
                            />
                        </div>
                        <div>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Your Email"
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white focus:border-transparent transition-all"
                                required
                            />
                        </div>
                        <div>
                            <input
                                type="text"
                                name="company"
                                value={formData.company}
                                onChange={handleChange}
                                placeholder="Company Name"
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white focus:border-transparent transition-all"
                            />
                        </div>
                        <div>
                            <textarea
                                rows="5"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Tell us about your project"
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white focus:border-transparent transition-all"
                                required
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full py-4 bg-black dark:bg-white text-white dark:text-gray-900 rounded-lg font-bold hover:bg-gray-800 dark:hover:bg-gray-100 transition-all transform hover:scale-[1.02] shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                        >
                            {isLoading ? (
                                <>
                                    <Loader2 className="w-5 h-5 animate-spin" />
                                    Sending...
                                </>
                            ) : (
                                'Send Message'
                            )}
                        </button>
                    </motion.form>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8 lg:pl-12 pt-8"
                    >
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center flex-shrink-0">
                                <Mail className="w-6 h-6 text-black dark:text-white" />
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-gray-900 dark:text-white">Email</h4>
                                <p className="text-gray-600 dark:text-gray-300">mmdigitalgarage@gmail.com</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center flex-shrink-0">
                                <Phone className="w-6 h-6 text-black dark:text-white" />
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-gray-900 dark:text-white">Phone</h4>
                                <p className="text-gray-600 dark:text-gray-300">9826983391</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center flex-shrink-0">
                                <MapPin className="w-6 h-6 text-black dark:text-white" />
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-gray-900 dark:text-white">Location</h4>
                                <p className="text-gray-600 dark:text-gray-300">Kathmandu, Nepal</p>
                            </div>
                        </div>

                        {/* Map Placeholder or Embed could go here */}
                        <div className="h-48 bg-gray-100 dark:bg-gray-800 rounded-2xl w-full flex items-center justify-center text-gray-400 dark:text-gray-500">
                            <span className="flex items-center gap-2"><MapPin size={16} /> Kathmandu, Nepal</span>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Contact;

