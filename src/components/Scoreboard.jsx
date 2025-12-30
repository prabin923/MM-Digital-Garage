import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

const AnimatedCounter = ({ from, to, duration = 2 }) => {
    const nodeRef = useRef();
    const inView = useInView(nodeRef, { once: true });
    const [count, setCount] = useState(from);

    useEffect(() => {
        if (inView) {
            let startTime;
            const animate = (time) => {
                if (!startTime) startTime = time;
                const progress = Math.min((time - startTime) / (duration * 1000), 1);
                setCount(Math.floor(progress * (to - from) + from));
                if (progress < 1) {
                    requestAnimationFrame(animate);
                }
            };
            requestAnimationFrame(animate);
        }
    }, [inView, from, to, duration]);

    return <span ref={nodeRef}>{count}</span>;
};

const Scoreboard = () => {
    const stats = [
        { value: 200, label: "Happy Clients", suffix: "+" },
        { value: 500, label: "Projects Completed", suffix: "+" },
        { value: 95, label: "Client Satisfaction", suffix: "%" },
        { value: 250, label: "Average ROI Increase", suffix: "%" }
    ];

    const testimonials = [
        { text: "MM Digital Garage transformed our online presence. Our traffic increased by 300% in just 6 months!", author: "Homeglory", role: "Client" },
        { text: "Professional, creative, and results-driven. They truly understand digital marketing.", author: "Ultra Group Nepal", role: "Client" },
        { text: "The ROI we've seen from their campaigns exceeds all expectations. Highly recommend!", author: "Maa Janaki Computer", role: "Client" }
    ];

    return (
        <section id="scoreboard" className="py-20 bg-gray-900 text-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary rounded-full filter blur-[100px] opacity-10"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600 rounded-full filter blur-[100px] opacity-10"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold mb-4"
                    >
                        Client Success Scoreboard
                    </motion.h2>
                    <p className="text-gray-400 text-lg">Real results that speak for themselves</p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="text-center p-6 bg-gray-800 rounded-xl"
                        >
                            <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                                <AnimatedCounter from={0} to={stat.value} />
                                {stat.suffix}
                            </div>
                            <div className="text-sm md:text-base text-gray-400">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>

                {/* Testimonials */}
                <h3 className="text-2xl font-bold text-center mb-10">What Our Clients Say</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 + index * 0.1 }}
                            className="bg-gray-800 p-8 rounded-2xl relative"
                        >
                            <div className="text-yellow-400 text-xl mb-4">★★★★★</div>
                            <p className="text-gray-300 italic mb-6">"{testimonial.text}"</p>
                            <div>
                                <strong className="block text-white font-semibold">{testimonial.author}</strong>
                                <span className="text-sm text-gray-500">{testimonial.role}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Scoreboard;
