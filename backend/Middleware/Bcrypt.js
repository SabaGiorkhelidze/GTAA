import bcrypt from "bcrypt";

const saltRounds = 10;
const Adminpassword = "Admin@123";
const passwordHash =
  "$2b$10$TP7jfhTc/VYNAqSxvwVb5OLhVu1XD7.ERlMT3qniB3Kig9M3jIXN2";

export const setPasswordHASH = (salt=saltRounds, password=Adminpassword) => {
  bcrypt
    .genSalt(saltRounds)
    .then((salt) => {
      console.log("Salt: ", salt);
      return bcrypt.hash(password, salt);
    })
    .then((hash) => {
      console.log("Hash: ", hash);
    })
    .catch((err) => console.error(err.message));
};
