import { motion } from 'framer-motion';
import { TrendingUp, PenTool, BarChart, Clock } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">About MM Digital Garage</h2>
                        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                            We are a cutting-edge digital marketing agency dedicated to driving growth for businesses in the digital age.
                            With a team of experienced strategists, creators, and analysts, we craft data-driven campaigns that deliver
                            exceptional results.
                        </p>
                        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                            Our mission is to empower brands to reach their full potential through innovative digital solutions,
                            creative storytelling, and strategic thinking. We don't just follow trends—we create them.
                        </p>

                        <div className="grid grid-cols-2 gap-6 mt-8">
                            <div className="flex items-center gap-3">
                                <TrendingUp className="text-black dark:text-white" />
                                <span className="font-medium text-gray-900 dark:text-gray-200">Data-Driven Strategies</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <PenTool className="text-black dark:text-white" />
                                <span className="font-medium text-gray-900 dark:text-gray-200">Creative Excellence</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <BarChart className="text-black dark:text-white" />
                                <span className="font-medium text-gray-900 dark:text-gray-200">Transparent Reporting</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Clock className="text-black dark:text-white" />
                                <span className="font-medium text-gray-900 dark:text-gray-200">24/7 Support</span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="grid grid-cols-2 gap-4"
                    >
                        <img src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400" className="rounded-2xl shadow-lg w-full h-48 object-cover transform translate-y-8" alt="Team" />
                        <img src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400" className="rounded-2xl shadow-lg w-full h-48 object-cover" alt="Strategy" />
                        <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400" className="rounded-2xl shadow-lg w-full h-48 object-cover transform translate-y-8" alt="Growth" />
                        <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400" className="rounded-2xl shadow-lg w-full h-48 object-cover" alt="Collaboration" />
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default About;
