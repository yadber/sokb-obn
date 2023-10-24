const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("Let's build a CRUD API!");
});
router.get("/home", (req, res) => {
    res.send("HOME");
  });
module.exports = router;