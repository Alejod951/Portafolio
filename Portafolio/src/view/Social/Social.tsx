import "./Social.css"

export const Social = ()=>{
    return(
        <div >
            <div className="text">
            <h1>@Social</h1>

            </div>

        <div  className="social-container">

        <a
        href="https://www.linkedin.com/in/cristian-alejandro-diaz-rivera-212069240/"
        target="_blank"
        rel="noopener noreferrer"
        className="social-link"
      >
        <img 
          src="https://cdn-icons-png.flaticon.com/512/174/174857.png" 
          alt="LinkedIn" 
          className="social-icon" 
        />
      </a>

      <a
        href="https://github.com/Alejod951"
        target="_blank"
        rel="noopener noreferrer"
        className="social-link"
      >
        <img 
          src="https://cdn-icons-png.flaticon.com/512/25/25231.png" 
          alt="GitHub" 
          className="social-icon" 
        />
      </a>
        </div>
      
    </div>

    );
     

    
}