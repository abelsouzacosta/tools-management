import { ApplicationError } from "@errors/ApplicationError";
import {
  IToolRepository,
  IUpdateToolDTO,
} from "@modules/tools/repositories/tools/IToolRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class UpdateToolUseCase {
  private repository: IToolRepository;

  constructor(
    @inject("ToolRepository")
    repository: IToolRepository
  ) {
    this.repository = repository;
  }

  async execute({
    id,
    title,
    link,
    description,
    tags,
  }: IUpdateToolDTO): Promise<void> {
    const toolById = await this.repository.findById(id);
    const toolByTitle = await this.repository.findByTitle(title);

    if (!toolById) throw new ApplicationError("Tool not found", 404);

    if (toolByTitle && toolByTitle.id !== toolById.id)
      throw new ApplicationError("Title already taken", 403);

    this.repository.update({ id, title, link, description, tags });
  }
}

export { UpdateToolUseCase };
