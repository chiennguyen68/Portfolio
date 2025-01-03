import { useEffect, useRef, useState } from "react";
import Globe from "react-globe.gl";

import Button from "../components/Button.jsx";

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);
  const globeRef = useRef();

  useEffect(() => {
    if (globeRef.current) {
      globeRef.current.pointOfView(
        { lat: 15.87, lng: 100.9925, altitude: 1.1 },
        1000
      );
    }
  }, []);
  const handleCopy = () => {
    navigator.clipboard.writeText("chien.nguyen9c9@gmail.com");
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="assets/cv-avatar.png"
              alt="grid-1"
              className="w-full object-contain rounded-lg"
            />

            <div>
              <p className="grid-headtext">Hi, I’m Chien ND</p>
              <p className="grid-subtext">
                Hi, I’m Chien ND, a Frontend Engineer with extensive experience
                in web development. Currently leading frontend projects at
                PadiTech, I specialize in building scalable, responsive
                platforms for Japanese clients, such as Boosty. Over the years,
                I’ve contributed to various projects, from integrated management
                systems to educational platforms, utilizing technologies like
                Microservices Frontend, React.js, Next.js, Tailwind, and more.
                My focus remains on delivering high-quality, maintainable
                solutions and continuously improving performance and user
                experience.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="assets/grid2.png"
              alt="grid-2"
              className="w-full sm:h-[276px] h-fit object-contain"
            />

            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
                I specialize in a wide range of languages, frameworks, and tools
                to build robust and scalable applications, including:
                <br />
                <strong>Frontend Development</strong>: <em>Languages</em>:
                HTML5, CSS3, SCSS, JavaScript, TypeScript.
                <em>Frameworks/Libraries</em>: React.js (Function/Class
                Components), Angular (6+), Tailwind CSS, Ant Design.
                <em>Architectures</em>: React Microservices, Flux, Mobx, Recoil.
                <em>Tools</em>: Next.js (App Router, Client/Server Components,
                Turborepo), Supabase, Retool.
                <br />
                <strong>Backend Development</strong>:{" "}
                <em>Languages/Frameworks</em>: PHP (Laravel, Lumen), ASP.NET.
                <em>Databases</em>: MySQL, SQL Server.
                <br />
                <strong>Additional Tools & Skills</strong>: Markdown-to-HTML
                converters, video creator tools. Authentication solutions:
                Auth0, NextAuth, Kinde. CI/CD: Yarn Workspace, performance
                optimization techniques. This stack enables me to create
                dynamic, scalable platforms while ensuring maintainability and
                performance.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                ref={globeRef}
                height={326}
                width={326}
                backgroundColor="rgba(0, 0, 0, 0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[
                  {
                    lat: 21.0285,
                    lng: 105.8542,
                    text: "Ha Noi, Vietnam",
                    color: "white",
                    size: 15,
                  },
                ]}
              />
            </div>
            <div>
              <p className="grid-headtext">
                I’m very flexible with time zone communications & locations
              </p>
              <p className="grid-subtext">
                I’m based in Hanoi, Vietnam and open to remote work worldwide.
              </p>
              <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
            </div>
          </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img
              src="assets/grid3.png"
              alt="grid-3"
              className="w-full sm:h-[266px] h-fit object-contain"
            />

            <div>
              <p className="grid-headtext">My Passion for Coding</p>
              <p className="grid-subtext">
                I love solving problems and building things through code.
                Programming isn&apos;t just my profession—it&apos;s my passion.
                I enjoy exploring new technologies, and enhancing my skills.
              </p>
            </div>
          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />

            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact me</p>
              <div className="copy-container" onClick={handleCopy}>
                <img
                  src={hasCopied ? "assets/tick.svg" : "assets/copy.svg"}
                  alt="copy"
                />
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">
                  chien.nguyen9c9@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
