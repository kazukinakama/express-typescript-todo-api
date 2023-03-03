import { TodoEntity } from '../../domain/entities/todo-entity';

export abstract class TodoRepository {
  public abstract findAll(): Promise<Required<TodoEntity>[]>;
  public abstract create(todo: TodoEntity): Promise<Required<TodoEntity>>;
  public abstract findOneById(id: number): Promise<Required<TodoEntity>>;
  public abstract update(id: number, todo: TodoEntity): Promise<Required<TodoEntity>>;
  public abstract delete(id: number): Promise<Required<TodoEntity>>;
}
