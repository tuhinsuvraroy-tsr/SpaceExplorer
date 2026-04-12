new# SpaceExplorer 🌌

A dynamic, interactive web application that allows users to explore the physical characteristics of celestial bodies in our solar system. The app fetches real-time astronomical data and features a built-in physics calculator to determine how much a specific payload would weigh on different planets and moons.

## 🚀 Features

**Real-time Astronomical Data:** Fetches live data for all major planets and notable moons (Earth's Moon, Titan, Europa) using an external API.
**Dynamic Stat Cards:** Displays key physical metrics for the selected celestial body:
    * Surface Gravity (m/s²)
    * Escape Velocity (m/s)
    * Mean Radius (km)
    * Density (g/cm³)
**Rocket Payload Calculator:** Calculates the exact weight (in Newtons) of a given mass on the selected celestial body. 
**Modern UI/UX:** Features a dark, space-inspired theme with glassmorphism panels, neon text effects, and a responsive layout that works on both desktop and mobile devices.

## 🛠️ Technologies Used

This project is built purely with standard web technologies, requiring no external frameworks or build tools:

**HTML5:** Semantic structure and accessibility.
**CSS3:** Custom variables, CSS Grid/Flexbox, glassmorphism backdrop filters, and custom animations.
**Vanilla JavaScript (ES6+):** Asynchronous API fetching (`fetch`, `async/await`), DOM manipulation, and real-time mathematical calculations.

## ⚙️ How It Works (The Physics)

The "Rocket Payload Calculator" utilizes Newton's law of universal gravitation, simplified for surface weight calculations:

**Weight = Mass × Surface Gravity**
*(W = m * g)*

**Mass (m):** The payload mass inputted by the user (in kilograms).
**Gravity (g):** The specific surface gravity of the selected celestial body (in m/s²), fetched directly from the API.
**Weight (W):** The resulting force outputted by the calculator (in Newtons).

## 💻 Running the Project Locally

Because this project uses vanilla web technologies, setup is instantaneous.

1. Clone or download this repository to your local machine.
2. Ensure you have all three files in the same directory: `index.html`, `style.css`, and `script.js`.
3. Simply double-click the `index.html` file to open it in your default web browser.


## 📡 API Reference

This project is powered by The Solar System OpenData API. It retrieves the `rest/bodies/` endpoint to populate the dropdown and data cards dynamically.

Website Link - https://solarsystemexplorerbynewton.netlify.app/