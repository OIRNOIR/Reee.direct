window.HELP_IMPROVE_VIDEOJS = false;
let complete = false;
window.addEventListener('click', () => {
	if (complete) return;
	complete = true;
	document.getElementById("content").style.display = "none";
	document.getElementById("stream-container").style.display = "block";
	document.body.classList.add("blackbg");
	document.getElementById("title").innerText = atob("R0VUIFJJQ0tST0xMJ0Q=");
	const element = document.getElementById("stream-player_html5_api");
	element.play();
	element.addEventListener('pause', () => {
		element.play();
	});
});