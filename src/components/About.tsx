import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para" style={{ marginBottom: '20px' }}>
          I'm Akshit Mehta — a second-year AI & Machine Learning engineering student at Guru Gobind Singh Indraprastha University. I am driven by a deep curiosity for building intelligent systems and immersive digital experiences.
        </p>
        <p className="para">
          From crafting personalized AI assistants that respond to voice commands, to engineering healthcare-grade prediction models and 3D interactive web experiences — I thrive at the intersection of creativity and computation. My toolkit spans Python, C++, React, Three.js, and modern AI.
        </p>
      </div>
    </div>
  );
};

export default About;
