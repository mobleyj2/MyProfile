
import movie from '/src/pages/moviemagic.png';
import data from '/src/pages/12.png';
import logo from '/src/pages/Shapes.png';
import notes from '/src/pages/Notes.png';
import study from '/src/pages/study.png';
import pwa from '/src/pages/Jate.png';



export default function Portfolio() {
  const containerStyle = {
    display: "grid",
    placeItems: "center",
  };

  const imageStyle = {
    width: "60%",
    height: "auto",
  };

  return (
    <div>
      <h1>Portfolio</h1>
      <p>These are just some of the projects I have worked on.</p>
      <div style={containerStyle}>
        <a href="https://github.com/JuanMartinez503/Movie-Search-Engine.git">
          
          Movie
        </a>
        <img id="moviemagic" src={movie} alt="Movie" style={imageStyle} />
      </div>

      <br />

      <div style={containerStyle}>
        <a href="https://github.com/mobleyj2/SQL-Database.git">SQL DataBase</a>
        <img id="12png" src={data} alt="db" style={imageStyle} />
      </div>

      <br />

      <div style={containerStyle}>
        <a href="https://github.com/mobleyj2/Shapes-and-Name.git">Logo Generator</a>
        <img id="Shapespng" src={logo} alt="Logo" style={imageStyle} />
      </div>

      <br />

      <div style={containerStyle}>
        <a href="https://github.com/mobleyj2/Note-taker.git">Notes</a>
        <img id="Notespng" src={notes} alt="Notes" style={imageStyle} />
      </div>

      <br />

      <div style={containerStyle}>
        <a href="https://github.com/mobleyj2/PWA-Text-Edit.git">PWA Text</a>
        <img id="Jatepng" src={pwa} alt="PWA Text" style={imageStyle} />
      </div>

      <br />

      <div style={containerStyle}>
        <a href="https://github.com/mobleyj2/study-guide.git">Study Guide</a>
        <img id="study" src={study} alt="Study Guide" style={imageStyle} />
      </div>

      <br />
    </div>
  );
}
