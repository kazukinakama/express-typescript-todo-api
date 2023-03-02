import { PrismaClient, Todo } from '@prisma/client';
import { TodoEntity } from '../../domain/entities/todo-entity';
import { TodoRepository } from './todo-repository';

export class TodoRepositoryImpl extends TodoRepository {
  public constructor(private readonly prisma: PrismaClient) {
    super();
  }

  public async findAll(): Promise<TodoEntity[]> {
    const result = await this.prisma.todo.findMany();
    return result.map(item => this.toEntity(item));
  }

  public async create(todo: TodoEntity): Promise<TodoEntity> {
    const result = await this.prisma.todo.create({
      data: {
        title: todo.title,
        content: todo.content,
        isDone: todo.isDone,
      },
    });
    return this.toEntity(result);
  }

  public async findOneById(id: number): Promise<TodoEntity> {
    const result = await this.prisma.todo.findUniqueOrThrow({
      where: {
        id: id,
      },
    });
    return this.toEntity(result);
  }

  public async update(id: number, todo: TodoEntity): Promise<TodoEntity> {
    const result = await this.prisma.todo.update({
      where: {
        id: id,
      },
      data: {
        title: todo.title,
        content: todo.content,
        isDone: todo.isDone,
      },
    });
    return this.toEntity(result);
  }

  public async delete(id: number): Promise<TodoEntity> {
    const result = await this.prisma.todo.delete({
      where: {
        id: id,
      },
    });
    return this.toEntity(result);
  }

  private toEntity(item: Todo): TodoEntity {
    const entity = new TodoEntity({
      id: item.id,
      title: item.title,
      content: item.content,
      isDone: item.isDone,
      createdAt: item.createdAt,
      updatedAt: item.updatedAt,
    });
    return entity;
  }
}
