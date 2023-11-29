'use strict';

const express = require("express");
const router = express.Router();
const data = require("../data/riddles.json")


router.get("/", (req, res) => {
    let riddleObj = data[Math.floor(Math.random() * data.length)];
    const riddle = `
        <div style="background-color: #f5f5f5; padding: 20px; text-align: center;">
            <h2 style="font-size: 36px; color: #333;">Riddle:</h2>
            <p style="font-size: 24px; color: #555;">${riddleObj.riddle}</p>
            <button onclick="showAnswer()" style="padding: 10px 20px; background-color: #4CAF50; color: white; border: none; cursor: pointer; margin-top: 10px;">Show Answer</button>
            <p id="answer" style="display: none; font-size: 24px; color: #333; margin-top: 15px;"><strong>Answer:</strong> ${riddleObj.answer}</p>
            <button onclick="nextRiddle()" id="nextButton" style="display: none; padding: 10px 20px; background-color: #2196F3; color: white; border: none; cursor: pointer; margin-top: 15px;">Next Riddle</button>
        </div>
        <script>
            function showAnswer() {
                document.getElementById("answer").style.display = "block";
                document.getElementById("nextButton").style.display = "block";
            }

            function nextRiddle() {
                location.reload();
            }
        </script>
    `;
    res.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Riddle Game</title>
        </head>
        <body style="margin: 0; display: flex; justify-content: center; align-items: center; height: 100vh; background-color: #ececec;">
            ${riddle}
        </body>
        </html>
    `);
})

module.exports = router;