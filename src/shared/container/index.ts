import { ToolRepository } from "@modules/tools/repositories/implementations/ToolRepository";
import { IToolRepository } from "@modules/tools/repositories/tools/IToolRepository";
import { container } from "tsyringe";

container.registerSingleton<IToolRepository>("ToolRepository", ToolRepository);
