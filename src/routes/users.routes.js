import { Router } from "express";
import { body } from "express-validator";

import { 
    getUsers 
} from "../controllers/user.controllers.js";

const router = Router();

router.get("/users", getUsers);

export default router;