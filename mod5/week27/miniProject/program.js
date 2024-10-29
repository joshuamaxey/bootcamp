import { Game } from './game.js';

window.addEventListener('DOMContentLoaded', () => {
    const game = new Game();
    game.start();
})

// Make sure that you are in the root directory of your mini-project
// Now set up an HTTP server with 'python3 -m http.server' to serve the index.html file to the browser
// Once the server has started, navigate to localhost at the correct port (8000 by default)
