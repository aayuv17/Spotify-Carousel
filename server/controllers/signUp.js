const validator = require("validator");
const empty = require("is-empty");
const crypto = require("crypto");

import { userAuthModel } from "./../models/userAuth";
import { usersModel } from "./../models/users";

export const signUp = async (req, res) => {
  if (
    empty(req.body.username) ||
    empty(req.body.password) ||
    empty(req.body.email) ||
    empty(req.body.confirmPassword)
  ) {
    res
      .status(200)
      .send({
        message: "Please fill in all the fields",
      })
      .end();
  }
  if (!validator.isEmail(req.body.email)) {
    res
      .status(200)
      .send({
        message: "Please enter correct email",
      })
      .end();
  }
  if (!validator.isStrongPassword(req.body.password)) {
    res
      .status(200)
      .send({
        message: "Please enter a strong password",
      })
      .end();
  }
  if (!(req.body.password === req.body.confirmPassword)) {
    res
      .status(200)
      .send({
        message: "Confirm password does not match the given password",
      })
      .end();
  }
  var query = await userAuthModel
    .findOne({
      username: req.body.username,
    })
    .exec();
  if (query) {
    res.status(200).send({
      message: "Username already taken",
    });
  } else {
    query = await userAuthModel.findOne({
      email: req.body.email,
    });
    if (query) {
      res
        .status(200)
        .send({
          message: "An account already exists with this email ID",
        })
        .end();
    } else {
      const salt = crypto.randomBytes(16).toString("hex");
      const hash = crypto
        .pbkdf2Sync(req.body.password, salt, 1000, 64, "sha512")
        .toString("hex");
      await userAuthModel.create({
        username: req.body.username,
        email: req.body.email,
        password: hash,
        salt: salt,
      });
      await usersModel.create({
        username: req.body.username,
      });
      res
        .status(200)
        .send({
          message: "Successfully created account",
        })
        .end();
    }
  }
};
