// gsap
// 	.timeline()
// 	.to(".loader__logo", {
// 		clipPath: "inset(0 0% 0 0)",
// 		duration: 1,
// 		ease: "power2.inOut"
// 	})
// 	.to(".loader svg path", {
// 		y: 0,
// 		stagger: .1,
// 		duration: 2,
// 		ease: "power2.inOut"
// 	});

const tl = gsap.timeline().to(".loader__logo", {
	clipPath: "inset(0 0% 0 0)",
	duration: 1,
	ease: "power2.inOut"
});
const svgs = document.querySelectorAll(".loader svg");
svgs.forEach((svg, i) => {
	tl.to(
		svg.querySelectorAll("path"),
		{
			y: 0,
			duration: 0.8,
			ease: "power2.out"
		},
		i == 0 ? "-=0.2" : "-=0.6"
	);
});

