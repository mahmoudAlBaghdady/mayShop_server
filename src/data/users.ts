import bcrypt from "bcryptjs";

export const users = [
  {
    name: "mayshe",
    email: "mayshe@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
    phoneNumber: 96178988490,
  },
  {
    name: "mahmoud",
    email: "mahmoud@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
    phoneNumber: 96178871649,
  },
  {
    name: "bassam",
    email: "bassam@example.com",
    password: bcrypt.hashSync("123456", 10),
    phoneNumber: 96103064904,
  },
];
