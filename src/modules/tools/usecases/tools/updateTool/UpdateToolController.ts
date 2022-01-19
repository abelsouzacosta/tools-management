import { Request, Response } from "express";
import { container } from "tsyringe";

import { UpdateToolUseCase } from "./UpdateToolUseCase";

class UpdateToolController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { tool_id } = request.params;
    const id = parseInt(tool_id, 10);
    const { title, link, description, tags } = request.body;

    const updateToolUseCase = container.resolve(UpdateToolUseCase);

    await updateToolUseCase.execute({ id, title, link, description, tags });

    return response.status(200).send();
  }
}

export { UpdateToolController };
