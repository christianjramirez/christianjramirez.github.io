function biggerAlert(){
    alert("Hello, world!");
    document.getElementById("entry").style.fontSize = "24pt";
}

function fancify(){
    document.getElementById("entry").style.color = "blue";
    document.getElementById("entry").style.fontWeight = "bold";
    document.getElementById("entry").style.textDecoration = "underline";
}

function boring(){
    const text = document.getElementById("entry");
    text.removeAttribute("style");
}

function moo(){
    const textArea = document.getElementById("entry");
    text = textArea.value.toUpperCase();
    let sentences = text.split(".");

    for (let i = 0; i < sentences.length; i++) {
        let words = sentences[i].trim().split(" ");
        if (words.length > 0 && words[0] !== "") {
          words[words.length - 1] += "-Moo";
          sentences[i] = words.join(" ");
        }
      }

      // Join sentences back with periods
      textArea.value = sentences.join(".");
}

