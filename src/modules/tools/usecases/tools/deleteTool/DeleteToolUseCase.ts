import { ApplicationError } from "@errors/ApplicationError";
import { IToolRepository } from "@modules/tools/repositories/tools/IToolRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class DeleteToolUseCase {
  private repository: IToolRepository;

  constructor(
    @inject("ToolRepository")
    repository: IToolRepository
  ) {
    this.repository = repository;
  }

  async execute(id: number): Promise<void> {
    const tool = await this.repository.findById(id);

    if (!tool) throw new ApplicationError("Tool not found", 404);

    this.repository.delete(id);
  }
}

export { DeleteToolUseCase };
