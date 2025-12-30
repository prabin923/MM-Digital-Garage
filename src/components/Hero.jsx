import { motion } from 'framer-motion';
import socialMediaImg from '../assets/social-media-marketing.jpg';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen pt-24 pb-12 flex flex-col justify-center relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="z-10 text-center lg:text-left"
                >
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900 mb-6">
                        Accelerate Your <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                            Digital Growth
                        </span>
                    </h2>
                    <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0">
                        Transform your brand with cutting-edge digital marketing strategies that deliver measurable results.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                        <a href="#contact" className="px-8 py-4 bg-black text-white rounded-full font-semibold hover:bg-gray-800 transition-all hover:scale-105 shadow-lg">
                            Get Started
                        </a>
                        <a href="#services" className="px-8 py-4 bg-white text-gray-900 border border-gray-200 rounded-full font-semibold hover:border-gray-400 transition-all hover:scale-105 shadow-sm">
                            Our Services
                        </a>
                    </div>
                </motion.div>

                {/* Visual Content (Floating Cards) */}
                <div className="relative h-[400px] sm:h-[500px] w-full hidden sm:block">
                    {/* Card 1 */}
                    <motion.div
                        animate={{ y: [0, -20, 0] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-10 left-10 w-48 h-32 bg-white rounded-xl shadow-xl overflow-hidden z-20 transform -rotate-6"
                    >
                        <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600" alt="Analytics" className="w-full h-full object-cover" />
                    </motion.div>

                    {/* Card 2 */}
                    <motion.div
                        animate={{ y: [0, 20, 0] }}
                        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        className="absolute bottom-20 right-10 w-40 h-40 bg-white rounded-xl shadow-xl overflow-hidden z-20 transform rotate-12"
                    >
                        <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500" alt="SEO" className="w-full h-full object-cover" />
                    </motion.div>

                    {/* Card 3 (Center) */}
                    <motion.div
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-56 h-56 bg-white rounded-2xl shadow-2xl overflow-hidden z-30 border-4 border-white"
                    >
                        <img src={socialMediaImg} alt="Social Media" className="w-full h-full object-cover" />
                    </motion.div>

                    {/* Decorative blobs/dots could be added here if needed */}
                </div>
            </div>

            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
                <span className="text-sm text-gray-400">Scroll Down</span>
                <div className="w-6 h-6 border-b-2 border-r-2 border-gray-400 transform rotate-45 mt-2 mx-auto"></div>
            </div>
        </section>
    );
};

export default Hero;
