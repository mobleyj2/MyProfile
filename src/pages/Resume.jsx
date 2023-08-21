import resume23 from 'C:/Users/moble/OneDrive/Desktop/resume23.pdf';

export default function Resume() {
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const pdfStyle = {
    width: "60%",
    height: "500px",
  };

  return (
    <div>
      <h1>Resume</h1>
      <p></p>
      <div style={containerStyle}>
        <a href="/src/pages/resume23.pdf" target={resume23} rel="resume23.pdf">
          Resume
        </a>
        <embed src="/src/pages/resume23.pdf" type={resume23} style={pdfStyle} />
      </div>
      <br />
    </div>
  );
}
