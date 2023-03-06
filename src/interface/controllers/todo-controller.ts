import { TodoUsecase } from '../../application/usecases/todo-usecase';
import { TodoEntity } from '../../domain/entities/todo-entity';
import { TodoSerializer } from '../serializers/todo-serializer';
import { TodoRequest, TodoResponse } from '../type';

export class TodoController {
  public constructor(
    private readonly todoUsecase: TodoUsecase,
    private readonly todoSerializer: TodoSerializer
  ) {}

  public async findAll(): Promise<TodoResponse[]> {
    const result = await this.todoUsecase.findAll();
    return result.map((item) => this.todoSerializer.serialize(item));
  }

  public async create(requestBody: TodoRequest): Promise<TodoResponse> {
    const todo = new TodoEntity({
      title: requestBody.title,
      content: requestBody.content,
      isDone: requestBody.isDone,
    });
    const result = await this.todoUsecase.create(todo);
    return this.todoSerializer.serialize(result);
  }

  public async findOne(id: number): Promise<TodoResponse> {
    const result = await this.todoUsecase.findOne(id);
    return this.todoSerializer.serialize(result);
  }

  public async update(id: number, requestBody: TodoRequest): Promise<TodoResponse> {
    const todo = new TodoEntity({
      id: id,
      title: requestBody.title,
      content: requestBody.content,
      isDone: requestBody.isDone,
    });
    const result = await this.todoUsecase.update(todo);
    return this.todoSerializer.serialize(result);
  }

  public async delete(id: number): Promise<TodoResponse> {
    const result = await this.todoUsecase.delete(id);
    return this.todoSerializer.serialize(result);
  }
}
