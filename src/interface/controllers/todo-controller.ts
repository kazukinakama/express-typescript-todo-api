import { TodoUsecase } from '../../application/usecases/todo-usecase';
import { TodoEntity } from '../../domain/entities/todo-entity';

type TodoRequest = {
  title: string;
  content: string;
  isDone: boolean;
};

type TodoResponse = {
  id: number;
  title: string;
  content: string;
  isDone: boolean;
  createdAt: string;
  updatedAt: string;
};

export class TodoController {
  public constructor(private readonly todoUsecase: TodoUsecase) {}

  public async findAll(): Promise<TodoResponse[]> {
    const result = await this.todoUsecase.findAll();
    return this.entityToItems(result);
  }

  public async create(requestBody: TodoRequest): Promise<TodoResponse> {
    const todo = this.fromRequest(requestBody);
    const result = await this.todoUsecase.create(todo);
    return this.entityToItem(result);
  }

  public async findOne(id: number): Promise<TodoResponse> {
    const result = await this.todoUsecase.findOne(id);
    return this.entityToItem(result);
  }

  public async update(
    id: number,
    requestBody: TodoRequest
  ): Promise<TodoResponse> {
    const todo = this.fromRequest(requestBody);
    const result = await this.todoUsecase.update(id, todo);
    return this.entityToItem(result);
  }

  public async delete(id: number): Promise<TodoResponse> {
    const result = await this.todoUsecase.delete(id);
    return this.entityToItem(result);
  }

  private fromRequest(req: TodoRequest): TodoEntity {
    const entity = new TodoEntity(req.title, req.content, req.isDone);
    return entity;
  }

  private entityToItem(entity: TodoEntity): TodoResponse {
    if (!entity.id) {
      throw new Error('id is required');
    }
    return {
      id: entity.id,
      title: entity.title,
      content: entity.content,
      isDone: entity.isDone,
      createdAt: entity.createdAt ?? '',
      updatedAt: entity.updatedAt ?? '',
    };
  }

  private entityToItems(entities: TodoEntity[]): TodoResponse[] {
    return entities.map((entity) => this.entityToItem(entity));
  }
}
