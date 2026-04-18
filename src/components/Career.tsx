import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My Education <span>&</span>
          <br /> Journey
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Class 10th — CBSE</h4>
                <h5>ST. Thomas Sr. Sec. School, Mandsaur</h5>
              </div>
              <h3>2021</h3>
            </div>
            <p>
              Completed secondary education with a strong academic foundation,
              developing early interests in technology and problem-solving.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Class 12th — CBSE</h4>
                <h5>ST. Thomas Sr. Sec. School, Mandsaur</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Graduated senior secondary with focus on Science and Mathematics,
              building the analytical thinking skills that now fuel my
              engineering mindset.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech — AI & Machine Learning</h4>
                <h5>Guru Gobind Singh Indraprastha University</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Currently in my second year, diving deep into artificial
              intelligence, machine learning, data structures & algorithms, and
              full-stack web development. Building real-world AI applications
              and sharpening competitive programming skills.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
