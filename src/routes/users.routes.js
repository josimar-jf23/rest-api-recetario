import { Router } from "express";
import { body } from "express-validator";

import { 
    getUsers 
} from "../controllers/users.controllers.js";

const router = Router();

router.get("/", (req, res) => {
    print("hola");
});
router.get("/users", getUsers);

export default router;