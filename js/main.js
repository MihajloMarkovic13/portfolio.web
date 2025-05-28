window.addEventListener("load", (event) => {
    document.getElementById('year').textContent = new Date().getFullYear();
});

function counterUp() {
    document.querySelectorAll('.count').forEach(element => {
        let value = element.getAttribute('data-value');
        for (let i = 0; i <= value; i++) {
            setTimeout(() => {
                element.querySelector('span').textContent = i;
            }, 100 * i);
        }
    });
}

function animateProgressBar(toggle) {
    let animatebar = document.querySelectorAll('.progress-bar');
    animatebar.forEach((item,key) =>{
        if (toggle == true) {
            item.classList.add('animateProgressBar');
        } else {
            item.classList.remove('animateProgressBar');
        }
    });
}

const observer = new IntersectionObserver ((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('show');
                if (entry.target.id == "about-me") {
					setTimeout(() => {
						counterUp();
						animateProgressBar(true);
					}, 500);
                }
            }, 300);
        } else {
			if (entry.target.id == "about-me") {
				entry.target.classList.remove('show');
				animateProgressBar(false);
			}
        }
    });
});


const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));
