const tl = gsap.timeline({ defaults: { duration: 0.75, ease: "power3.out" } });

tl.fromTo(
	`.hero-img`,
	{ scale: 1.3, borderRadius: 0 },
	{
		scale: 1,
		borderRadius: `0.6rem`,
		delay: 0.3,
		duration: 2.5,
		ease: "elastic.out(1.5, 1)",
	}
)
	.fromTo(`.cta-1`, { x: "100%", opacity: 0 }, { x: 0, opacity: 1 }, "<20%")
	.fromTo(`.cta-3`, { x: "-100%", opacity: 0 }, { x: 0, opacity: 1 }, "<20%")
	.fromTo(`.cta-2`, { y: "100%", opacity: 0 }, { y: 0, opacity: 1 }, "<20%")
	.fromTo(`.cta-4`, { x: "100%", opacity: 0 }, { x: 0, opacity: 1 }, "<20%")
	.fromTo(`.cta-6`, { x: "-100%", opacity: 0 }, { x: 0, opacity: 1 }, "<20%")
	.fromTo(`.cta-5`, { y: "100%", opacity: 0 }, { y: 0, opacity: 1 }, "<20%")
	.fromTo(`.cta-btn`, { y: 20, opacity: 0 }, { y: 0, opacity: 1 }, "<50%");

const logo = document.querySelector(`.logo`);
const letters = logo.textContent.split("");

logo.textContent = "";

letters.forEach((letter) => {
	logo.innerHTML += `<span class="letter">${letter}</span>`;
});

gsap.set(`.letter`, { display: `inline-block` });

gsap.fromTo(
	`.letter`,
	{ y: `100%`, opacity: 0 },
	{ y: 0, opacity: 1, delay: 1.25, stagger: 0.025, ease: "back.out(3)" }
);

document.addEventListener('DOMContentLoaded', function () {
	setTimeout(function () {
	  document.querySelector('.pic-claim').style.opacity = '1';
	}, 3000);
});

document.addEventListener('DOMContentLoaded', function () {
	var initialContent = document.getElementById("opening-content");
	var newContent = document.getElementById("main-content");
	var learnMoreBtn = document.getElementById("learn-more-btn");

	learnMoreBtn.addEventListener('click', function () {
		initialContent.style.display = 'none';
		newContent.style.display = 'block';
	});
});

function openResume() {
	var resumeUrl = 'final.pdf';
	window.open(resumeUrl, '_blank');
}
  
  
