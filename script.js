/*
=======================================
📘 JavaScript & Web APIs Lab
All tasks in one file (script.js)
=======================================
*/
// Ensure DOM is ready before touching elements
document.addEventListener("DOMContentLoaded", function () {
/*  
=======================================
TODO1: Welcome Board
---------------------------------------
When the page loads, display a welcome message 
inside the <p> element with id="t1-msg".

✅ Task:
- Select the element with id "t1-msg".
- Change its text to "Hello, World!".

💡 Hint:
document.getElementById("t1-msg").innerHTML = "Hello, World!";
*/
    const el = document.getElementById("t1-msg");
    el.textContent = "Hello, World!";

/*  
=======================================
TODO2: Interaction Corner
---------------------------------------
There is a button with id="t2-btn".
When the button is clicked, change the text inside 
the <p> with id="t2-status" to:
    "You clicked the button!"

✅ Task:
- Get the button element.
- Add a click event listener.
- Inside the event, change the text of the status paragraph.

💡 Hint:
button.addEventListener("click", function () {
    // change text here
});
*/
    const button = document.getElementById("t2-btn");
    button.addEventListener('click', function () {
        const text = document.getElementById("t2-status");
        text.textContent = "You clicked the button!";
    })


/*  
=======================================
TODO3: Inspiring Quote Board
---------------------------------------
Use the Quotable API to display a random quote.

🌍 API Link:
https://dummyjson.com/quotes/random

✅ Task:
- When the button with id="t3-loadQuote" is clicked:
    - Fetch a random quote from the API.
    - Display the quote text inside the <p> with id="t3-quote".
    - Display the author inside the <p> with id="t3-author".

💡 Hint:
The API returns JSON like:
{
  "content": "Do not watch the clock. Do what it does. Keep going.",
  "author": "Sam Levenson"
}

Use:
data.content   // the quote text
data.author    // the author
*/
 const btn2 = document.getElementById("t3-loadQuote");
btn2.addEventListener("click", function () {
    fetch("https://dummyjson.com/quotes/random")
        .then(function (response) {
            if (!response.ok) {                 // not 2xx → treat as an error
                throw new Error("HTTP " + response.status);
            }
            return response.json();             // turn response body into JS object
        })
        .then(function (data) {
            // use the JSON data here
            const quote = document.getElementById('t3-quote');
            const author = document.getElementById('t3-author');
            quote.textContent = data.quote;
            author.textContent = data.author;
        })
        .catch(function (err) {
            console.log(err);
        });
})
/*  
=======================================
TODO4: Dammam Weather Now
---------------------------------------
Use the OpenWeatherMap API to display live weather data.

🌍 API Link:
https://api.openweathermap.org/data/2.5/weather?q=Dammam&appid=API_KEY=metric

⚠️ Replace YOUR_API_KEY with your actual API key from:
https://openweathermap.org/api

✅ Task:
- When the button with id="t4-loadWx" is clicked:
    - Fetch current weather data for Dammam.
    - Show temperature in the element with id="t4-temp".
    - Show humidity in the element with id="t4-hum".
    - Show wind speed in the element with id="t4-wind".

💡 Hint:
data.main.temp      → temperature (°C)
data.main.humidity  → humidity (%)
data.wind.speed     → wind speed (m/s)
*/
    const btn3 = document.getElementById("t4-loadWx");
    btn3.addEventListener("click", function () {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=Dammam&appid=d51f2f00c3b137ccfd135bd8f9dd50aa&units=metric")
            .then(function (response) {
                if (!response.ok) {                 // not 2xx → treat as an error
                    throw new Error("HTTP " + response.status);
                }
                return response.json();             // turn response body into JS object
            })
            .then(function (data) {
                // use the JSON data here
                const temp = document.getElementById('t4-temp');
                const humidity = document.getElementById('t4-hum');
                const wind = document.getElementById('t4-wind');
                temp.textContent = data.main.temp + " C";
                humidity.textContent = data.main.humidity + "%";
                wind.textContent = data.wind.speed + " m/s";
            })
            .catch(function (err) {
                console.log(err);
            });
    })
});