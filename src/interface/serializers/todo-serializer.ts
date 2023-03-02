import { TodoEntity } from '../../domain/entities/todo-entity';
import { TodoResponse } from '../type';

export class TodoSerializer {
  serialize(entity: Required<TodoEntity>): TodoResponse {
    if (!entity.id) {
      throw new Error('the data is undefined');
    }
    return {
      id: entity.id,
      title: entity.title,
      content: entity.content,
      isDone: entity.isDone,
      createdAt: entity.createdAt?.toISOString() ?? '',
      updatedAt: entity.updatedAt?.toISOString() ?? '',
    };
  }
}
