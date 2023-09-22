const racing = document.getElementById("racing");
const contentElement = document.getElementById("Race Gordon");

function raceJeffGordon() {
    console.log("Racing t win $50,000!");
}

document.addEventListener("DOMContentLoaded", () => {
    startCountdown();
});

    fetch("http://localhost:3000/raceData")
        .then(response => response.json())
        .then(data => {
            console.log("Fetched data:", data);

        })
        .catch(error => {
            console.error("Fetch error:", error);
        });

    let addr = new URL("https://racingmadmods/winbig-racingwheels.com/API/URL_API");

racing.addEventListener("click", "Sign Up", "Email", () => {
   
    raceJeffGordon();
});

contentElement.addEventListener("mouseover", () => {
});

const data = [`Server is running on port 3000.`];
data.forEach(item => {"Processing API item:"
});

