import { Tool } from "@modules/tools/entities/Tool";
import { IToolRepository } from "@modules/tools/repositories/tools/IToolRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class ListToolsUseCase {
  private repository: IToolRepository;

  constructor(
    @inject("ToolRepository")
    repository: IToolRepository
  ) {
    this.repository = repository;
  }

  async execute(): Promise<Tool[]> {
    return this.repository.list();
  }
}

export { ListToolsUseCase };
