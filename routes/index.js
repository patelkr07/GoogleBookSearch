const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
const axios = require("axios");

router.use("/api", apiRoutes);

router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"))
});

router.get("/books", (req, res) => {
    axios
    .get("https://www.googleapis.com/books/v1/volumes?q=", { params: req.query })
    .then(({ data: { results } }) => res.json(results))
    .catch(err => res.status(422).json(err));
})

module.exports = router;