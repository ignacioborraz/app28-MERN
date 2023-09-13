import { Router } from "express";
import create from "../controllers/comments/create.js";
import read from "../controllers/comments/read.js";
import update from "../controllers/comments/update.js";
import destroy from "../controllers/comments/destroy.js";
import passport from "../middlewares/passport.js";

const commentsRouter = Router();

commentsRouter.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  create
);
commentsRouter.get("/", read);

//SOLO le voy a agregar la autenticación con passport
//FALTARIA middlewares para verificar que el usuario que quiere actualizar/destruir es el mismo usuario que creó el usuario
commentsRouter.put(
  "/:comment_id",
  passport.authenticate("jwt", { session: false }),
  update
);
commentsRouter.delete(
  "/:comment_id",
  passport.authenticate("jwt", { session: false }),
  destroy
);

export default commentsRouter;
