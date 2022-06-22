window.HELP_IMPROVE_VIDEOJS = false;
let complete = false;
window.addEventListener('click', () => {
	if (complete) return;
	complete = true;
	document.getElementById("content").style.display = "none";
	document.getElementById("stream-container").style.display = "initial";
	try {
		document.getElementById("ol").style.display = "initial";
	} catch {

	}
	document.body.classList.add("blackbg");
	document.getElementById("title").innerText = atob("R0VUIFJJQ0tST0xMJ0Q=");
	const stream = document.getElementById("stream-player_html5_api");
	stream.play();
	let streamLoopCount = 0;
	stream.addEventListener('pause', () => {
		stream.play();
	});
	stream.addEventListener('ended', () => {
		// Do something when the stream ends?
		streamLoopCount++;
		console.log(`Loop count: ${streamLoopCount}`);
	});
	stream.addEventListener('seeking', () => {
		stream.load();
		stream.play();
	});
});