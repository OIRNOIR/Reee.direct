window.HELP_IMPROVE_VIDEOJS = false;
let complete = false;
let playing = false;
let plistenerAdded = false;
window.addEventListener('click', start);
function start() {
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
	playing = true;
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
}

let ol = document.getElementById("ol");
var observer = new MutationObserver(() => {
	if (!playing && !plistenerAdded && document.getElementById("stream-player_html5_api") != undefined) {
		const playListener = document.getElementById("stream-player_html5_api").addEventListener('play', () => {
			document.getElementById("stream-player_html5_api").removeEventListener('play', playListener);
			start();
		});
		plistenerAdded = true;
	}
	if (!document.body.contains(ol)) {
		ol = document.createElement("div");
		ol.setAttribute("id", "ol");
		if (complete) {
			ol.style.display = "initial";
		}
		document.body.appendChild(ol);
	}
});
observer.observe(document.body, {childList: true, subtree: true});

window.addEventListener('DOMContentLoaded', async () => {
	let src = "https://assets.shortlnkto.com/stream/master.m3u8";
	if (Math.floor(Math.random() * 20) == 0) {
		src = "https://assets.shortlnkto.com/stream2/master.m3u8";
	}
	const vidElement = document.createElement("video")
	vidElement.setAttribute("id", "stream-player");
	vidElement.setAttribute("poster", "https://assets.shortlnkto.com/BlackBG.png");
	vidElement.setAttribute("crossorigin", "anonymous");
	vidElement.setAttribute("preload", "auto");
	vidElement.setAttribute("data-setup", "{}");
	vidElement.setAttribute("autoplay", "");
	const srcElement = document.createElement("source");
	srcElement.setAttribute("src", src);
	srcElement.setAttribute("id", "stream-source");
	vidElement.appendChild(srcElement);
	document.getElementById("stream-container").appendChild(vidElement);
});