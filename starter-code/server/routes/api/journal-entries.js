/*jshint esversion:6*/
const express       = require('express');
const router        = express.Router();

const Entry = require('../../models/journal-entry');

router.get('/journal-entries', (req, res, next) => {
  Entry.find({})
    .exec((err, Entries) => {
      if (err) {
        return res.send(err);
      }
      return res.json(Entries);
    });
});

module.exports = router;
