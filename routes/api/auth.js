const express = require("express");
const router = express.Router();

// Route:          GET api/auth
// Description:    Test route
// Access:         Public
router.get("/", (req, res) => {
  res.send("Auth Route");
});

module.exports = router;
