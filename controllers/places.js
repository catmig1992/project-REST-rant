const router = require("express").Router();
const db = require("../models");

// // GET INDEX ROUTE /places
router.get("/", (req, res) => {
  db.Place.find()
    .then((places) => {
      res.render("places/index", { places });
    })
    .catch((err) => {
      console.log(err);
      res.render("error404");
    });
});

//CREATE
router.post("/", (req, res) => {
  db.Place.create(req.body)
    .then(() => {
      res.redirect("/places");
    })
    .catch((err) => {
      console.log("err", err);
      res.render("error404");
    });
});

//NEW
router.get("/new", (req, res) => {
  res.render("places/new");
});

// SHOW
router.get("/:id", (req, res) => {
  res.send("GET /places/:id stub");
});

//UPDATE
router.put("/:id", (req, res) => {
  res.send("PUT /places/:id stub");
});

//DELETE
router.delete("/:id", (req, res) => {
  res.send("DELETE /places/:id stub");
});

//EDIT
router.get("/:id/edit", (req, res) => {
  res.send("GET edit form stub");
});

router.post("/:id/rant", (req, res) => {
  res.send("GET /places/:id/rant stub");
});

router.delete("/:id/rant/:rantId", (req, res) => {
  res.send("GET /places/:id/rant/:rantId stub");
});

module.exports = router;

// ..x.. const router = require("express").Router();
// ..x.. const places = require("../models/places.js");

// ..x.. // GET /places
// ..x.. router.get("/", (req, res) => {
// ..x..  res.render("places/index", { places });
// ..x.. });

// //NEW
// router.get("/new", (req, res) => {
//   res.render("places/new");
// });

// //EDIT
// router.get("/:id/edit", (req, res) => {
//   let id = Number(req.params.id);
//   if (isNaN(id)) {
//     res.render("error404");
//   } else if (!places[id]) {
//     res.render("error404");
//   } else {
//     res.render("places/edit", { place: places[id], id });
//   }
// });

// // SHOW
// router.get("/:id", (req, res) => {
//   let id = Number(req.params.id);
//   if (isNaN(id)) {
//     res.render("error404");
//   } else if (!places[id]) {
//     res.render("error404");
//   } else {
//     res.render("places/show", { place: places[id], id });
//   }
// });

// ..x.. //CREATE
// ..x.. router.post("/", (req, res) => {
//   if (!req.body.pic) {
//     // Default image if one is not provided
//     req.body.pic = "http://placekitten.com/400/400";
//   }
//   if (!req.body.city) {
//     req.body.city = "Anytown";
//   }
//   if (!req.body.state) {
//     req.body.state = "USA";
//   }
// ..x..  places.push(req.body);
// ..x..  res.redirect("/places");
// ..x.. });

// //UPDATE
// router.put("/:id", (req, res) => {
//   let id = Number(req.params.id);
//   if (isNaN(id)) {
//     res.render("error404");
//   } else if (!places[id]) {
//     res.render("error404");
//   } else {
//     // Dig into req.body and make sure data is valid
//     if (!req.body.pic) {
//       // Default image if one is not provided
//       req.body.pic = "http://placekitten.com/400/400";
//     }
//     if (!req.body.city) {
//       req.body.city = "Anytown";
//     }
//     if (!req.body.state) {
//       req.body.state = "USA";
//     }

//     // Save the new data into places[id]
//     places[id] = req.body;
//     res.redirect(`/places/${id}`);
//   }
// });

// router.post("/:id", (req, res) => {
//   let id = Number(req.params.id);
//   res.redirect(`/places/${id}`);
// });

// //DELETE
// router.delete("/:id", (req, res) => {
//   let id = Number(req.params.id);
//   if (isNaN(id)) {
//     res.render("error404");
//   } else if (!places[id]) {
//     res.render("error404");
//   } else {
//     places.splice(id, 1);
//     res.redirect("/places");
//   }
// });

// module.exports = router;
