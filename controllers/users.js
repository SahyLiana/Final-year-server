const { Users } = require("../models/users");
const CustomError = require("../errors/custom-error");

const updatePassword = async (req, res) => {
  const { id: userID } = req.params;
  //   console.log(id);
  const formData = req.body;
  console.log(formData);
  console.log(userID);
  try {
    const findUser = await Users.find({
      _id: userID,
      password: formData.oldpassword,
    });

    if (findUser.length === 0) {
      throw new CustomError("Wrong old password", 401);
    } else {
      const updatePassword = await Users.findOneAndUpdate(
        { _id: userID },
        { password: formData.password },
        {
          runValidators: true,
          new: true,
        }
      );
    }

    console.log("User found is");
    console.log(findUser);
  } catch (error) {
    throw new CustomError("Sorry,you did a bad request", 401);
  }

  res.status(200).json("Update users");
};

module.exports = { updatePassword };
