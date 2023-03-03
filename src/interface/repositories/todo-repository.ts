import { TodoEntity } from '../../domain/entities/todo-entity';

export abstract class TodoRepository {
  public abstract findAll(): Promise<TodoEntity[]>;
  public abstract create(todo: TodoEntity): Promise<TodoEntity>;
  public abstract findOneById(id: number): Promise<TodoEntity>;
  public abstract update(id: number, todo: TodoEntity): Promise<TodoEntity>;
  public abstract delete(id: number): Promise<TodoEntity>;
}
