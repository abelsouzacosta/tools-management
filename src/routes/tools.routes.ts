import { CreateToolController } from "@modules/tools/usecases/tools/createTool/CreateToolController";
import { DeleteToolController } from "@modules/tools/usecases/tools/deleteTool/DeleteToolController";
import { ListToolsController } from "@modules/tools/usecases/tools/listTools/ListToolsController";
import { Router } from "express";

const router = Router();
const create = new CreateToolController();
const list = new ListToolsController();
const delete_tool = new DeleteToolController();

router.get("/", list.handle);

router.post("/", create.handle);

router.delete("/:tool_id", delete_tool.handle);

export { router };
