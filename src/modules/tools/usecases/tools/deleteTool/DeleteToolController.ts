import { Request, Response } from "express";
import { container } from "tsyringe";

import { DeleteToolUseCase } from "./DeleteToolUseCase";

class DeleteToolController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { tool_id } = request.params;
    const id = parseInt(tool_id, 10);

    const deleteToolUseCase = container.resolve(DeleteToolUseCase);

    await deleteToolUseCase.execute(id);

    return response.status(200).send();
  }
}

export { DeleteToolController };
