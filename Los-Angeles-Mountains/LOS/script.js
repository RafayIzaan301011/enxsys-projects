var currSetIndex = 0;

function showSet(setIndex) {
	var slides =
		document.querySelectorAll(".mySlides");
	var startIndex = setIndex * 4;
	for (var i = 0; i < slides.length; i++) {
		if (i >= startIndex && i < startIndex + 4) {
			slides[i].style.display = "block";
		}
		// following else if to test, 2nd set of images follows the 1st set as desired
		// else if (
		// 	i >= startIndex + 4 &&
		// 	i < startIndex + 8
		// ) {
		// 	setTimeout(() => {
		// 		slides[i].style.display = "block";
		// 	}, 1875);
		// }
		else {
			slides[i].style.display = "none";
		}
	}
}

function currentSlide(dotIndex) {
	currSetIndex = dotIndex - 1;
	showSet(currSetIndex);
}

// shows 1st set of images on page reload
showSet(currSetIndex);

// Automatically switch sets after every 2 seconds
setInterval(function () {
	currSetIndex = (currSetIndex + 1) % 3; // Cycle through sets cyclically; circular array concept
	showSet(currSetIndex);
}, 3000);

let bottomBg =
	document.getElementsByClassName("bottom");
let mountain1 =
	document.getElementsByClassName("mountain-1");
let mountain2 =
	document.getElementsByClassName("mountain-2");

function changeBg(bgImage) {
	let bottom =
		document.getElementsByClassName("bottom")[0];
	console.log(5);
	if (bgImage) {
		bottom.style.background = `url('${bgImage}') no-repeat`;
		bottom.style.backgroundRepeat = "no-repeat";
		bottom.style.backgroundSize = "cover";
	} else {
		bottom.style.background = `url('/images/tab2.png') no-repeat`;
		bottom.style.backgroundRepeat = "no-repeat";
		bottom.style.backgroundSize = "cover";
	}
}
