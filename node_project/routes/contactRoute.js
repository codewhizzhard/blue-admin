const express = require("express");
const router = express.Router();
const {getContact, createContact, deleteContact, getIndividual, update} = require("../controllers/contactController");
const validateToken = require("../middleware/validateToken");

router.use(validateToken);
router.route("/").get(getContact).post(createContact);
/* router.route("/:id").get((req, res) => {
    res.status(200).json({message: `${req.params.id} has delivered`})
})
 */
/* router.route("/:id").put((req, res) => {
    res.status(200).json({message: `update added ${req.params.id}`})
}) */
router.route("/:id").delete(deleteContact).get(getIndividual).put(update)


module.exports = router;