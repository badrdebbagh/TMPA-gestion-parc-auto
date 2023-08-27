//CREATE SERVER
const express = require("express");
const app = express();
app.use(express.json());

const cors = require("cors");
app.use(cors());
require("dotenv").config();

const passport = require("passport");
//CONNECT TO DB
const mongoose = require("mongoose");
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Data base Connected"));

//IMPORT USER MODEL
const UserModel = require("./models/Users");
const router = require("./Routes/UserRoute");
const defaultAdmine = require("./controllers/UserController");
app.use("/api", router);
defaultAdmine.createAdmin();

//vehicules columns filter
const router10 = require("./Routes/UserRoute");
const { getSelectedColumns } = require("./controllers/UserController");
const authMiddleware = require("./middlewares/authMiddleware");
app.use("/api", router10);
app.get("/api/users/selected-columns", authMiddleware, async (req, res) => {
  console.log("make api");
  try {
    const selectedColumns = await getSelectedColumns();
    res.json(selectedColumns);
  } catch (error) {
    console.error("Error fetching selected columns:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

//collaborateur columns filter
const router11 = require("./Routes/UserRoute");
const { getCollabSelectedColumns } = require("./controllers/UserController");

app.use("/api", router11);
app.get(
  "/api/users/collab-selected-columns",
  authMiddleware,
  async (req, res) => {
    console.log("make api");
    try {
      const selectedColumns = await getCollabSelectedColumns();
      res.json(selectedColumns);
    } catch (error) {
      console.error("Error fetching selected columns:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  }
);

//affectation columns filter
const router12 = require("./Routes/UserRoute");
const { getAffectSelectedColumns } = require("./controllers/UserController");

app.use("/api", router12);
app.get(
  "/api/users/affectation-selected-columns",
  authMiddleware,
  async (req, res) => {
    console.log("make api");
    try {
      const selectedColumns = await getAffectSelectedColumns();
      res.json(selectedColumns);
    } catch (error) {
      console.error("Error fetching selected columns:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  }
);
//infraction columns filter
const router13 = require("./Routes/UserRoute");
const {
  getInfractionSelectedColumns,
} = require("./controllers/UserController");

app.use("/api", router13);
app.get(
  "/api/users/infractions-selected-columns",
  authMiddleware,
  async (req, res) => {
    console.log("make api");
    try {
      const selectedColumns = await getInfractionSelectedColumns();
      res.json(selectedColumns);
    } catch (error) {
      console.error("Error fetching selected columns:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  }
);

//IMPORT Collaborateur MODEL
const router1 = require("./Routes/CollaborateurRoute");
app.use("/api", router1);

//IMPORT vehicule MODEL
const router2 = require("./Routes/VehiculeRoute");
const { fetchVehicles } = require("./controllers/VehiculeController");

app.use("/api", router2);
app.get("/api/vehicle", async (req, res) => {
  try {
    const vehicles = await fetchVehicles();
    res.json(vehicles);
  } catch (error) {
    console.error("Error fetching vehicles:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

//import archived vehicule MODEL
const router3 = require("./Routes/ArchivedVehiculeRoutes");
const {
  fetchArchivedVehicles,
} = require("./controllers/ArchivedVehiculeController");
app.use("/api", router3);
app.get("/api/archived-vehicule", async (req, res) => {
  try {
    const vehicles = await fetchArchivedVehicles();
    res.json(vehicles);
  } catch (error) {
    console.error("Error fetching archived vehicles:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});
// selected columns vehicules

/* Infractions */
const router6 = require("./Routes/InfractionRoutes");
app.use("/api", router6);
const { fetchInfractions } = require("./controllers/InfractionController");
app.get("/api/Infractions", async (req, res) => {
  try {
    const infractions = await fetchInfractions();
    res.json(infractions);
  } catch (error) {
    console.error("Error fetching infractions:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

//import archived infraction MODEL
const router7 = require("./Routes/ArchivedInfractionsRoutes");
const {
  fetchArchivedInfractions,
} = require("./controllers/ArchivedInfractionsController");
app.use("/api", router7);
app.get("/api/archivedInfractions", async (req, res) => {
  try {
    const archivedInfraction = await fetchArchivedInfractions();
    res.json(archivedInfraction);
  } catch (error) {
    console.error("Error fetching archived vehicles:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

/* Affectation  */
const router4 = require("./Routes/AffectationRoutes");
app.set("view engine", "ejs");
app.use("/api", router4);
//import archived affectation MODEL
const router8 = require("./Routes/ArchivedAffectationRoutes");
const {
  fetchArchivedAffectation,
} = require("./controllers/ArchivedAffectationsController");
app.use("/api", router8);
app.get("/api/archived-affectation", async (req, res) => {
  try {
    const archivedaffectation = await fetchArchivedAffectation();
    res.json(archivedaffectation);
  } catch (error) {
    console.error("Error fetching archived affectation:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

/* statistique */
const router5 = require("./Routes/DashStatisRoute");

app.use("/api", router5);

/* passport */
app.use(passport.initialize());
require("./security/passport")(passport);

app.listen(process.env.PORT, () => {
  console.log("server works good !!");
});
