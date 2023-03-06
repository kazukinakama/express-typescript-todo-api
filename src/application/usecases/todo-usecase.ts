import { TodoEntity } from '../../domain/entities/todo-entity';
import { TodoRepository } from '../../interface/repositories/todo-repository';

export class TodoUsecase {
  public constructor(private readonly todoRepository: TodoRepository) {}

  public async findAll(): Promise<TodoEntity[]> {
    return await this.todoRepository.findAll();
  }

  public async create(todo: TodoEntity): Promise<TodoEntity> {
    return await this.todoRepository.create(todo);
  }

  public async findOne(id: number): Promise<TodoEntity> {
    return await this.todoRepository.findOneById(id);
  }

  public async update(todo: TodoEntity): Promise<TodoEntity> {
    return await this.todoRepository.update(todo);
  }

  public async delete(id: number): Promise<TodoEntity> {
    return await this.todoRepository.delete(id);
  }
}
