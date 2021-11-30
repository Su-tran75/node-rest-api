const router = require("express").Router();

//* check in the terminal if it is well connected 
router.get("/", (req, res) => {
  console.log("posts page");
});

module.exports = router;
