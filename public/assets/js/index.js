const textSplash = document.querySelector('.splash-text .letters');
textSplash.innerHTML = textSplash.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline()
		.add({
			targets: '.splash',
			width: '100vw',
			height: '100vh',
			duration: 100,
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
			duration: 1000,
			offset: '-=600',
			delay: (el, i) => 50 + 105 * i
		})
		.add({
			targets: '.splash-logo',
			opacity: 1,
			duration: 1000,
			easing: 'easeOutExpo',
		})
		.add({
			targets: '.splash',
			opacity: 0,
			duration: 1000,
			easing: 'easeInOutQuad',
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