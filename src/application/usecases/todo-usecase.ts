import { TodoEntity } from '../../domain/entities/todo-entity';
import { TodoRepository } from '../../interface/repositories/todo-repository';

export class TodoUsecase {
  public constructor(private readonly todoRepository: TodoRepository) {}

  public async findAll(): Promise<TodoEntity[]> {
    return this.todoRepository.findAll();
  }

  public async create(todo: TodoEntity): Promise<TodoEntity> {
    return this.todoRepository.create(todo);
  }

  public async findOne(id: number): Promise<TodoEntity> {
    return this.todoRepository.findOneById(id);
  }

  public async update(id: number, todo: TodoEntity): Promise<TodoEntity> {
    return this.todoRepository.update(id, todo);
  }

  public async delete(id: number): Promise<TodoEntity> {
    return this.todoRepository.delete(id);
  }
}
