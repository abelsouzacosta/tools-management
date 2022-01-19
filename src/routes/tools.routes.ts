import { CreateToolController } from "@modules/tools/usecases/tools/createTool/CreateToolController";
import { ListToolsController } from "@modules/tools/usecases/tools/listTools/ListToolsController";
import { Router } from "express";

const router = Router();
const create = new CreateToolController();
const list = new ListToolsController();

router.get("/", list.handle);

router.post("/", create.handle);

export { router };
