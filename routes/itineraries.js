import { Router } from "express";
import read from "../controllers/itineraries/read.js";

const itinerariesRouter = Router()

//CREATE

//READ
itinerariesRouter.get('/', read)

//UPDATE

//DELETE

export default itinerariesRouter