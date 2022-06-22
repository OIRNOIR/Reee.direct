window.HELP_IMPROVE_VIDEOJS = false;
let complete = false;
window.addEventListener('click', () => {
	if (complete) return;
	complete = true;
	try {
		document.getElementById("content").style.display = "none";
	} catch { }
	try {
		document.getElementById("stream-container").style.display = "initial";
	} catch { }
	try {
		document.getElementById("ol").style.display = "initial";
	} catch { }
	try {
		document.body.classList.add("blackbg");
	} catch { }
	try {
		document.getElementById("title").innerText = atob("R0VUIFJJQ0tST0xMJ0Q=");
	} catch { }
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