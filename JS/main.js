var i = 0; 			// Start Point
var images = [];	// Images Array
var time = 2000;	// Time Between Switch
	 
// Image List
images[0] = "https://w.forfun.com/fetch/60/6097a5e72da684293dd5bc5a5e6bb653.jpeg";
images[1] = "https://cdn.wallpapersafari.com/72/90/M7xSpI.jpg";
images[2] = "https://images6.alphacoders.com/744/thumb-1920-744996.jpg";
images[3] = "https://i0.wp.com/picjumbo.com/wp-content/uploads/fresh-homemade-lemonade-free-photo.jpg?w=2210&quality=70";

// Change Image
function changeImg(){
	document.slide.src = images[i];

	// Check If Index Is Under Max
	if(i < images.length - 1){
	  // Add 1 to Index
	  i++; 
	} else { 
		// Reset Back To O
		i = 0;
	}

	// Run function every x seconds
	setTimeout("changeImg()", time);
}

// Run function when page loads
window.onload=changeImg;