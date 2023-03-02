import { PrismaClient, Todo } from '@prisma/client';
import { TodoEntity } from '../../domain/entities/todo-entity';
import { TodoRepository } from './todo-repository';

export class TodoRepositoryImpl extends TodoRepository {
  public constructor(private readonly prisma: PrismaClient) {
    super();
  }

  public async findAll(): Promise<Todo[]> {
    const data = await this.prisma.todo.findMany();
    return data;
  }

  public async create(todo: TodoEntity): Promise<Todo> {
    const data = await this.prisma.todo.create({
      data: {
        title: todo.title,
        content: todo.content,
        isDone: todo.isDone,
      },
    });
    return data;
  }

  public async findOneById(id: number): Promise<Todo> {
    const data = await this.prisma.todo.findUniqueOrThrow({
      where: {
        id: id,
      },
    });
    return data;
  }

  public async update(id: number, todo: TodoEntity): Promise<Todo> {
    const data = await this.prisma.todo.update({
      where: {
        id: id,
      },
      data: {
        title: todo.title,
        content: todo.content,
        isDone: todo.isDone,
      },
    });
    return data;
  }

  public async delete(id: number): Promise<Todo> {
    const data = await this.prisma.todo.delete({
      where: {
        id: id,
      },
    });
    return data;
  }
}
