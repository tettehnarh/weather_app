# Weather App

This repository contains two projects: one implemented using HTML, CSS, and JavaScript, and the other utilizing the React.js framework. The Weather App provides users with real-time weather information for various locations, making it easy to stay up-to-date with current weather conditions.

To get the current weather data obtain an API key from <a href="https://www.weatherapi.com/" target="_blank">WeatherAPI</a>

## HTML, CSS, and JavaScript Project

The HTML, CSS, and JavaScript project is a straightforward implementation of the CloudWeather App. It consists of static web pages styled using CSS and incorporates JavaScript to fetch weather data from a weather API and display it on the user interface.

In the JavaScript file, replace the api key and base url placeholder obtained from signing up on <a href="https://www.weatherapi.com/" target="_blank">WeatherAPI</a>

To run the HTML, CSS, and JavaScript project, simply open the index.html file in your preferred web browser.

## React.js Project

The React.js project is an enhanced version of the Weather App, leveraging the power and flexibility of the React.js framework. It provides a more dynamic and interactive user experience by utilizing React components and state management.

In the App.js file, replace the api key and base url placeholder obtained from signing up on <a href="https://www.weatherapi.com/" target="_blank">WeatherAPI</a>

To run the React.js project, follow these steps:

1. Ensure you have Node.js installed on your system. If not, you can download it from the official <a href="https://nodejs.org" target="_blank">Node JS</a> website.
2. Clone this repository to your local machine using the following command:

```bash
git clone https://github.com/tettehnarh/weather_app.git
```

3. Navigate to the React.js project directory

```bash
cd weather-app/web_reactjs
```

4. Install the project dependencies by running:

```bash
npm install
```

5. Start the development server:

```bash
npm start
```

## Challenges

### Weather Icon Management

Manually loading weather icons and ensuring that each weather condition has a corresponding asset image can be time-consuming. Handling cases where there is no corresponding image for a particular weather condition and preventing broken images requires additional logic and error handling.

### Responsive Design

Designing the app to be responsive across various devices and screen sizes can be challenging, as it requires careful consideration of layout, breakpoints, and CSS media queries to ensure a consistent user experience.

## Acknowledgements

The Weather App is built based on the tutorial by Brad Traversy as part of the Udemy course "50 Projects In 50 Days - HTML, CSS & JavaScript". My sincere gratitude to Brad Traversy for his valuable teachings and contributions to the development community.
