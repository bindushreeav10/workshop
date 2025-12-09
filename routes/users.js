const express = require("express");
const {
  createUser, 
  getAllUsers,
  getUserById,
  updateUser,
   deleteUser,
   patchUpdateUser
} = require("../controllers/userController");


const router = express.Router();


// POST /api/users - Create a new user
router.post("/", createUser);

// GET /api/users - Get all users
router.get("/", getAllUsers);

// GET /api/users/:id - Get user by ID
router.get("/:id", getUserById);

// PUT /api/users/:id - Update user by ID
router.put("/:id", updateUser);

// DELETE /api/users/:id - Delete user by ID
router.delete("/:id", deleteUser);

// DELETE /api/users/:id - Delete user by ID
// router.patch("/:id", patchUpdateUser);


module.exports=router;