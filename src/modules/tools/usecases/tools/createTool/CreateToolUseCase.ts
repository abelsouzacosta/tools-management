import {
  IToolRepository,
  ICreateToolDTO,
} from "@modules/tools/repositories/tools/IToolRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class CreateToolUseCase {
  private repository: IToolRepository;

  constructor(
    @inject("ToolRepository")
    repository: IToolRepository
  ) {
    this.repository = repository;
  }

  async execute({
    title,
    link,
    description,
    tags,
  }: ICreateToolDTO): Promise<void> {
    const toolAlreadyExists = await this.repository.findByTitle(title);

    if (toolAlreadyExists) throw new Error("Title already taken");

    this.repository.create({ title, link, description, tags });
  }
}

export { CreateToolUseCase };
