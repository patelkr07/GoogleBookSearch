const router = require("express").Router();
const booksController = require("../../controllers/booksController")
const axios = require("axios");

router.route("/")
    .get(booksController.findAll)
    .post(booksController.create)

    router.get("/books", (req, res) => {
        axios
        .get("https://www.googleapis.com/books/v1/volumes?q=", { params: req.query })
        .then(({ data: { results } }) => res.json(results))
        .catch(err => res.status(422).json(err));
    })


router
    .route("/:id")
    .delete(booksController.remove)

module.exports = router;


