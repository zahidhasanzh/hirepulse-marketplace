import { Router } from "express";
import { isAuthenticated } from "../../middleware/auth.middleware.js";
import { getLoggedInFreelancerProfile, upsertFreelanceProfile } from "./freelancer.controller.js";


export const freelancerRoute = Router()

freelancerRoute.get("/profile", isAuthenticated, getLoggedInFreelancerProfile)
freelancerRoute.put("/profile", isAuthenticated, upsertFreelanceProfile)