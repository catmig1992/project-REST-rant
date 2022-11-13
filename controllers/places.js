const router = require("express").Router();

// GET /places
router.get("/", (req, res) => {
  let places = [
    {
      name: "H-Thai-ML",
      city: "Seattle",
      state: "WA",
      cuisines: "Thai, Pan-Asian",
      pic: "/images/curry-shrimp-dish.jpg",
    },
    {
      name: "Coding Cat Cafe",
      city: "Phoenix",
      state: "AZ",
      cuisines: "Coffee, Bakery",
      pic: "/images/mint-chocolate-coffee.jpg",
    },
  ];

  // res.send("GET /places");
  // res.render("places/index");
  res.render("places/index", { places });
});

router.get("/new", (req, res) => {
  res.render("places/new");
});

router.post("/", (req, res) => {
  res.send("POST /places");
});

// router.get("/:id", (req, res) => {
//   res.render("places/:id");
// });

module.exports = router;
