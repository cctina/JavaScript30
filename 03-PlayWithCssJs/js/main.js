
(function () {
	const control = {
		init: function () {
			view.init();
		}
	};

	const view = {
		init: function () {
			this.render();
		},

		handleValueChange: function (e) {
			const suffix = this.dataset.sizing || '';
			console.log(this.value);

			document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
		},

		render: function () {
			let image = document.querySelector("img");
			let inputs = document.querySelectorAll("input");

			inputs.forEach(function (input) {
				input.addEventListener('change', view.handleValueChange);
				input.addEventListener('mousemove', view.handleValueChange);
			});
		}
	};

	control.init();

})();