import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListToolsUseCase } from "./ListToolsUseCase";

class ListToolsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { tag } = request.query;
    const parsedStringTag = tag ? tag.toString() : undefined;
    const listToolsUseCase = container.resolve(ListToolsUseCase);

    const result = await listToolsUseCase.execute();

    const tools = tag
      ? result.filter((tool) => tool.tags.includes(parsedStringTag))
      : result;

    return response.status(200).json(tools);
  }
}

export { ListToolsController };
