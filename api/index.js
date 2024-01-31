const express = require("express");
const app = express();

app.get("/test", (req, res) => {
    res.json(
        "Test Ok"
    )
})

app.listen(4000);