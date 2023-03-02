import { Todo } from '@prisma/client';
import { TodoEntity } from '../../domain/entities/todo-entity';

export abstract class TodoRepository {
  public abstract findAll(): Promise<Todo[]>;
  public abstract create(todo: TodoEntity): Promise<Todo>;
  public abstract findOneById(id: number): Promise<Todo>;
  public abstract update(id: number, todo: TodoEntity): Promise<Todo>;
  public abstract delete(id: number): Promise<Todo>;
}
