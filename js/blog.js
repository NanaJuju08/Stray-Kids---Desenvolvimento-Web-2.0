const archiveData = {
    "bang-chan": {
        name: "BANG CHAN",
        color: "#e63946",
        image: "assets/images/members/bang-chan.jpg",
        intro: "Leadership mode activated. The system is steady, intense, and ready to move.",
        entry: "SYSTEM ENTRY 01",
        title: "Leader Signal",
        text: "A log about late-night production, quiet pressure, and the kind of focus that keeps the whole system alive.",
        posts: [
            ["Producer Notes", "Studio fragments, sound direction, and the architecture behind the track."],
            ["Leader Energy", "How calm control becomes part of the group's visual identity."],
            ["Night Studio", "A darker archive for late hours, headphones, and glowing screens."]
        ]
    },
    "lee-know": {
        name: "LEE KNOW",
        color: "#8ecae6",
        image: "assets/images/members/lee-know.jpg",
        intro: "Precision mode activated. Every movement becomes sharper.",
        entry: "SYSTEM ENTRY 02",
        title: "Clean Motion",
        text: "A visual archive for sharp choreography, controlled expressions, and details that only appear when you watch twice.",
        posts: [
            ["Dance Line", "Movement notes, angles, timing, and clean stage transitions."],
            ["Stage Details", "Small expressions and gestures that change the whole scene."],
            ["Visual Mood", "Cold light, controlled styling, and quiet intensity."]
        ]
    },
    "changbin": {
        name: "CHANGBIN",
        color: "#b5179e",
        image: "assets/images/members/changbin.jpg",
        intro: "Impact mode activated. Bass, pressure, and confidence are now online.",
        entry: "SYSTEM ENTRY 03",
        title: "Bass Pressure",
        text: "A heavy archive built around rap texture, confidence, speed, and the sound of entering a stage without hesitation.",
        posts: [
            ["Rap Tone", "Fast delivery, sharp attack, and lines that hit with weight."],
            ["Gym Mode", "Power, discipline, and the visual language of strength."],
            ["Power Verse", "Performance moments where the whole track gets heavier."]
        ]
    },
    "hyunjin": {
        name: "HYUNJIN",
        color: "#f72585",
        image: "assets/images/members/hyunjin.jpg",
        intro: "Performance mode activated. The visual field is now cinematic.",
        entry: "SYSTEM ENTRY 04",
        title: "Visual Gravity",
        text: "An editorial archive of movement, styling, atmosphere, and the exact moment performance becomes visual art.",
        posts: [
            ["Dance Film", "A study of lines, flow, and performance that feels filmed."],
            ["Style Board", "Textures, silhouettes, and visual direction."],
            ["Expression Study", "How one look can shift the atmosphere of a scene."]
        ]
    },
    "han": {
        name: "HAN",
        color: "#ff9900",
        image: "assets/images/members/han.jpg",
        intro: "Spark mode activated. Fast thoughts, warm light, and chaos under control.",
        entry: "SYSTEM ENTRY 05",
        title: "Signal Notes",
        text: "A fast, bright archive full of lyric sparks, warm chaos, clever details, and emotional switches.",
        posts: [
            ["Lyric Fragments", "Quick thoughts, memorable lines, and ideas that arrive like sparks."],
            ["Rap Switch", "Speed, expression, and sudden turns in performance energy."],
            ["Vocal Color", "The warmer side of the archive: melody, emotion, and glow."]
        ]
    },
    "felix": {
        name: "FELIX",
        color: "#00b4ff",
        image: "assets/images/members/felix.jpg",
        intro: "Deep light mode activated. The atmosphere turns bright and electric.",
        entry: "SYSTEM ENTRY 06",
        title: "Low Frequency Light",
        text: "A contrast archive: bright visuals, soft warmth, and a voice that drops the whole screen into another register.",
        posts: [
            ["Deep Voice", "Low tone, instant recognition, and the moment the song changes gravity."],
            ["Sunshine File", "Warm visuals, softness, and bright presence."],
            ["Blue Light", "A cool-toned moodboard for glow, contrast, and stage atmosphere."]
        ]
    },
    "seungmin": {
        name: "SEUNGMIN",
        color: "#70e000",
        image: "assets/images/members/seungmin.jpg",
        intro: "Focus mode activated. Clean signal, clear voice, stable energy.",
        entry: "SYSTEM ENTRY 07",
        title: "Vocal Focus",
        text: "A clean archive for vocals, restraint, timing, and the details that make a performance feel stable.",
        posts: [
            ["Vocal Notes", "Tone, breath, clarity, and the shape of each line."],
            ["Soft Focus", "Gentler visuals and the calm center of the system."],
            ["Clean Stage", "Minimal gestures, controlled delivery, and strong presence."]
        ]
    },
    "in": {
        name: "I.N",
        color: "#ffd166",
        image: "assets/images/members/in.jpg",
        intro: "Signal mode activated. Fresh energy is now guiding the system.",
        entry: "SYSTEM ENTRY 08",
        title: "Bright Edge",
        text: "A fresh archive with sharp styling, clear presence, and the kind of energy that keeps evolving.",
        posts: [
            ["Maknae Energy", "Freshness, confidence, and the charm of growth."],
            ["Style Growth", "A changing visual identity with sharper edges."],
            ["Fresh Stage", "Bright tone, clean performance, and evolving presence."]
        ]
    }
};

const params =
new URLSearchParams(window.location.search);

const selectedMember =
params.get("member") || localStorage.getItem("selectedGuide") || "han";

const archive =
archiveData[selectedMember] || archiveData.han;

document.body.style.setProperty("--member-color", archive.color);

document.querySelector(".archive-name").textContent = archive.name;
document.querySelector(".archive-intro").textContent = archive.intro;
document.querySelector(".archive-img").src = archive.image;
document.querySelector(".archive-img").alt = archive.name;
document.querySelector(".entry-code").textContent = archive.entry;
document.querySelector(".entry-title").textContent = archive.title;
document.querySelector(".entry-text").textContent = archive.text;

const postTitles =
document.querySelectorAll(".archive-grid h3");

const postTexts =
document.querySelectorAll(".archive-grid p");

archive.posts.forEach((post, index) => {

    postTitles[index].textContent = post[0];
    postTexts[index].textContent = post[1];

});

function createParticles(){

    const particlesContainer =
    document.querySelector(".particles");

    for(let index = 0; index < 46; index++){

        const particle =
        document.createElement("span");

        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.animationDelay = `${Math.random() * 6}s`;
        particle.style.animationDuration = `${6 + Math.random() * 8}s`;

        particlesContainer.appendChild(particle);

    }

}

document.addEventListener("mousemove", (event) => {

    document.body.style.setProperty("--cursor-x", `${event.clientX}px`);
    document.body.style.setProperty("--cursor-y", `${event.clientY}px`);

});

createParticles();
