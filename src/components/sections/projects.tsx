import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";
import { siteConfig } from "@/config/site";
import { Carousel } from "antd";
import { AlignCenter } from "lucide-react";

const contentStyle: React.CSSProperties = {
  margin: 0,
  color: "#fff",

  lineHeight: "100vh", // Adjust line-height based on half screen height
  textAlign: "center",
  background: "#364d79",
};

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<
    null | (typeof siteConfig.projects)[0]
  >(null);

  // Open modal with the selected project
  const handleOpenModal = (project: (typeof siteConfig.projects)[0]) => {
    setSelectedProject(project);
  };

  // Close the modal
  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  const [screenHeight, setScreenHeight] = useState(window.innerHeight);

  useEffect(() => {
    // Update screen height on resize
    const handleResize = () => setScreenHeight(window.innerHeight);

    window.addEventListener("resize", handleResize);

    // Clean up event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Section id="projects" className="bg-dark-secondary/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-heading">Featured Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {siteConfig.projects.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="group relative bg-dark-primary rounded-xl overflow-hidden cursor-pointer"
              onClick={() => handleOpenModal(item)} // Open modal on card click
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-dark-primary/90 z-10" />
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 z-20 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-light-slate mb-4">{item.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-sm bg-neon-blue/10 text-neon-blue rounded-full backdrop-blur-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal component */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="backdrop-blur-5 p-4 md:p-6 rounded-lg shadow-lg h-full md:w-full relative">
            <button
              onClick={handleCloseModal}
              className="absolute top-2 right-2  bg-red-500 text-white px-3 py-1 rounded"
            >
              Close
            </button>

            {/* <img src={selectedProject.image} alt={selectedProject.title} className=" w-full lg:w-2/3 mx-auto h-auto lg:h-2/3 object-cover rounded-lg mb-4" />
             */}

            <div className="mt-6 mb-2 w-full lg:w-2/3 mx-auto">
              <Carousel arrows dotPosition="right" infinite={false}>
                <div className="">
                  <h3 style={contentStyle} className="object-cover">
                    <img src="https://images.pexels.com/photos/29884577/pexels-photo-29884577/free-photo-of-monochrome-landscape-of-a-lonely-tree-in-bolu.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="mx-auto"/>
                  </h3>
                </div>
                <div>
                <h3 style={contentStyle} className="object-cover">
                    <img src="https://images.pexels.com/photos/247599/pexels-photo-247599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="mx-auto"/>
                  </h3>
                </div>
                <div>
                <h3 style={contentStyle} className="object-cover">
                    <img src="https://images.pexels.com/photos/440731/pexels-photo-440731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="mx-auto"/>
                  </h3>
                </div>
                <div>
                <h3 style={contentStyle} className="object-cover">
                    <img src="https://images.pexels.com/photos/709552/pexels-photo-709552.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="mx-auto"/>
                  </h3>
                </div>
              </Carousel>
            </div>

            <div className="mx-auto w-full lg:w-2/3">
              <h3 className="text-2xl font-bold text-gray-200 mb-2">
                {selectedProject.title}
              </h3>
              <p className="text-gray-300 mb-4">
                {selectedProject.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {selectedProject.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-sm bg-blue-100 text-blue-600 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </Section>
  );
}
