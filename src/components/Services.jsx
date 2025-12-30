import { motion } from 'framer-motion';
import { Target, Search, Share2, BarChart2, FileText, DollarSign } from 'lucide-react';

const services = [
    {
        icon: <Target className="w-8 h-8 text-black dark:text-white" />,
        title: "Brand Strategy",
        description: "Build a powerful brand identity that resonates with your target audience and stands out in the market."
    },
    {
        icon: <Search className="w-8 h-8 text-black dark:text-white" />,
        title: "SEO Optimization",
        description: "Dominate search rankings with data-driven SEO strategies that drive organic traffic and conversions."
    },
    {
        icon: <Share2 className="w-8 h-8 text-black dark:text-white" />,
        title: "Social Media Marketing",
        description: "Engage your audience and grow your brand presence across all major social platforms."
    },
    {
        icon: <BarChart2 className="w-8 h-8 text-black dark:text-white" />,
        title: "Analytics & Insights",
        description: "Make informed decisions with comprehensive analytics and actionable business insights."
    },
    {
        icon: <FileText className="w-8 h-8 text-black dark:text-white" />,
        title: "Content Marketing",
        description: "Create compelling content that attracts, engages, and converts your ideal customers."
    },
    {
        icon: <DollarSign className="w-8 h-8 text-black dark:text-white" />,
        title: "Paid Advertising",
        description: "Maximize ROI with targeted ad campaigns across Google, Facebook, Instagram, and more."
    }
];

const Services = () => {
    return (
        <section id="services" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
                    >
                        Our Services
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
                    >
                        Comprehensive digital solutions tailored to your business needs
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300"
                        >
                            <div className="w-14 h-14 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center mb-6">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{service.title}</h3>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{service.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
