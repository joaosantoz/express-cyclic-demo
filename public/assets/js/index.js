const textWrapper = document.querySelector('.hello .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

const textSplash = document.querySelector('.splash-text .letters');
textSplash.innerHTML = textSplash.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline()
		.add({
			targets: '.splash',
			width: '100vw',
			height: '100vh',
			duration: 500,
			borderRadius: 0,
			easing: 'easeInOutQuad',
		})
		.add({
			targets: '.splash-text .letter',
			opacity: [0, 1],
			translateX: [40, 0],
			translateZ: 0,
			scaleX: [0.3, 1],
			easing: "easeOutExpo",
			duration: 800,
			offset: '-=600',
			delay: (el, i) => 150 + 25 * i
		})
		.add({
			targets: '.splash-logo',
			left: '50%',
			easing: 'easeOutElastic(1, .8)',
		})
		.add({
			targets: '.splash-text',
			opacity: 0,
			duration: 1000,
			easing: "easeOutExpo",
			delay: 500
		})
		.add({
			targets: '.splash-logo',
			left: '100%',
			easing: 'easeOutElastic(1, .8)',
		})
		.add({
			targets: '.splash',
			width: 0,
			height: 0,
			duration: 500,
			borderRadius: 0,
			easing: 'easeInOutQuad',
		})


anime.timeline({loop: true, direction: 'alternate'})
		.add({
			targets: '.hello .letter',
			translateY: ["1.1em", 0],
			translateZ: 0,
			duration: 2000,
			delay: (el, i) => 300 * i,
			endDelay: 300,
		})

anime({
	targets: '.globe',
	duration: 5000,
	translateX: 300,
	translateY: -300,
	loop: true,
	direction: 'alternate',
	easing: 'spring(1, 0, 0, 0)',
	rotate: '0.1turn',
});

anime({
	targets: '.powered .cyclic',
	easing: 'easeInOutQuad',
	direction: 'alternate',
	loop: true,
	color: '#fff',
});