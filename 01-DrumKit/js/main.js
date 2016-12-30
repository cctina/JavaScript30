(function () {
	const view = {
		init: function () {
			// this.keycode = document.getElementById('keycode');
			// this.keybutton = document.getElementById('keybutton');
			this.keys = document.querySelectorAll('.key');
			this.keys.forEach( key => key.addEventListener('transitionend', view.removeTransition));

			window.addEventListener('keydown', view.playSound);	
		},

		playSound: function (e) {
			console.log(e);
			const audio = document.querySelector(`audio[data-key='${e.keyCode}']`);
			const key = document.querySelector(`.key[data-key='${e.keyCode}']`);
			if (!audio) return;		// stop the function from running all together

			audio.currentTime = 0;	// when starts to seek media. Initiates a seek operation to the 0-second mark in the media.
			audio.play();
			key.classList.add('playing');
			// key.classList.toggle('playing');
		},

		removeTransition: function (e) {
			if (e.propertyName !== 'transform') return;		// Skip it if it's not transform
			this.classList.remove('playing');
		}
	};

	view.init();
})();

