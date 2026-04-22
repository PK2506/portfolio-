import React from "react";
import "./Home.css";

const skillCategories = [
  {
    title: "Languages",
    items: [
      { name: "Python", slug: "python" },
      { name: "C++", slug: "cplusplus" },
      { name: "JavaScript", slug: "javascript" },
    ],
  },
  {
    title: "Web & Backend",
    items: [
      { name: "React", slug: "react" },
      { name: "Flask", slug: "flask" },
      { name: "Node.js", slug: "nodedotjs" },
    ],
  },
  {
    title: "AI / ML",
    items: [
      { name: "PyTorch", slug: "pytorch" },
      { name: "scikit-learn", slug: "scikitlearn" },
      { name: "LangChain", slug: "langchain" },
    ],
  },
  {
    title: "Data & Systems",
    items: [
      { name: "Pandas", slug: "pandas" },
      { name: "NumPy", slug: "numpy" },
    ],
  },
  {
    title: "Tools",
    items: [
      { name: "Git", slug: "git" },
      { name: "Docker", slug: "docker" },
    ],
  },
];

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-portrait">
          <img
            src={`${process.env.PUBLIC_URL}/pranishk.jpeg`}
            alt="Pranishk Reddy"
            className="profile-pic"
          />
        </div>
        <div className="hero-text">
          <p className="hero-eyebrow">Portfolio — 2026</p>
          <h1>
            Pranishk <span>Reddy</span>
          </h1>
          <p className="tagline">
            Artificial Intelligence student building smart, scalable
            technologies that solve real-world problems.
          </p>
          <div className="hero-meta">
            <span>Mahindra University</span>
            <span className="dot" aria-hidden="true" />
            <span>Hyderabad, India</span>
          </div>
        </div>
      </section>

      <section className="card card-about">
        <span className="card-index">01</span>
        <h2>About Me</h2>
        <p>
          I am currently pursuing a degree in Artificial Intelligence at
          Mahindra University, with a keen focus on developing smart, scalable
          technologies. I&rsquo;m driven by the challenge of applying AI to
          practical, real-world problems, especially where innovation can
          create tangible value. Beyond academics, I enjoy traveling and
          exploring new places, and I have a strong interest in sports,
          particularly cricket and snooker, which help me stay active and
          maintain a balanced lifestyle.
        </p>
      </section>

      <div className="info-grid">
        <section className="card card-interests">
          <span className="card-index">02</span>
          <h2>Research Interests</h2>
          <ul>
            <li>Recommender Systems</li>
            <li>Natural Language Processing (NLP)</li>
            <li>Computer Vision</li>
            <li>Human-Centered AI &amp; Social Impact</li>
          </ul>
        </section>

        <section className="card card-details">
          <span className="card-index">03</span>
          <h2>Personal Details</h2>
          <ul className="details-list">
            <li>
              <span className="detail-label">Name</span>
              <span className="detail-value">Pranishk Reddy</span>
            </li>
            <li>
              <span className="detail-label">Phone</span>
              <a className="detail-value" href="tel:+919618013409">
                +91-9618013409
              </a>
            </li>
            <li>
              <span className="detail-label">Personal Email</span>
              <a className="detail-value" href="mailto:reddypranishk@gmail.com">
                reddypranishk@gmail.com
              </a>
            </li>
            <li>
              <span className="detail-label">College Email</span>
              <a
                className="detail-value"
                href="mailto:se23uari099@mahindrauniversity.edu.in"
              >
                se23uari099@mahindrauniversity.edu.in
              </a>
            </li>
          </ul>
        </section>
      </div>

      <section className="card card-skills">
        <span className="card-index">04</span>
        <h2>Skills</h2>
        <div className="skills-categories">
          {skillCategories.map((cat) => (
            <div className="skills-category" key={cat.title}>
              <h3 className="skills-category-title">{cat.title}</h3>
              <div className="skills">
                {cat.items.map((item) => (
                  <span className="skill-tag" key={item.name}>
                    {item.slug && (
                      <img
                        src={`https://cdn.simpleicons.org/${item.slug}`}
                        alt=""
                        className="skill-logo"
                        aria-hidden="true"
                      />
                    )}
                    {item.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
