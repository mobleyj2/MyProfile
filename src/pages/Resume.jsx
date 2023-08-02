

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
        <a href="/components/resume23.pdf" target="_blank" rel="noopener noreferrer">
          Resume
        </a>
        <embed src="./components/resume23.pdf" type="application/pdf" style={pdfStyle} />
      </div>
      <br />
    </div>
  );
}
