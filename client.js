window.HELP_IMPROVE_VIDEOJS = false;
let rickrolld = false;
window.addEventListener('click', () => {
	if (rickrolld) return;
	rickrolld = true;
	document.getElementById("content").style.display = "none";
	document.getElementById("rickroll-container").style.display = "block";
	document.body.classList.add("blackbg");
	window.history.replaceState(null, "", "/rickroll");
	document.getElementById("title").innerText = "GET RICKROLL'D";
	const element = document.getElementById("rickroll-player_html5_api");
	element.play();
	element.addEventListener('pause', () => {
		element.play();
	});
});