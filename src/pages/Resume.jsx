import resume23 from '/src/pages/resume23.pdf';

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
      <h1>Resume1</h1>
      <p></p>
      <div style={containerStyle}>
        <a href="/src/pages/resume23.pdf" target="_blank" rel="Resume23">
          Resume
        </a>
        <embed src="/src/pages/resume23.pdf" type="application/pdf" style={pdfStyle} />
      </div>
      <br />
    </div>
  );
}
