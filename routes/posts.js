const router = require("express").Router();
const verify = require("../middlewares/privateRoute");

router.get("/", verify, (req, res) => {
  res.json({
    posts: {
      title: "my private post",
      description: "YOU SHOULDN'T BE LOOKING AT THIS",
    },
  });
});

module.exports = router;
