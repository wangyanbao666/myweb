document.addEventListener("DOMContentLoaded", function() {
	// Check if the button to scroll was clicked before
	const scrollToDivClicked = sessionStorage.getItem("scrollTo");
	console.log(scrollToDivClicked)
	if (scrollToDivClicked !== null){
		const targetDiv = document.getElementById(scrollToDivClicked);
		if (targetDiv) {
			targetDiv.scrollIntoView({ behavior: "smooth" });
		}
	}
	// Clear the session storage after checking
	sessionStorage.removeItem("scrollTo");
  });