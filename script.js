// script.js

// Data for locations
const locations = {
    location1: {
        imageSrc: "Stop1.jpeg",
        textContent: "Publius Ovidius Naso was born on March 20, 43 BCE. He was born in present-day Sulmona, Italy. His family was well-off and respected. When he was young, he set off to Rome to learn rhetoric."
    },
    location2: {
        imageSrc: "Stop2.jpeg",
        textContent: "Ovid’s father wanted him to take law and supported him in taking rhetoric classes for that reason. When his brother died at a young age, Ovid swore off the law and only served on minor courts, much to his father’s disapproval. Ovid resigned around 25 BCE to pursue poetry further."
    },
    location3: {
        imageSrc: "Stop3.jpeg",
        textContent: "Early in his career, he published the Amores, five love books written in elegiac meter. They express his joys and frustrations with love. Some of his first works followed the patterns of love and pleasure."
    },
    location4: {
        imageSrc: "Stop4.jpeg",
        textContent: "After beginning to work on more significant works, such as Metamorphoses, Ovid was dealt a crushing blow. In 8 CE, Augustus banished him to an island on the black sea. His reasons are unknown, and Ovid only says it was an error, not a crime. The most probable reason is that he unknowingly committed adultery with Augustus’s daughter. Here he wrote Tristia and Epistulae ex Ponto."
    },
    location5: {
        imageSrc: "Stop5.jpeg",
        textContent: "Ovid finished Metamorphoses and Fasti. Fasti is broken into 12 books, one for each month, that discuss Roman holidays and flatter the imperial family. Metamorphoses is a long poem that totals nearly 12,000 lines in 15 books, all following a theme of change within them. This becomes Ovid’s most famous work. His interpretation makes the gods more human as he further explores human emotion."
    },
    location6: {
        imageSrc: "Stop6.jpeg",
        textContent: "Ovid died in 17 or 18 AD. He died in exile because neither Augustus nor his successor willed him to return. It is believed that some of his works, such as Fasti, were published posthumously."
    },
    location7: {
        imageSrc: "Stop7.jpeg",
        textContent: "Ovid’s popularity persisted much past his death. He was praised in schools and was argued to be more popular than Vergil at some point. He made significant surges in medieval and Renaissance literature, when praise for the classics existed. He is still studied in schools today."
    },
};
function drawLines() {
    const canvas = document.getElementById("mapCanvas");
    const container = document.querySelector(".map-container");
    const pins = document.querySelectorAll(".pin");

    // Set canvas dimensions to match the container
    canvas.width = container.offsetWidth;
    canvas.height = container.offsetHeight;

    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear previous drawings
    ctx.strokeStyle = "black"; // Line color
    ctx.lineWidth = 16; // Line thickness

    // Get positions of all pins
    const pinPositions = Array.from(pins).map(pin => {
        const rect = pin.getBoundingClientRect();
        return {
            x: rect.left + rect.width / 2 - container.offsetLeft,
            y: rect.top + rect.height / 2 - container.offsetTop
        };
    });

    // Draw lines between consecutive pins
    ctx.beginPath();
    for (let i = 0; i < pinPositions.length - 1; i++) {
        const startPin = pinPositions[i];
        const endPin = pinPositions[i + 1];
        //draw lines between the pins 
        ctx.moveTo(startPin.x, startPin.y+30);
        ctx.lineTo(endPin.x, endPin.y+30);
        ctx.stroke();
         
        
    }
    ctx.stroke();
}
//add title textbox 50px above every pin that contain a string from an array in white with black outlines

drawLines(); // Initial draw

// Open Modal
function openModal(event, locationId) {
    const modal = document.getElementById("modal");
    
    // Set content dynamically
    const modalImage = document.getElementById("modalImage");
    const modalText = document.getElementById("modalText");
    
    modalImage.src = locations[locationId].imageSrc;
    modalText.textContent = locations[locationId].textContent;

    // Position modal near the clicked pin
    const pinRect = event.target.getBoundingClientRect();
    
    modal.style.top = `${pinRect.top + window.scrollY}px`;
    modal.style.left = `${pinRect.left + window.scrollX}px`;
    
    // Display the modal
    modal.style.display = "block";
}

// Close Modal
function closeModal() {
    const modal = document.getElementById("modal");
    
    modal.style.display = "none";
}

