import React from 'react';
import '../styles/About.css';
import toolsImage from '../assets/tools.png';
import backEndImage from '../assets/backend.png';
import frontEndImage from '../assets/frontend.png';



interface AboutProps {
  language: 'en' | 'es';
}

const About: React.FC<AboutProps> = ({ language }) => {
  return (
    <section id="about" className="section">

      <h2 className="title">
        {language === 'es' ? 'About Me' : 'Sobre mí'}
      </h2>

      {/* Breve Presentación Personal */}
      <p className="paragraph">
        {language === 'es'
          ? 'I am Alejandro Díaz, a technology and development enthusiast. I enjoy creating robust and scalable web solutions because I know I can bring value through what I do. I am passionate about programming, as it allows me to build something from scratch and bring each component to life, almost as if I were orchestrating a symphony of functionalities. This creative and structured approach has shaped who I am: an IT enthusiast who constantly seeks to improve with every project.'
          : 'Soy Alejandro Díaz, un apasionado de la tecnología y el desarrollo. Disfruto creando soluciones web robustas y escalables, porque sé que puedo aportar valor a través de lo que hago. Me apasiona la programación, ya que me permite construir algo desde cero y darle vida a cada componente, casi como si estuviera orquestando una sinfonía de funcionalidades. Este enfoque creativo y estructurado me ha llevado a ser quien soy: un entusiasta de las TI que busca mejorar constantemente en cada proyecto.'}
      </p>

      {/* Resumen de Habilidades y Tecnologías Clave */}
      <h3 className="skillsTitle">
        {language === 'es' ? 'Technical Skills' : 'Habilidades Técnicas'}
      </h3>
      <div className="skillsContainer">
        <div className="skillsColumn">
          <img src={frontEndImage} alt="Tools Icon" className="Image" />
          <h4 className="columnTitle">Frontend</h4>
          <ul>
            <li>ReactJS</li>
            <li>CSS3</li>
            <li>HTML5</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
          </ul>
        </div>
        <div className="skillsColumn">
          <img src={backEndImage} alt="Tools Icon" className="Image" />
          <h4 className="columnTitle">Backend</h4>
          <ul>
            <li>Node.js</li>
            <li>Express</li>
            <li>MySQL</li>
            <li>PostgreSQL</li>
          </ul>
        </div>
        <div className="skillsColumn">

          <img src={toolsImage} alt="Tools Icon" className="Image" />
          <h4 className="columnTitle">{language === 'es' ? 'Tools' : 'Herramientas'}</h4>
          <ul>
            <li>GitHub</li>
            <li>Postman</li>
            <li>APIs</li>
          </ul>
        </div>
      </div>

      {/* Habilidades Blandas */}
      <h3 className="skillsTitle">
        {language === 'es' ? 'Soft Skills' : 'Habilidades Blandas'}
      </h3>
      <ul className="softSkillsList">
        <li>{language === 'es' ? 'Effective Communication' : 'Comunicación Efectiva'}</li>
        <li>{language === 'es' ? 'Teamwork and Collaboration' : 'Trabajo en Equipo y Colaboración'}</li>
        <li>{language === 'es' ? 'Adaptability and Flexibility' : 'Adaptabilidad y Flexibilidad'}</li>
        <li>{language === 'es' ? 'Problem Solving' : 'Resolución de Problemas'}</li>
        <li>{language === 'es' ? 'Critical Thinking' : 'Pensamiento Crítico'}</li>
        <li>{language === 'es' ? 'Continuous Learning Ability' : 'Capacidad de Aprendizaje Continuo'}</li>
        <li>{language === 'es' ? 'Time Management and Organization' : 'Gestión del Tiempo y Organización'}</li>
        <li>{language === 'es' ? 'Attention to Detail' : 'Atención al Detalle'}</li>
        <li>{language === 'es' ? 'Patience and Resilience' : 'Paciencia y Resiliencia'}</li>
        <li>{language === 'es' ? 'Proactivity' : 'Proactividad'}</li>
      </ul>

      {/* Filosofía o Enfoque en el Desarrollo */}
      <h3 className="skillsTitle">
        {language === 'es' ? 'My Development Philosophy' : 'Mi Filosofía de Desarrollo'}
      </h3>
      <p className="smallParagraph">
        {language === 'es'
          ? 'As a developer, I believe that code quality is just as important as functionality itself. My focus is on writing clean, modular, and scalable code that not only solves problems efficiently but is also easy to maintain and improve over time. With every project, my goal is to create applications that provide a smooth, intuitive, and sustainable experience in the long run.'
          : 'Como desarrollador, creo que la calidad del código es tan importante como la funcionalidad misma. Mi enfoque se centra en escribir código limpio, modular y escalable que no solo resuelva problemas de manera eficiente, sino que también sea fácil de mantener y mejorar con el tiempo. En cada proyecto, mi objetivo es crear aplicaciones que ofrezcan una experiencia fluida, intuitiva y sostenible a largo plazo.'}
      </p>

      <p className="smallParagraph">
        {language === 'es'
          ? 'I firmly believe that innovation and personal growth are essential in the world of development. I enjoy collaborating with passionate and diverse teams, where continuous learning and improvement are the foundations that allow us to overcome challenges and achieve excellence in every line of code.'
          : 'Soy un firme creyente de que la innovación y el crecimiento personal son esenciales en el mundo del desarrollo. Disfruto colaborar con equipos apasionados y diversos, donde el aprendizaje y la mejora continua son los pilares que nos permiten superar desafíos y alcanzar la excelencia en cada línea de código.'}
      </p>

      {/* Experiencia Destacada o Logros Relevantes */}
      <h3 className="skillsTitle">
        {language === 'es' ? 'Highlighted Experience' : 'Experiencia Destacada'}
      </h3>
      <p className="smallParagraph">
        {language === 'es'
          ? 'Throughout my career, I ve had the privilege of working on challenging and diverse projects that have allowed me to develop a full set of skills in both frontend and backend. During my graduation from the SoyHenry bootcamp, I had the opportunity to work on e-commerce applications, where I faced technical and collaborative challenges that allowed me to grow professionally'
          : 'A lo largo de mi carrera, he tenido el privilegio de trabajar en proyectos desafiantes y variados que me han permitido desarrollar un conjunto completo de habilidades tanto en frontend como backend. Durante mi graduación del bootcamp de SoyHenry, tuve la oportunidad de trabajar en aplicaciones de e-commerce, donde me enfrenté a retos técnicos y de colaboración que me permitieron crecer profesionalmente.'}
      </p>

      <p className="smallParagraph">
        {language === 'es'
          ? ' I consider myself a person committed to excellence, always giving my best to contribute to the teams success and achieve the most efficient and high-quality results. Each project has been an opportunity to learn and improve, strengthening my passion for web development and my dedication to creating innovative, high-impact solutions. '
          : 'Me considero una persona comprometida con la excelencia, siempre dando lo mejor de mí para aportar al éxito del equipo y lograr los resultados más eficientes y de calidad. Cada proyecto ha sido una oportunidad para aprender y mejorar, consolidando mi pasión por el desarrollo web y mi dedicación a crear soluciones innovadoras y de alto impacto.'}
      </p>

      {/* Intereses o Proyectos Personales */}
      <h3 className="skillsTitle">
        {language === 'es' ? 'Interests and Personal Projects' : 'Intereses y Proyectos Personales'}
      </h3>
      <p className="smallParagraph">
        {language === 'es'
          ? 'In my free time, I enjoy exploring new technologies and contributing to open-source projects. I am currently developing a task management application aimed at helping others organize their work more efficiently.'
          : 'En mi tiempo libre, me gusta explorar nuevas tecnologías y contribuir a proyectos de código abierto. Actualmente, estoy desarrollando una aplicación de gestión de tareas con el objetivo de ayudar a otros a organizar su trabajo de manera más eficiente.'}
      </p>

      {/* Llamado a la Acción */}
      <p className="callToAction">
        {language === 'es'
          ? 'If you have any questions or are interested in collaborating on a project, feel free to reach out. I am always open to new opportunities and challenges!'
          : 'Si tienes alguna pregunta o estás interesado en colaborar en un proyecto, no dudes en contactarme. ¡Estoy siempre abierto a nuevas oportunidades y desafíos!'}
      </p>
    </section>
  );
};

export default About;
