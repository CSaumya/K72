import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Agence = () => {
  const imageDivRef = useRef(null);
  const imageRef = useRef(null);

  const imageArray = [
    "https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/Olivier_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/Lawrence_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/HugoJoseph_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/ChantalG_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/MyleneS_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/SophieA_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/Claire_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/Michele_480X640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/MEL_480X640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/CAMILLE_480X640_2-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/MAXIME_480X640_2-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/MEGGIE_480X640_2-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/joel_480X640_3-480x640.jpg",
  ];

  useGSAP(() => {
    let currentIndex = 0;

    ScrollTrigger.create({
      trigger: "#page1",
      start: "top top",
      end: "bottom top",
      scrub: 1,
      pin: imageDivRef.current,
      anticipatePin: 1,

      onUpdate: (self) => {
        let index = Math.floor(self.progress * imageArray.length);
        index = Math.min(index, imageArray.length - 1);

        // update only when index changes (performance boost)
        if (index !== currentIndex) {
          currentIndex = index;
          imageRef.current.src = imageArray[index];
        }
      },
    });
  }, []);

  return (
    <div className="min-h-screen">
      <div id="page1" className="relative py-10 min-h-[300vh]">
        
        {/* IMAGE */}
        <div
          ref={imageDivRef}
          className="
          absolute overflow-hidden
          rounded-xl lg:rounded-3xl

          w-[45vw] h-[60vw]
          sm:w-[35vw] sm:h-[48vw]
          md:w-[28vw] md:h-[38vw]
          lg:w-[15vw] lg:h-[20vw]

          left-1/2 -translate-x-1/2
          lg:left-[28vw] lg:translate-x-0

          top-10 lg:-top-36
          "
        >
          <img
            ref={imageRef}
            className="w-full h-full object-cover"
            src={imageArray[0]}
            alt=""
          />
        </div>

        {/* HEADING */}
        <div className="relative font-[font2] text-center mt-[30vh] lg:mt-[55vh]">
          <h1 className="
            text-[16vw]
            sm:text-[14vw]
            md:text-[12vw]
            lg:text-[20vw]
            uppercase
            leading-[15vw]
            lg:leading-[18vw]
          ">
            Soixan7e <br />
            Douze
          </h1>
        </div>

        {/* TEXT */}
        <div className="
          mt-8
          px-6
          md:px-12
          lg:px-0
          lg:pl-[40%]
          lg:mt-20
          relative
        ">
          <p className="
            text-base
            sm:text-lg
            md:text-xl
            lg:text-4xl
            leading-snug
          ">
            Notre curiosité nourrit notre créativité. On reste humbles et on
            dit non aux gros egos, même le vôtre. Une marque est vivante.
            Elle a des valeurs, une personnalité, une histoire. Si on oublie ça,
            on peut faire de bons chiffres à court terme, mais on la tue à long
            terme. C’est pour ça qu’on s’engage à donner de la perspective,
            pour bâtir des marques influentes.
          </p>
        </div>

      </div>
    </div>
  );
};

export default Agence;
