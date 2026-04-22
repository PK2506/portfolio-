import React from "react";
import "./Home.css";

const skillCategories = [
  {
    title: "Languages",
    items: [
      { name: "C", slug: "c" },
      { name: "C++", slug: "cplusplus" },
      { name: "Go", slug: "go" },
      { name: "Python", slug: "python" },
      { name: "JavaScript", slug: "javascript" },
      { name: "TypeScript", slug: "typescript" },
      { name: "R", slug: "r" },
    ],
  },
  {
    title: "Web & Backend",
    items: [
      { name: "React", slug: "react" },
      { name: "Next.js", slug: "nextdotjs" },
      { name: "Flask", slug: "flask" },
      { name: "Node.js", slug: "nodedotjs" },
      { name: "REST APIs" },
    ],
  },
  {
    title: "AI / ML",
    items: [
      { name: "TensorFlow", slug: "tensorflow" },
      { name: "PyTorch", slug: "pytorch" },
      { name: "scikit-learn", slug: "scikitlearn" },
      { name: "LangChain", slug: "langchain" },
      { name: "LLM APIs", slug: "openai" },
    ],
  },
  {
    title: "Data & Systems",
    items: [
      { name: "FAISS" },
      { name: "ChromaDB" },
      { name: "Pandas", slug: "pandas" },
      { name: "NumPy", slug: "numpy" },
      { name: "Distributed Systems" },
    ],
  },
  {
    title: "Tools",
    items: [
      { name: "Git", slug: "git" },
      { name: "Docker", slug: "docker" },
      { name: "API Development" },
    ],
  },
];

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <img
          src={`${process.env.PUBLIC_URL}/Aadya%20Sharma.jpeg`}
          alt="Aadya Sharma"
          className="profile-pic"
        />
        <div className="hero-text">
          <h1>
            Hi, I'm <span>Aadya Sharma</span>
          </h1>
          <p className="tagline">
            Artificial Intelligence student building impactful tech solutions.
          </p>
        </div>
      </section>

      <section className="card">
        <h2>About Me</h2>
        <p>
          I am an Artificial Intelligence undergraduate at Mahindra University
          with a strong interest in building intelligent, scalable systems. I
          enjoy working at the intersection of AI and real-world problem
          solving. My experience spans developing AI-driven platforms,
          decentralized applications, and voice-based systems. I am particularly
          driven by creating technology that has meaningful social impact, such
          as healthcare solutions.
        </p>
      </section>

      <section className="card">
        <h2>Research Interests</h2>
        <ul>
          <li>Machine Learning &amp; Deep Learning</li>
          <li>Artificial Intelligence &amp; LLM Applications</li>
          <li>Data Science &amp; Predictive Systems</li>
          <li>Distributed Systems &amp; Scalable Backend Development</li>
        </ul>
      </section>

      <section className="card">
        <h2>Personal Details</h2>
        <ul className="details-list">
          <li><strong>Name:</strong> Aadya Sharma</li>
          <li>
            <strong>Phone:</strong>{" "}
            <a href="tel:+917675847299">+91-7675847299</a>
          </li>
          <li>
            <strong>Personal Email:</strong>{" "}
            <a href="mailto:aadyasindia@gmail.com">aadyasindia@gmail.com</a>
          </li>
          <li>
            <strong>College Email:</strong>{" "}
            <a href="mailto:se23uari168@mahindrauniversity.edu.in">
              se23uari168@mahindrauniversity.edu.in
            </a>
          </li>
        </ul>
      </section>

      <section className="card">
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
