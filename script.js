window.addEventListener("load", () => {
  const card = document.getElementById("card");

  gsap.to(card, {
    duration: 2,
    rotationY: 0,
    ease: "elastic.out(1, 0.5)",
  });

  const music = document.getElementById("music");
  const musicButton = document.getElementById("musicButton");

  music.volume = 0.5;
  let isPlaying = false;

  musicButton.addEventListener("click", () => {
    if (!isPlaying) {
      music.play();
      musicButton.textContent = "⏸ Pausar Música";
      isPlaying = true;
    } else {
      music.pause();
      musicButton.textContent = "▶ Música Navideña";
      isPlaying = false;
    }
  });
});

window.addEventListener("load", () => {
  const card = document.getElementById("card");
  const printButton = document.getElementById("printButton");

  printButton.addEventListener("click", () => {
    const printContent = card.outerHTML;
    const printWindow = window.open("", "_blank");
    printWindow.document.write(`
      <html>
        <head>
          <title>Imprimir Tarjeta</title>
          <link rel="stylesheet" href="./styles.css">
        </head>
        <body>
          ${printContent}
        </body>
      </html>
    `);
    printWindow.document.close();
    printWindow.print();
  });
});
