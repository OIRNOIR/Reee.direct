let complete = false;
let playing = false;
let plistenerAdded = false;
let hls = null;
let completeDate = Infinity;
window.addEventListener('click', start);
function start() {
	if (complete) return;
	try {
		document.getElementById("content-container").style.display = "none";
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
	if (completeDate + 1000 > Date.now()) {
		const time = completeDate == Infinity ? 1000 : completeDate - (Date.now() - 1000);
		setTimeout(() => {
			return start();
		}, time);
		return;
	}
	complete = true;
	const stream = document.getElementById("stream-player");
	stream.removeAttribute("autoplay");
	stream.currentTime = 0;
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
		if (stream.currentTime > 0.5) {
			stream.currentTime = 0;
		}
	});
}

function supportsHLS() {
  var video = document.createElement('video');
  return Boolean(video.canPlayType('application/vnd.apple.mpegURL') || video.canPlayType('audio/mpegurl'))
}

let ol = document.getElementById("ol");
var observer = new MutationObserver(() => {
	if (!playing && !plistenerAdded && document.getElementById("stream-player") != undefined) {
		const playListener = document.getElementById("stream-player").addEventListener('play', () => {
			document.getElementById("stream-player").removeEventListener('play', playListener);
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
	let src = "https://assets.reee.direct/stream/master.m3u8";
	if (Math.trunc(Math.random() * 20) == 0) {
		src = "https://assets.reee.direct/stream2/master.m3u8";
	}
	const vidElement = document.createElement("video")
	vidElement.setAttribute("id", "stream-player");
	vidElement.setAttribute("poster", "https://assets.reee.direct/blackbg.png");
	vidElement.setAttribute("crossorigin", "anonymous");
	vidElement.setAttribute("autoplay", "");
	document.getElementById("stream-container").appendChild(vidElement);
	if (supportsHLS() && navigator.userAgent.toLowerCase().includes("iphone")) {
		const srcElement = document.createElement("source");
		srcElement.setAttribute("src", src);
		srcElement.setAttribute("id", "stream-source");
		vidElement.setAttribute("preload", "auto");
		vidElement.appendChild(srcElement);
		completeDate = Date.now();
	} else if (Hls.isSupported()) {
		hls = new Hls();
		hls.attachMedia(vidElement);
		hls.on(Hls.Events.MEDIA_ATTACHED, function () {
      hls.loadSource(src);
			completeDate = Date.now();
    });
	}
});