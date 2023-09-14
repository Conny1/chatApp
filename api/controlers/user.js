import bcrypt from "bcrypt";
import user from "../models/user.js";

export const createAccount = async (req, resp, next) => {
  const saltRounds = 10;
  const salt = bcrypt.genSaltSync(saltRounds);
  const hash = bcrypt.hashSync(req.body.password, salt);

  try {
    const EmailExisting = await user.findOne({ email: req.body.email });

    if (EmailExisting) {
      return resp
        .status(200)
        .json({ sucess: false, message: "Account with that email exists" });
    }
    const results = await user({
      name: req.body.name,
      email: req.body.email,
      password: hash,
    });

    await results.save();

    resp.status(200).json({ sucess: true });
  } catch (error) {
    next(error);
  }
};

export const logIn = async (req, resp, next) => {
  try {
    const EmailExisting = await user.findOne({ email: req.body.email });

    if (!EmailExisting) {
      return resp
        .status(200)
        .json({ sucess: false, message: "Account does not exist" });
    }

    const isPassword = bcrypt.compareSync(
      req.body.password,
      EmailExisting.password
    ); // true | false
    if (!isPassword) {
      return resp
        .status(200)
        .json({ sucess: false, message: "Incorrect Email or passowrd" });
    }

    const { password, ...data } = EmailExisting._doc;

    resp.status(200).json({ sucess: true, data });
  } catch (error) {
    next(error);
  }
};
