window.lastTimeRecieved = 0;
window.lastData = -1;

/** ================ Handlers == */
function nativeDataUpdateHandler(data) {
	if(data > 1024) return;
	
	var current_time = new Date().getTime(),
			interval = current_time - window.lastTimeRecieved;

	if(window.lastTimeRecieved == 0) {
		document.getElementById('intervalValue').textContent = -1;
	} else {
		document.getElementById('intervalValue').textContent = interval;
	}
	window.lastTimeRecieved = current_time;

	if(data != lastData) {
		lastData = data;
		document.getElementById('airqValue').textContent = parseInt(data);
	}
}
