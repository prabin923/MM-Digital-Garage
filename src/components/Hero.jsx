import { motion } from 'framer-motion';
import socialMediaImg from '../assets/social-media-marketing.jpg';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen pt-24 pb-12 flex flex-col justify-center relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="z-10 text-center lg:text-left"
                >
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900 dark:text-white mb-6">
                        Accelerate Your <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
                            Digital Growth
                        </span>
                    </h2>
                    <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-lg mx-auto lg:mx-0">
                        Transform your brand with cutting-edge digital marketing strategies that deliver measurable results.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                        <a href="#contact" className="px-8 py-4 bg-black dark:bg-white text-white dark:text-gray-900 rounded-full font-semibold hover:bg-gray-800 dark:hover:bg-gray-100 transition-all hover:scale-105 shadow-lg">
                            Get Started
                        </a>
                        <a href="#services" className="px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 rounded-full font-semibold hover:border-gray-400 dark:hover:border-gray-500 transition-all hover:scale-105 shadow-sm">
                            Our Services
                        </a>
                    </div>
                </motion.div>

                {/* Visual Content (Side Cluster Floating Layout) */}
                <div className="relative h-[350px] sm:h-[450px] w-full hidden sm:block">
                    {/* Card 1 - Analytics (Top Left) - Moved down for vertical closeness */}
                    <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-[15%] left-[20%] w-44 h-32 bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden z-20 transform -rotate-6 border border-gray-100 dark:border-gray-700"
                    >
                        <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600" alt="Analytics" className="w-full h-full object-cover" />
                    </motion.div>

                    {/* Card 2 - SEO (Bottom Right) - Moved up for vertical closeness & Fixed Overlap */}
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        className="absolute bottom-[40%] right-[2%] w-40 h-32 bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden z-20 transform rotate-6 border border-gray-100 dark:border-gray-700"
                    >
                        <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500" alt="SEO" className="w-full h-full object-cover" />
                    </motion.div>

                    {/* Card 4 - Content (Top Right) - Moved down for vertical closeness */}
                    <motion.div
                        animate={{ x: [0, 8, 0], y: [0, -8, 0] }}
                        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                        className="absolute top-[45%] right-[50%] w-36 h-28 bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden z-10 transform rotate-3 border border-gray-100 dark:border-gray-700"
                    >
                        <img src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=500" alt="Content" className="w-full h-full object-cover" />
                    </motion.div>

                    {/* Card 5 - Team (Bottom Left) - Moved up for vertical closeness */}
                    <motion.div
                        animate={{ x: [0, -8, 0], y: [0, 8, 0] }}
                        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                        className="absolute bottom-[15%] left-[2%] w-36 h-28 bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden z-10 transform -rotate-3 border border-gray-100 dark:border-gray-700"
                    >
                        <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=500" alt="Team" className="w-full h-full object-cover" />
                    </motion.div>

                    {/* Card 3 (Center) - Social Media - Kept clear */}
                    <motion.div
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 sm:w-56 sm:h-56 bg-white dark:bg-gray-800 shadow-2xl overflow-hidden z-30 border -[2px] border-gray-100 dark:border-gray-700 rounded-[30px]"
                    >
                        <img src={socialMediaImg} alt="Social Media" className="w-full h-full object-cover" />
                    </motion.div>
                </div>
            </div>

            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
                <span className="text-sm text-gray-400 dark:text-gray-500">Scroll Down</span>
                <div className="w-6 h-6 border-b-2 border-r-2 border-gray-400 dark:border-gray-500 transform rotate-45 mt-2 mx-auto"></div>
            </div>
        </section>
    );
};

export default Hero;
