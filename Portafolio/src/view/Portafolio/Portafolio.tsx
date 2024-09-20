import './Portafolio.css';
import Photo from './Photo.png';

const copyToClipboard = () => {
  navigator.clipboard.writeText('Alejod951@gmail.com')
    .then(() => {
      alert('Correo copiado al portapapeles!');
    })
    .catch(err => {
      console.error('Error al copiar: ', err);
    });
};

export const Portafolio = () => {
  return (
    <div>
      <div className="portfolio-header">
        <img 
          src={Photo}
          alt="Foto de Cristian Alejandro Diaz Rivera" 
          className="portfolio-photo" 
        />
        <div className="portfolio-info">
          <h1>Cristian Alejandro Diaz Rivera</h1>
          <h2>Ingeniería Mecatrónica y Fullstack Developer</h2>
        </div>
      </div>
      
      <div className="portfolio-description">
        <p>
        Soy una persona dedicada y muy comunicativa, me agrada el en trabajo en equipo. Tengo conocimientos en diferentes áreas de IT y me esfuerzo por mantenerme actualizado ante cada avance tecnológico. comprometiéndome a dar siempre lo mejor de mí y a enfrentar los desafíos con determinación y profesionalismo.</p>
      </div>

      <div className="email-container">
      <h3>Email: </h3>
      <div className="email-box">
        <p>Alejod951@gmail.com</p>
        <button className="copy-button" onClick={copyToClipboard}><img src="https://cdn-icons-png.flaticon.com/512/748/748107.png" alt="Copiar" className='copy-icon'/></button>
      </div>
    </div>
    </div>
  );
};
