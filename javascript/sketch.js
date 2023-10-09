var qrcode = new QRCode(document.getElementById("qrcode"), {
	width: 100,
	height: 100,
  });
  

  const downloadButton = document.getElementById("downloadButton");
  
  downloadButton.addEventListener("click", function() {
	const canvas = document.getElementById("qrcode").querySelector("canvas");

	// Cria um novo canvas com uma borda branca de 20x20 pixels
	const newCanvas = document.createElement("canvas");
	newCanvas.width = canvas.width + 40;
	newCanvas.height = canvas.height + 40;
	const newContext = newCanvas.getContext("2d");
  
	// Preenche o novo canvas com a cor branca
	newContext.fillStyle = "white";
	newContext.fillRect(0, 0, newCanvas.width, newCanvas.height);
  
	// Desenha o QR Code no novo canvas
	newContext.drawImage(canvas, 20, 20);
  
	// Converte o novo canvas para uma imagem PNG
	const image = newCanvas.toDataURL("image/png");
  
	// Cria um novo elemento `a` para baixar a imagem
	const downloadLink = document.createElement("a");
	downloadLink.href = image;
	downloadLink.download = "qr-code.png";
  
	// Clica no elemento `a` para baixar a imagem
	downloadLink.click();
  });

function isNumeric(value) {
  const number = Number(value);

  return !isNaN(number);
}

function makeCode () {		
	var elText = document.getElementById("text");
	if (!elText.value) {
		//alert("Input a text");
		elText.focus();
		//return;
	}
	var auxiliar = elText.value
	if(elText.value && auxiliar.length == 11 && isNumeric(auxiliar)){
		qrcode.makeCode(elText.value);
		downloadButton.style.display = "block";
	}
	else if(elText.value == ''){
		
	}
	else{
		alert("Número de matrícula inválido");
		elText.focus();
		elText.value = '';
	}
}

downloadButton.style.display = "none";

makeCode();

$("#text").
	on("blur", function () {
		makeCode();
	}).
	on("keydown", function (e) {
		if (e.keyCode == 13) {
			makeCode();
		}
	});



	
