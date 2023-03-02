import { TodoEntity } from '../../domain/entities/todo-entity';
import { TodoRepository } from '../../interface/repositories/todo-repository';

export class TodoUsecase {
  public constructor(private readonly todoRepository: TodoRepository) {}

  public async findAll(): Promise<Required<TodoEntity>[]> {
    return await this.todoRepository.findAll();
  }

  public async create(todo: TodoEntity): Promise<Required<TodoEntity>> {
    return await this.todoRepository.create(todo);
  }

  public async findOne(id: number): Promise<Required<TodoEntity>> {
    return await this.todoRepository.findOneById(id);
  }

  public async update(
    id: number,
    todo: TodoEntity
  ): Promise<Required<TodoEntity>> {
    return await this.todoRepository.update(id, todo);
  }

  public async delete(id: number): Promise<Required<TodoEntity>> {
    return await this.todoRepository.delete(id);
  }
}
