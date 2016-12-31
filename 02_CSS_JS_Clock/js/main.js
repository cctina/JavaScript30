
(function () {
	const model = {
		degree: {
			hour:90,
			min: 90,
			sec: 90
		}
	};

	const control = {
		init: function () {
			view.init();
			setInterval(control.tick, 1000);
		},

		tick: function () {
			let now = new Date();

			this.hour = now.getHours();
			model.degree.hour = 90 + (this.hour / 24 * 360 * 2);

			this.min = now.getMinutes();
			model.degree.min = 90 + (this.min / 60 * 360);

			this.sec = now.getSeconds();
			model.degree.sec = 90 + (this.sec / 60 * 360);

			// console.log(this.sec + ", " + model.degree.sec);
			view.render();
		},
		
		getDegrees: function () {
			return model.degree;
		}
	};

	const view = {
		init: function () {
			this.hourHand = document.getElementsByClassName('hour-hand')[0];
			this.minHand = document.getElementsByClassName('min-hand')[0];
			this.secHand = document.getElementsByClassName('sec-hand')[0];
			this.render();
		},

		render: function () {
			let degrees = control.getDegrees();
			if (degrees.sec === 444) {
				this.secHand.classList.add('notransition');
			} else if (degrees.sec === 96) {
				this.secHand.classList.remove('notransition');
			}
			this.hourHand.style.transform = `rotate(${degrees.hour}deg)`;
			this.minHand.style.transform = `rotate(${degrees.min}deg)`;
			this.secHand.style.transform = `rotate(${degrees.sec}deg)`;
		}
	};

	control.init();

})();