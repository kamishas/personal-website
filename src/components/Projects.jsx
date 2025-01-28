import React, { useRef } from 'react';
import '../components/Projects.css';
import characterImage from '../assets/Room-Relaxing.png';

const Projects = () => {
  const contactRef = useRef();

  const scrollToContact = () => {
    contactRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="projects-page">
      <header className="hero-section">
        <div className="intro">
          <h4>HELLO</h4>
          <h1>I'm <span>Shasank Kamineni</span><br /></h1>
          <p>Passionate about building scalable web AI applications and exploring new technologies.</p>
          <button className="btn" onClick={scrollToContact}>Hire Me</button>
          <button className="btn2">Portfolio</button>
        </div>
        <div className="hero-image" style={{ textAlign: 'right', paddingRight: '5%' }}>
          <img src={characterImage} alt="Working Character" style={{ width: '75%', height: 'auto' }} />
        </div>
      </header>

      <section className="projects-section">
        <h2>🚀 My Projects</h2>
        <div className="card-container">
          <div className="card">
            <h3>Smart Student Survey Management System</h3>
            <p>Technologies: Angular, Spring Boot, MySQL, Docker, AWS</p>
            <p>Features: Integrated ChatGPT API for AI-powered assistance, dynamic survey generation, and real-time analytics.</p>
          </div>
          <div className="card">
            <h3>Smart Attendance System Using Face Recognition</h3>
            <p>Technologies: FaceNet, OpenCV, SQLite</p>
            <p>Features: Automated real-time attendance tracking using facial recognition, eliminating manual processes.</p>
          </div>
          <div className="card">
            <h3>Loyalty Rewards Application</h3>
            <p>Technologies: Android Studio, Java Servlets, JSP, Oracle SQL</p>
            <p>Features: Family-based point distribution system to promote customer loyalty through rewards.</p>
          </div>
        </div>
      </section>

      <section className="experience-section">
        <h2>💼 Work Experience</h2>
        <div className="card-container">
          <div className="card">
            <h3>Associate Software Engineer</h3>
            <p>Acrux IT Services | May 2021 – May 2023</p>
            <ul>
              <li>Automated CI/CD pipelines using Jenkins & Docker, improving deployment efficiency by 40%.</li>
              <li>Migrated legacy systems to AWS Cloud, enhancing scalability and performance.</li>
              <li>Implemented OAuth 2.0 and JWT for enhanced security protocols.</li>
              <li>Developed microservices architecture for scalable backend systems.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="skills-section">
        <h2>🛠️ Technical Skills</h2>
        <div className="card-container">
          <div className="card">
            <h3>Programming Languages</h3>
            <p>Java, Python, JavaScript, SQL</p>
          </div>
          <div className="card">
            <h3>Frameworks & Tools</h3>
            <p>Spring Boot, Angular, Docker, Jenkins, AWS, OpenCV</p>
          </div>
          <div className="card">
            <h3>Database Management</h3>
            <p>MySQL, Oracle SQL, SQLite</p>
          </div>
        </div>
      </section>

      <section className="certifications-section">
        <h2>📜 Certifications & Achievements</h2>
        <div className="card-container">
          <div className="card">
            <h3>Certified Java Developer</h3>
            <p>Oracle Certified Java Programmer (OCJP)</p>
          </div>
          <div className="card">
            <h3>AWS Cloud Practitioner</h3>
            <p>AWS Certified Cloud Practitioner</p>
          </div>
        </div>
      </section>

      <section ref={contactRef} className="contact-section">
        <h2>📞 Contact Me</h2>
        <div className="contact-card" style={{ backgroundColor: '#f5f5f5', padding: '20px', borderRadius: '10px', boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)' }}>
          <p><strong>Email:</strong> <a href="mailto:kaminenishasank@gmail.com">kaminenishasank@gmail.com</a></p>
          <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/shasank-kamineni/" target="_blank" rel="noopener noreferrer">linkedin.com/in/shasank-kamineni</a></p>
          <p><strong>Phone:</strong> <a href="tel:+15715442713">+1 571-544-2713</a></p>
        </div>
      </section>
    </div>
  );
};

export default Projects;
