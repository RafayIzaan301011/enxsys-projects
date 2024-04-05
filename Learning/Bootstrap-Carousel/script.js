// document.addEventListener(
// 	"DOMContentLoaded",
// 	function () {
// 		var parentDiv = document.getElementById(
// 			"dynamicContent",
// 		);

// 		var parentDiv2 = document.getElementById(
// 			"dynamicContent-2",
// 		);

// 		var parentDiv3 = document.getElementById(
// 			"dynamicContent-3",
// 		);

// 		var childDivs = [];
// 		var images = [];
// 		var imgArray = [];
// 		var childDivsArray = [];

// 		for (let i = 0; i < 12; i++) {
// 			let img = document.createElement("img");
// 			img.src =
// 				"/images/thumb" + (i + 1) + ".png";
// 			img.className = "d-block w-100 h-100";
// 			img.alt = "Image " + (i + 1);
// 			imgArray.push(img);
// 			console.log(img);

// 			let childDiv =
// 				document.createElement("div");
// 			childDiv.className = "col";
// 			childDivsArray.push(childDiv);
// 		}

// 		console.log(imgArray);
// 		console.log(childDivsArray);

// 		for (let i = 0; i < 4; i++) {
// 			let childDiv = childDivsArray[i];
// 			let image = imgArray[i];

// 			console.log(image);
// 			console.log(childDiv);

// 			childDiv.appendChild(image);
// 			parentDiv.appendChild(childDiv);
// 			// console.log(images);
// 		}

// 		for (let i = 4; i < 8; i++) {
// 			let childDiv = childDivsArray[i];
// 			let image = imgArray[i];

// 			console.log(image);
// 			console.log(childDiv);

// 			childDiv.appendChild(image);
// 			parentDiv2.appendChild(childDiv);
// 			// console.log(images);
// 		}

// 		for (let i = 8; i < 12; i++) {
// 			let childDiv = childDivsArray[i];
// 			let image = imgArray[i];

// 			console.log(image);
// 			console.log(childDiv);

// 			childDiv.appendChild(image);
// 			parentDiv3.appendChild(childDiv);
// 			// console.log(images);
// 		}

// 	},
// );

window.addEventListener(
	"DOMContentLoaded",
	function () {
		var imgs_per_slide = 4;

		// Retrieve viewport dimensions
		var viewportWidth =
			window.innerWidth ||
			document.documentElement.clientWidth;
		var viewportHeight =
			window.innerHeight ||
			document.documentElement.clientHeight;

		// Display viewport dimensions
		console.log(
			"Viewport size changed to: " +
				viewportWidth +
				" x " +
				viewportHeight +
				" pixels",
		);

		// Update imgs_per_slide based on viewport width
		if (
			viewportWidth <= 900 &&
			viewportWidth > 700
		) {
			imgs_per_slide = 3;
		} else if (
			viewportWidth <= 700 &&
			viewportWidth > 500
		) {
			imgs_per_slide = 2;
		} else if (viewportWidth <= 500) {
			imgs_per_slide = 1;
		}

		console.log(
			"images per slide: ",
			imgs_per_slide,
		);

		var parentDiv =
			document.getElementsByClassName(
				"dynamicContent",
			);

		var childDivs = [];
		var images = [];
		var imgArray = [];
		var childDivsArray = [];

		// Loop to create images and child divs
		for (let i = 0; i < 12; i++) {
			let img = document.createElement("img");
			img.src =
				"/images/thumb" + (i + 1) + ".png";
			img.className = "d-block w-100 h-100";
			img.alt = "Image " + (i + 1);
			imgArray.push(img);

			let childDiv =
				document.createElement("div");
			childDiv.className = "col";
			childDivsArray.push(childDiv);
		}

		const total_imgs = imgArray.length;

		if (
			total_imgs % 4 != 0 &&
			total_imgs % 3 != 0
		) {
			return;
		}

		// ----------- Get the carousel-inner ------------
		var carousel_inner =
			document.getElementsByClassName(
				"carousel_inner",
			);

		// ----------- Calculate Total Slides -------------
		let slides = total_imgs / imgs_per_slide;

		// -----------

		// Loop through each parentDiv and append childDivs and images
		for (let j = 0; j < parentDiv.length; j++) {
			var currentParentDiv = parentDiv[j];

			for (let i = j * 4; i < (j + 1) * 4; i++) {
				let childDiv = childDivsArray[i];
				let image = imgArray[i];
				childDiv.appendChild(image);
				currentParentDiv.appendChild(childDiv);
			}
		}

		setInterval(() => {
			var nextBtn =
				document.getElementsByClassName(
					"carousel-control-next",
				)[0];
			nextBtn.click();
		}, 3000);
	},
);

// document.addEventListener("DOMContentLoaded", function() {
// 	var imgs_per_slide = 4;

// 	window.addEventListener("resize", function() {
// 			var viewportWidth = window.innerWidth || document.documentElement.clientWidth;

// 			if (viewportWidth <= 900 && viewportWidth > 700) {
// 					imgs_per_slide = 3;
// 			} else if (viewportWidth <= 700 && viewportWidth > 500) {
// 					imgs_per_slide = 2;
// 			} else if (viewportWidth <= 500) {
// 					imgs_per_slide = 1;
// 			}

// 			// Log the updated value of imgs_per_slide
// 			console.log("Images per slide: ", imgs_per_slide);
// 	});

// 	// Log the initial value of imgs_per_slide
// 	console.log("Initial images per slide: ", imgs_per_slide);
// });
