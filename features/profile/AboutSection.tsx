"use client";

import { Coffee, Heart, Target } from "lucide-react";
import { PROFILE_DATA } from "./data";

function AboutSection() {
  const { header, content, services, stats } = PROFILE_DATA;

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <div className="text-center mb-16">
          <h1 className="mb-4 font-bold text-4xl">
            {header.title.split(" ")[0]}{" "}
            <span className="text-indigo-600">
              {header.title.split(" ")[1]}
            </span>
          </h1>
          <p className="text-gray-600 text-lg mx-auto max-w-3xl">
            {header.description}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Left Column - Descripton */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <Heart className="w-6 h-6 mr-3 text-red-600" />
                {content.passion.title}
              </h2>
              <p className="text-base text-gray-700 leading-relaxed">
                {content.passion.description}
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <Target className="w-6 h-6 mr-3 text-indigo-600" />
                {content.focus.title}
              </h2>
              <p className="text-base text-gray-700 leading-relaxed">
                {content.focus.description}
              </p>
            </div>

            <div className="flex items-center space-x-3 text-gray-600">
              <Coffee className="w-5 h-5" />
              <span>{content.quote}</span>
            </div>
          </div>

          {/* Right Column - Passions */}
          <div className="space-y-6">
            {services.map((service, index) => (
              <div
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
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-indigo-600 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
