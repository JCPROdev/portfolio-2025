"use client";

import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";
import { Coffee, Heart, Target } from "lucide-react";
import { PROFILE_DATA } from "./data";

function AboutSection() {
  const { header, content, services, stats } = PROFILE_DATA;

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="about" className="py-20 bg-gray-50" ref={ref}>
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h1
            variants={itemVariants}
            className="mb-4 font-bold text-4xl"
          >
            {header.title.split(" ")[0]}{" "}
            <span className="text-indigo-600">
              {header.title.split(" ")[1]}
            </span>
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-gray-600 text-lg mx-auto max-w-3xl"
          >
            {header.description}
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Left Column - Descripton */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-6"
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <Heart className="w-6 h-6 mr-3 text-red-600" />
                {content.passion.title}
              </h2>
              <p className="text-base text-gray-700 leading-relaxed">
                {content.passion.description}
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <Target className="w-6 h-6 mr-3 text-indigo-600" />
                {content.focus.title}
              </h2>
              <p className="text-base text-gray-700 leading-relaxed">
                {content.focus.description}
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex items-center space-x-3 text-gray-600"
            >
              <Coffee className="w-5 h-5" />
              <span>{content.quote}</span>
            </motion.div>
          </motion.div>

          {/* Right Column - Passions */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-6"
          >
            {services.map((service) => (
              <motion.div
                variants={itemVariants}
                key={service.title}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-indigo-100 p-3 rounded-lg">
                    <service.icon className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              variants={itemVariants}
              key={stat.label}
              className="text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : { scale: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="text-4xl lg:text-5xl font-bold text-indigo-600 mb-2"
              >
                {stat.value}
              </motion.div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default AboutSection;
