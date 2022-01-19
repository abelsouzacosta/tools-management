import { Tool } from "@modules/tools/entities/Tool";
import { getRepository, Repository } from "typeorm";

import {
  ICreateToolDTO,
  IUpdateToolDTO,
  IToolRepository,
} from "../tools/IToolRepository";

class ToolRepository implements IToolRepository {
  private repository: Repository<Tool>;

  constructor() {
    this.repository = getRepository(Tool);
  }

  async create({
    title,
    link,
    description,
    tags,
  }: ICreateToolDTO): Promise<void> {
    const tool = this.repository.create({
      title,
      link,
      description,
      tags,
    });

    await this.repository.save(tool);
  }

  async findByTitle(title: string): Promise<Tool | undefined> {
    const tool = this.repository.findOne({
      where: {
        title,
      },
    });

    return tool;
  }

  async findById(id: number): Promise<Tool | undefined> {
    const tool = this.repository.findOne({
      where: {
        id,
      },
    });

    return tool;
  }

  async list(): Promise<Tool[]> {
    return this.repository.find();
  }

  async update({
    id,
    title,
    link,
    description,
    tags,
  }: IUpdateToolDTO): Promise<void> {
    const tool = await this.findById(id);

    tool.title = title;
    tool.link = link;
    tool.description = description;
    tool.tags = tags;
  }

  async delete(id: number): Promise<void> {
    const tool = await this.findById(id);

    this.repository.remove(tool);
  }
}

export { ToolRepository };
