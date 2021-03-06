import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("tools")
class Tool {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column()
  title: string;

  @Column()
  link: string;

  @Column()
  description: string;

  @Column("text", { array: true })
  tags: string[];
}

export { Tool };
