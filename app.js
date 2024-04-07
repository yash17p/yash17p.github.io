// Create a GSAP timeline with default settings
const tl = gsap.timeline({ defaults: { duration: 0.75, ease: "power3.out" } });

// Animation for hero image scaling and border radius
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
	// Animation for cta-1 element
	.fromTo(`.cta-1`, { x: "100%", opacity: 0 }, { x: 0, opacity: 1 }, "<20%")
	// Animation for cta-3 element
	.fromTo(`.cta-3`, { x: "-100%", opacity: 0 }, { x: 0, opacity: 1 }, "<20%")
	// Animation for cta-2 element
	.fromTo(`.cta-2`, { y: "100%", opacity: 0 }, { y: 0, opacity: 1 }, "<20%")
	// Animation for cta-4 element
	.fromTo(`.cta-4`, { x: "100%", opacity: 0 }, { x: 0, opacity: 1 }, "<20%")
	// Animation for cta-6 element
	.fromTo(`.cta-6`, { x: "-100%", opacity: 0 }, { x: 0, opacity: 1 }, "<20%")
	// Animation for cta-5 element
	.fromTo(`.cta-5`, { y: "100%", opacity: 0 }, { y: 0, opacity: 1 }, "<20%")
	// Animation for cta-btn element
	.fromTo(`.cta-btn`, { y: 20, opacity: 0 }, { y: 0, opacity: 1 }, "<50%");

// Select logo element and split its text content into letters
const logo = document.querySelector(`.logo`);
const letters = logo.textContent.split("");

// Clear the text content of the logo element
logo.textContent = "";

// Iterate through each letter and wrap it with a span element
letters.forEach((letter) => {
	logo.innerHTML += `<span class="letter">${letter}</span>`;
});

// Set display style for each letter span element
gsap.set(`.letter`, { display: `inline-block` });

// Animation for revealing the letters in the logo
gsap.fromTo(
	`.letter`,
	{ y: `100%`, opacity: 0 },
	{ y: 0, opacity: 1, delay: 1.25, stagger: 0.025, ease: "back.out(3)" }
);

// Add event listener for DOMContentLoaded event to fade in pic-claim element
document.addEventListener('DOMContentLoaded', function () {
	setTimeout(function () {
	  document.querySelector('.pic-claim').style.opacity = '1'; // Fade in the pic-claim element
	}, 3000); // Delay the fade-in effect
});

// Add event listener for DOMContentLoaded event to toggle content visibility
document.addEventListener('DOMContentLoaded', function () {
	var initialContent = document.getElementById("opening-content"); // Get opening-content element
	var newContent = document.getElementById("main-content"); // Get main-content element
	var learnMoreBtn = document.getElementById("learn-more-btn"); // Get learn-more-btn element

	// Add click event listener to learn-more-btn element
	learnMoreBtn.addEventListener('click', function () {
		initialContent.style.display = 'none'; // Hide initial content
		newContent.style.display = 'block'; // Show new content
	});
});

// Function to open the resume in a new tab
function openResume() {
	var resumeUrl = 'final.pdf'; // Resume URL
	window.open(resumeUrl, '_blank'); // Open URL in a new tab
}
