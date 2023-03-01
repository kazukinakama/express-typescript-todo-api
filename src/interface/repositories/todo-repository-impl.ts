import { TodoEntity } from '../../domain/entities/todo-entity';
import { TodoRepository } from './todo-repository';

export class TodoRepositoryImpl extends TodoRepository {
  public async findAll(): Promise<TodoEntity[]> {
    // TODO: DBから取得
    const todo = new TodoEntity('title', 'content', false);
    todo.id = 1;
    todo.createdAt = new Date().toISOString();
    todo.updatedAt = new Date().toISOString();
    return [todo];
  }

  public async create(todo: TodoEntity): Promise<TodoEntity> {
    // TODO: DBで作成
    todo.id = 1;
    todo.createdAt = new Date().toISOString();
    todo.updatedAt = new Date().toISOString();
    return todo;
  }

  public async findOneById(id: number): Promise<TodoEntity> {
    // TODO: DBから取得
    const todo = new TodoEntity('title', 'content', false);
    todo.id = id;
    todo.createdAt = new Date().toISOString();
    todo.updatedAt = new Date().toISOString();
    return todo;
  }

  public async update(id: number, todo: TodoEntity): Promise<TodoEntity> {
    // TODO: DBで更新
    todo.id = id;
    todo.createdAt = new Date().toISOString();
    todo.updatedAt = new Date().toISOString();
    return todo;
  }

  public async delete(id: number): Promise<TodoEntity> {
    // TODO: DBで削除
    const todo = new TodoEntity('title', 'content', false);
    todo.id = id;
    todo.createdAt = new Date().toISOString();
    todo.updatedAt = new Date().toISOString();
    return todo;
  }
}
