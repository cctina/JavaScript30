
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
			let hourDeg;
			let minDeg;
			let secDeg;	
			let hourDivider = 12;

			this.hour = now.getHours();
			this.min = now.getMinutes();
			this.sec = now.getSeconds();
			if (this.hour > 12) {
				hourDivider *= 2; 
			}	
			hourDeg = this.hour / hourDivider * 360;
			minDeg = this.min / 60 * 360;
			secDeg = this.sec / 60 * 360;	

			model.degree.hour = 90 + hourDeg + minDeg / hourDivider;
			model.degree.min = 90 + minDeg + secDeg / 60;
			model.degree.sec = 90 + secDeg;

			// console.log(this.hour + ", " + model.degree.hour + " deg = 90 + " + hourDeg + " + " + (minDeg / hourDivider) );
			// console.log(this.min + ", " + model.degree.min + " deg = 90 + " + minDeg + " + " + (secDeg / 60) );
			// console.log(this.sec + ", " + model.degree.sec + " deg = 90 + " + secDeg );
			view.render();
		},
		
		getDegrees: function () {
			return model.degree;
		}
	};

	const view = {
		init: function () {
			this.stopDegree = 444;
			this.restartDegree = 96;
			this.hourHand = document.getElementsByClassName('hour-hand')[0];
			this.minHand = document.getElementsByClassName('min-hand')[0];
			this.secHand = document.getElementsByClassName('sec-hand')[0];
			this.render();
		},

		handleNotrasition: function (hour, min, sec) {
			if (sec === this.stopDegree) {
				this.secHand.classList.add('notransition');
				if (hour === this.stopDegree) 
					this.hourHand.classList.add('notransition');
				if (min === this.stopDegree) 
					this.minHand.classList.add('notransition');
				
			} else if (sec === this.restartDegree) {
				this.secHand.classList.remove('notransition');
				if (hour === this.restartDegree) 
					this.hourHand.classList.remove('notransition');
				if (min === this.restartDegree) 
					this.minHand.classList.remove('notransition');
			}
		},

		render: function () {
			let degrees = control.getDegrees();
			this.handleNotrasition(degrees.hour, degrees.min, degrees.sec);
			
			this.hourHand.style.transform = `rotate(${degrees.hour}deg)`;
			this.minHand.style.transform = `rotate(${degrees.min}deg)`;
			this.secHand.style.transform = `rotate(${degrees.sec}deg)`;
		}
	};

	control.init();

})();