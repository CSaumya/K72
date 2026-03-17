import { useGSAP } from "@gsap/react";
import ProjectCard from "../components/Projects/ProjectCard";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Img_1 from "../k7_assets/k7_1.png";
import Img_2 from "../k7_assets/k7_2.jpg";
import Img_3 from "../k7_assets/k7_3.jpg";
import Img_4 from "../k7_assets/k7_4.jpg";
import Img_5 from "../k7_assets/k7_5.jpg";
import Img_6 from "../k7_assets/k7_6.jpg";
import Img_7 from "../k7_assets/k7_7.jpg";
import Img_8 from "../k7_assets/k7_8.jpg";
import Img_9 from "../k7_assets/k7_9.jpg";
import Img_10 from "../k7_assets/k7_10.jpg";
import Img_11 from "../k7_assets/k7_11.jpg";
import Img_12 from "../k7_assets/k7_12.jpg";
import Img_13 from "../k7_assets/k7_13.jpg";
import Img_14 from "../k7_assets/k7_14.jpg";
import Img_15 from "../k7_assets/k7_15.jpg";
import Img_16 from "../k7_assets/k7_16.jpg";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {

  const projects = [
    { image1: Img_1, image2: Img_2 },
    { image1: Img_3, image2: Img_4 },
    { image1: Img_5, image2: Img_6 },
    { image1: Img_7, image2: Img_8 },
    { image1: Img_9, image2: Img_10 },
    { image1: Img_11, image2: Img_12 },
    { image1: Img_13, image2: Img_14 },
    { image1: Img_15, image2: Img_16 }
  ];

  useGSAP(() => {

  const cards = gsap.utils.toArray(".hero");

  cards.forEach((card) => {
    gsap.fromTo(
      card,
      {
        scale: 0.8,
        opacity: 0.4
      },
      {
        scale: 1,
        opacity: 1,
        ease: "none",
        scrollTrigger: {
          trigger: card,
          start: "top 100%",
          end: "top 30%",
          scrub: true
        }
      }
    );
  });

});

  return (
    <div className="lg:p-4 p-2">

      <div className="pt-[45vh]">
        <h2 className="font-[font2] lg:text-[9.5vw] text-7xl uppercase">
          Projets
        </h2>
      </div>

      <div className="projects-wrapper lg:-mt-5">

        {projects.map((elem, idx) => (
          <div
            key={idx}
            className="hero w-full h-[500px] mb-4 flex lg:flex-row flex-col lg:gap-4 gap-2 overflow-hidden"
          >
            <ProjectCard
              image1={elem.image1}
              image2={elem.image2}
            />
          </div>
        ))}

      </div>

    </div>
  );
};

export default Projects;
