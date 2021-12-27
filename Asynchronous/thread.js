// const worker = new Worker("worker.js");
// worker.postMessage("Helloooo");

// addEventListener("message");

const { spawn } = require("child_process");
spawn("git", ["stuff"]);
