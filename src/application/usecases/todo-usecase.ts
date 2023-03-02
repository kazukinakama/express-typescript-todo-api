import { TodoEntity } from '../../domain/entities/todo-entity';
import { TodoRepository } from '../../interface/repositories/todo-repository';

export class TodoUsecase {
  public constructor(private readonly todoRepository: TodoRepository) {}

  public async findAll(): Promise<TodoEntity[]> {
    const data = await this.todoRepository.findAll();
    const entities = data.map(item => {
      const entity = new TodoEntity({
        id: item.id,
        title: item.title,
        content: item.content,
        isDone: item.isDone,
        createdAt: item.createdAt,
        updatedAt: item.updatedAt,
      });
      return entity;
    });
    return entities;
  }

  public async create(todo: TodoEntity): Promise<TodoEntity> {
    const data = await this.todoRepository.create(todo);
    const entity = new TodoEntity({
      id: data.id,
      title: data.title,
      content: data.content,
      isDone: data.isDone,
      createdAt: data.createdAt,
      updatedAt: data.updatedAt,
    });
    return entity;
  }

  public async findOne(id: number): Promise<TodoEntity> {
    const data = await this.todoRepository.findOneById(id);
    const entity = new TodoEntity({
      id: data.id,
      title: data.title,
      content: data.content,
      isDone: data.isDone,
      createdAt: data.createdAt,
      updatedAt: data.updatedAt,
    });
    return entity;
  }

  public async update(id: number, todo: TodoEntity): Promise<TodoEntity> {
    const data = await this.todoRepository.update(id, todo);
    const entity = new TodoEntity({
      id: data.id,
      title: data.title,
      content: data.content,
      isDone: data.isDone,
      createdAt: data.createdAt,
      updatedAt: data.updatedAt,
    });
    return entity;
  }

  public async delete(id: number): Promise<TodoEntity> {
    const data = await this.todoRepository.delete(id);
    const entity = new TodoEntity({
      id: data.id,
      title: data.title,
      content: data.content,
      isDone: data.isDone,
      createdAt: data.createdAt,
      updatedAt: data.updatedAt,
    });
    return entity;
  }
}
