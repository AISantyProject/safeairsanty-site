

// main.js file for handling interactivity and dynamic content on the webpage

document.addEventListener('DOMContentLoaded', () => {
    console.log('Document is ready!');

    // Example: Add a click event to a button
    const button = document.getElementById('myButton');
    if (button) {
        button.addEventListener('click', () => {
            alert('Button was clicked!');
        });
    }
});