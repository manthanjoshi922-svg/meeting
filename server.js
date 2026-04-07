const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.static("public"));

// Dummy AI logic (replace with OpenAI later)
app.post("/summarize", (req, res) => {
    const text = req.body.text;

    const summary = text.substring(0, 100) + "...";
    const actions = "• Follow up with team\n• Send report\n• Schedule next meeting";
    const sentiment = "Positive";

    res.json({
        summary,
        actions,
        sentiment
    });
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));