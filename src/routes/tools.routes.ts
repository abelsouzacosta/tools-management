import { CreateToolController } from "@modules/tools/usecases/tools/createTool/CreateToolController";
import { Router } from "express";

const router = Router();
const create = new CreateToolController();

router.post("/", create.handle);

export { router };
