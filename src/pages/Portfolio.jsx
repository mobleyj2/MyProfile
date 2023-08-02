
import movie from "./moviemagic.png";
import data from "./12.png";
import logo from "./Shapes.png";
import notes from "./Notes.png";
import pwa from "./Jate.png";
import study from "./study.png";

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
        <img src={movie} alt="Movie" style={imageStyle} />
      </div>

      <br />

      <div style={containerStyle}>
        <a href="https://github.com/mobleyj2/SQL-Database.git">SQL DataBase</a>
        <img src={data} alt="db" style={imageStyle} />
      </div>

      <br />

      <div style={containerStyle}>
        <a href="https://github.com/mobleyj2/Shapes-and-Name.git">Logo Generator</a>
        <img src={logo} alt="Logo" style={imageStyle} />
      </div>

      <br />

      <div style={containerStyle}>
        <a href="https://github.com/mobleyj2/Note-taker.git">Notes</a>
        <img src={notes} alt="Notes" style={imageStyle} />
      </div>

      <br />

      <div style={containerStyle}>
        <a href="https://github.com/mobleyj2/PWA-Text-Edit.git">PWA Text</a>
        <img src={pwa} alt="PWA Text" style={imageStyle} />
      </div>

      <br />

      <div style={containerStyle}>
        <a href="https://github.com/mobleyj2/study-guide.git">Study Guide</a>
        <img src={study} alt="Study Guide" style={imageStyle} />
      </div>

      <br />
    </div>
  );
}
