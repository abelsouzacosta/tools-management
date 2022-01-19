import { Tool } from "@modules/tools/entities/Tool";

interface ICreateToolDTO {
  title: string;
  link: string;
  description: string;
  tags: string[];
}

interface IUpdateToolDTO {
  id: number;
  title: string;
  link: string;
  description: string;
  tags: string[];
}

interface IToolRepository {
  findByName(name: string): Promise<Tool | undefined>;

  findById(id: number): Promise<Tool | undefined>;

  list(): Promise<Tool[]>;

  create({ title, link, description, tags }: ICreateToolDTO): Promise<void>;

  update({ id, title, link, description, tags }: IUpdateToolDTO): Promise<void>;

  delete(id: number): Promise<void>;
}

export { IToolRepository, ICreateToolDTO, IUpdateToolDTO };
