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
    const todo = this.fromRequest(requestBody);
    const result = await this.todoUsecase.create(todo);
    return this.todoSerializer.serialize(result);
  }

  public async findOne(id: number): Promise<TodoResponse> {
    const result = await this.todoUsecase.findOne(id);
    return this.todoSerializer.serialize(result);
  }

  public async update(
    id: number,
    requestBody: TodoRequest
  ): Promise<TodoResponse> {
    const todo = this.fromRequest(requestBody);
    const result = await this.todoUsecase.update(id, todo);
    return this.todoSerializer.serialize(result);
  }

  public async delete(id: number): Promise<TodoResponse> {
    const result = await this.todoUsecase.delete(id);
    return this.todoSerializer.serialize(result);
  }

  private fromRequest(req: TodoRequest): TodoEntity {
    const entity = new TodoEntity({
      title: req.title,
      content: req.content,
      isDone: req.isDone,
    });
    return entity;
  }
}
