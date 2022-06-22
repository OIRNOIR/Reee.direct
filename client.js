window.HELP_IMPROVE_VIDEOJS = false;
let complete = false;
window.addEventListener('click', () => {
	if (complete) return;
	complete = true;
	document.getElementById("content").style.display = "none";
	document.getElementById("stream-container").style.display = "initial";
	document.getElementById("ol").style.display = "initial";
	document.body.classList.add("blackbg");
	document.getElementById("title").innerText = atob("R0VUIFJJQ0tST0xMJ0Q=");
	const video = document.getElementById("stream-player_html5_api");
	video.play();
	video.addEventListener('pause', () => {
		video.play();
	});
	video.addEventListener('ended', () => {
		video.log("ended");
	});
	video.addEventListener('seeking', () => {
		video.load();
	});
});