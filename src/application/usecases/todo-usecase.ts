import { TodoEntity } from '../../domain/entities/todo-entity';
import { TodoRepository } from '../../interface/repositories/todo-repository';

export class TodoUsecase {
  public constructor(private readonly todoRepository: TodoRepository) {}

  public async findAll(): Promise<TodoEntity[]> {
    const data = await this.todoRepository.findAll();
    const entities = data.map(item => {
      const entity = new TodoEntity(item.title, item.content, item.isDone);
      entity.id = item.id;
      entity.createdAt = item.createdAt.toISOString();
      entity.updatedAt = item.updatedAt.toISOString();
      return entity;
    });
    return entities;
  }

  public async create(todo: TodoEntity): Promise<TodoEntity> {
    const data = await this.todoRepository.create(todo);
    const entity = new TodoEntity(data.title, data.content, data.isDone);
    entity.id = data.id;
    entity.createdAt = data.createdAt.toISOString();
    entity.updatedAt = data.updatedAt.toISOString();
    return entity;
  }

  public async findOne(id: number): Promise<TodoEntity> {
    const data = await this.todoRepository.findOneById(id);
    const entity = new TodoEntity(data.title, data.content, data.isDone);
    entity.id = data.id;
    entity.createdAt = data.createdAt.toISOString();
    entity.updatedAt = data.updatedAt.toISOString();
    return entity;
  }

  public async update(id: number, todo: TodoEntity): Promise<TodoEntity> {
    const data = await this.todoRepository.update(id, todo);
    const entity = new TodoEntity(data.title, data.content, data.isDone);
    entity.id = data.id;
    entity.createdAt = data.createdAt.toISOString();
    entity.updatedAt = data.updatedAt.toISOString();
    return entity;
  }

  public async delete(id: number): Promise<TodoEntity> {
    const data = await this.todoRepository.delete(id);
    const entity = new TodoEntity(data.title, data.content, data.isDone);
    entity.id = data.id;
    entity.createdAt = data.createdAt.toISOString();
    entity.updatedAt = data.updatedAt.toISOString();
    return entity;
  }
}
