var qrcode = new QRCode(document.getElementById("qrcode"), {
	width: 100,
	height: 100,
  });
  

  const downloadButton = document.getElementById("downloadButton");
  
  downloadButton.addEventListener("click", function() {
	const canvas = document.getElementById("qrcode").querySelector("canvas");

	const newCanvas = document.createElement("canvas");
	newCanvas.width = canvas.width + 40;
	newCanvas.height = canvas.height + 40;
	const newContext = newCanvas.getContext("2d");
  
	newContext.fillStyle = "white";
	newContext.fillRect(0, 0, newCanvas.width, newCanvas.height);
  
	newContext.drawImage(canvas, 20, 20);
  
	const image = newCanvas.toDataURL("image/png");
  
	const downloadLink = document.createElement("a");
	downloadLink.href = image;
	downloadLink.download = "qr-code.png";
  
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



	
