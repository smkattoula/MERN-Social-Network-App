const express = require("express");
const router = express.Router();

// Route:          GET api/profile
// Description:    Test route
// Access:         Public
router.get("/", (req, res) => {
  res.send("Profile Route");
});

module.exports = router;
