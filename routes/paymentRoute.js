const express = require('express');
const router = express.Router();
const Payment = require('../models/Payment');
const User = require('../models/User');
const authUser = require('../middleware/authUser');

// Supprimez toutes les routes liées à Razorpay
router.get('/getPreviousOrders', authUser, async (req, res) => {
  try {
    const data = await Payment.find({ user: req.user.id }).sort({ createdAt: -1 });
    res.send(data);
  } catch (error) {
    res.status(500).send("Something went wrong");
  }
});

module.exports = router;
