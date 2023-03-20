const express = require("express");
const router = express.Router();
const findById = require("../services/userService");

// middleware has to be in the beginning, in the bottom it wont work
// router.use(helloMiddleware)

router.get("/users", (req, res) => {
    res.send("Users are here")
});
router.post("/users", (req, res) => {
    console.log(req.body);
    res.send("Created user")
});
router.get("/users/:userid", (req, res) => {
    res.send(findById(req.params.userid))
});

module.exports = router;

// to create routs related to other objects, another controller should be created