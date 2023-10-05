var qrcode = new QRCode(document.getElementById("qrcode"), {
	width : 100,
	height : 100
});

const downloadButton = document.createElement("button");
downloadButton.innerHTML = "Baixar QR Code";
downloadButton.classList.add("btn");
downloadButton.classList.add("btn-primary");

document.getElementById("qrcode").appendChild(downloadButton);

downloadButton.addEventListener("click", function() {
	const canvas = document.getElementById("qrcode").querySelector("canvas");
  
	const image = canvas.toDataURL("image/png");

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



	