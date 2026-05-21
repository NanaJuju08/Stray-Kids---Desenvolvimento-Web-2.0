//Get elements
const introScreen = document.getElementById('intro-screen');
const memberSelector = document.getElementById('member-selector');
const enterBtn = document.getElementById('enter-btn');
const cards = document.querySelectorAll('.member-card');
const memberDimension = document.getElementById('member-dimension');
const memberName = document.getElementById('member-name');
const memberQuote = document.getElementById('member-quote');
const backBtn = document.getElementById('back-btn');

cards.forEach(card => {
    card.addEventListener('click', () => {

        //han
        if(card.classList.contains('han')){

            document.body.style.background =
            "radial-gradient(circle at top, #3b2100, #050510 60%)";
        }

        //felix
        if(card.classList.contains("felix")){

            document.body.style.background =
            "radial-gradient(circle at top, #001d2a, #050510 60%)";
        }


        // bangchan
        if(card.classList.contains("bangchan")){

            document.body.style.background =
            "radial-gradient(circle at top, #2a000d, #050510 60%)";
        }
    });

    card.addEventListener("mouseleave", () => {
        document.body.style.background =
        "radial-gradient(circle at top, #16162b, #050510 60%)";
    });
});

// 3d effects
cards.forEach(card => {

    card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = -(y - centerY) / 10;
        const rotateY = (x - centerX) / 10;

        card.style.transform =
        `perspective(1000px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        translateY(-10px)`;

    });


    // reset
    card.addEventListener("mouseleave", () => {

        card.style.transform =
        "perspective(1000px) rotateX(0) rotateY(0)";

    });

});

// Show member dimension
cards.forEach(card => {

    card.addEventListener("click", () => {

        // hide selector
        memberSelector.style.display = "none";

        // show dimension
        memberDimension.style.display = "flex";


        // han
        if(card.classList.contains("han")){

            memberName.textContent = "HAN";

            memberQuote.textContent =
            "You make Stray Kids stay.";

            memberDimension.style.background =
            "radial-gradient(circle at center, #2b1600, #050510 70%)";
        }


        // felix
        if(card.classList.contains("felix")){

            memberName.textContent = "FELIX";

            memberQuote.textContent =
            "Happiness is everywhere.";

            memberDimension.style.background =
            "radial-gradient(circle at center, #001d2a, #050510 70%)";
        }


        // bangchan
        if(card.classList.contains("bangchan")){

            memberName.textContent = "BANGCHAN";

            memberQuote.textContent =
            "Never give up.";

            memberDimension.style.background =
            "radial-gradient(circle at center, #2a000d, #050510 70%)";
        }

    });

});

//Hide members screen
memberSelector.style.display = 'none';


//Btn events
enterBtn.addEventListener('click', () => {
    //Hide intro screen
    introScreen.style.display = 'none';
    

    memberSelector.style.display = 'flex';
});