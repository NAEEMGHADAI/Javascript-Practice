const worker = new Worker("worker.js");
worker.postMessage("Helloooo");

addEventListener("message");
