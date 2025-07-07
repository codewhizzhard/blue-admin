const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");
//@desc Get all contact
//@access public
//@route GET /api/contacts

const getContact = asyncHandler(async(req, res) => {
    const contacts = await Contact.find({user_id: req.user.id})
    res.status(200).json(contacts) 
})

const createContact = asyncHandler(async(req, res) => {
    console.log("create body",req.body);
    const {name, email } = req.body;
    if (!name || !email) {
        res.status(400);
        throw new Error("All field required");
    }
    const contact = await Contact.create({
        name, email, user_id: req.user.id
    })
    res.status(201).json(contact);
})

const deleteContact = asyncHandler(async(req, res) => {
    console.log("delete", req.params.id);
      if(contact.user_id.toString() !== req.user.id) {
        res.status(403);
        throw  new Error("user cant update for other user")
    }
    const contact = await Contact.findByIdAndDelete(req.params.id);
    if (!contact) {
        res.status(400)
        throw new Error("not there");
    }
    res.status(200).json(contact) 
   /* const contact = await Contact.findById(req.params.id)
    if (!contact) {
        res.status(400);
        throw new Error("not found")
    }
    await Contact.remove();
    res.status(200).json(contact) */
})

const getIndividual = asyncHandler(async(req, res) => {
    const contact = await Contact.findById(req.params.id)
    if (!contact) {
        res.status(400);
        throw new Error("not found")
    }
    res.status(200).json(contact);
})

const update = asyncHandler(async(req, res) => {
    const contact = await Contact.findById(req.params.id);
     if (!contact) {
        res.status(400);
        throw new Error("not found")
    }
    if(contact.user_id.toString() !== req.user.id) {
        res.status(403);
        throw  new Error("user cant update for other user")
    }

    const updated = await Contact.findByIdAndUpdate(req.params.id, req.body, {new: true})
    res.status(200).json(updated);
})

module.exports = {getContact, createContact, deleteContact, getIndividual, update}