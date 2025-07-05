
  const text = "Ncturnal";
  const element = document.getElementById("title");
  let index = 0;

  function typeWriter() {
    if (index < text.length) {
      element.innerHTML += text.charAt(index);
      index++;
      setTimeout(typeWriter, 100);
    }
  }

  typeWriter();