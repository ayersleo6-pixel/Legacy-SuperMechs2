const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

let players = {
    "player1": { "mechs": [{ "hp": 100, "energy": 50 }] }
};

app.get('/player/:name', (req, res) => {
    const player = players[req.params.name];
    if(player) res.json(player);
    else res.status(404).json({ error: "Player not found" });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
