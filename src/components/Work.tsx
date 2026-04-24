import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";

gsap.registerPlugin(useGSAP);

const projects = [
  {
    title: "Novia AI",
    category: "AI / ML · Healthcare",
    tools: "Python, Machine Learning, AI Prediction Models",
    image: `${import.meta.env.BASE_URL}images/novia_ai.webp`,
    link: "https://github.com/Akshit-24-M",
    description:
      "A healthcare AI that predicts diseases from symptoms and prescribes detailed first-aid care plans to prevent complications from delayed treatment.",
  },
  {
    title: "A.I.R.A.H.",
    category: "AI Assistant · Voice",
    tools: "Python, JavaScript, Speech Recognition, Web APIs",
    image: `${import.meta.env.BASE_URL}images/airah.webp`,
    link: "https://github.com/Akshit-24-M",
    description:
      "A personalized AI assistant that lives on my computer — she listens, responds, searches the web, opens apps by voice, schedules meetings, and sets reminders.",
  },
  {
    title: "3D Interactive Websites",
    category: "Web Development · 3D",
    tools: "Three.js, JavaScript, GSAP, WebGL",
    image: `${import.meta.env.BASE_URL}images/interactive_3d.webp`,
    link: "https://github.com/Akshit-24-M",
    description:
      "Buttery-smooth scroll-based storytelling with immersive 3D product interactions, particle effects, and cinematic web experiences.",
  },
  {
    title: "Creative Portfolios",
    category: "Web Development · Design",
    tools: "React, Three.js, WebGPU, GLSL, CSS Animations",
    image: `${import.meta.env.BASE_URL}images/portfolio_websites.webp`,
    link: "https://github.com/Akshit-24-M",
    description:
      "A collection of portfolio websites — from audio-reactive WebGPU with fluid motion and bloom, to 3D particle worlds and elegant slide-based designs.",
  },
];

const Work = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const flexRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    if (currentIndex < projects.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  useGSAP(() => {
    if (!flexRef.current) return;

    gsap.to(flexRef.current, {
      x: () => {
        const boxWidth = flexRef.current?.querySelector(".work-box")?.clientWidth || 0;
        return -currentIndex * boxWidth;
      },
      duration: 0.8,
      ease: "power3.inOut",
    });
  }, { dependencies: [currentIndex], scope: sectionRef });

  return (
    <div className="work-section" id="work" ref={sectionRef}>
      <div className="work-container section-container">
        <div className="work-header">
          <h2>
            My <span>Work</span>
          </h2>

          <div className="work-controls">
            <button
              className={`work-arrow ${currentIndex === 0 ? "disabled" : ""}`}
              onClick={prevSlide}
              aria-label="Previous Project"
            >
              <FiArrowLeft />
            </button>
            <button
              className={`work-arrow ${
                currentIndex === projects.length - 1 ? "disabled" : ""
              }`}
              onClick={nextSlide}
              aria-label="Next Project"
            >
              <FiArrowRight />
            </button>
          </div>
        </div>
        <div className="work-flex" ref={flexRef}>
          {projects.map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>

                  <div>
                    <h4>{project.title}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
              </div>
              <WorkImage
                image={project.image}
                alt={project.title}
                link={project.link}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
