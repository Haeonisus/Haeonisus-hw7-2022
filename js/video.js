var video = document.querySelector('#player1');

// Page load - initialize the video element and turn off autoplay and looping
window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video.autoplay= false;
	console.log("Auto play is set to " + video.autoplay);
	video.loop= false;
	console.log("Loop is set to " + video.loop);
});

// Play Button - Play the video and update the volume information
document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	document.getElementById('volume').innerHTML = document.getElementById('slider').value + '%';
	video.play();
});

// Pause Button - Pause the Video
document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

// Slow Down - Slow the current video speed by 10% each time the button is clikced and log the new speed to the console
document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow down the video");
	video.playbackRate *= 0.9;
	console.log("The speed of the video is: " +  video.playbackRate);
});

// Speed Up - Increase the current video speed by an amount proportional to the slow down and log the new speed to the console
document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed up the video");
	video.playbackRate /= 0.9;
	console.log("The speed of the video is: " +  video.playbackRate);
});

// Skip Ahead - Advance the current video by 10 seconds. If length has been exceeded go back to the start of the video. Log the current location of video.
document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip ahead the video");
	video.currentTime += 10;
	if (video.currentTime >= video.duration) {
		video.currentTime = 0;
	}
	console.log("The current time is " + video.currentTime);
});

// Mute - Mute/unmute the video and update the text in the button
document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted == true) {
		video.muted = false;
		document.querySelector('#mute').innerHTML = 'Mute';
		console.log('Unmute')
	} else {
		video.muted = true;
		document.querySelector('#mute').innerHTML = 'Unmute';
		console.log('Mute')
	}
});

// Volume Slider - Change the volume based on the slider and update the volume information
document.querySelector("#slider").addEventListener("click", function() {
	console.log("The current value is " + video.volume);
	video.volume = this.value / 100;
	console.log("The current value is " + video.volume);
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
	console.log(document.querySelector('span'));
});

// Styled - Utilize the existing oldSchool class on the video element
document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add('oldSchool');
});

// Original - Remove the oldSchool class from the video
document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove('oldSchool');
});