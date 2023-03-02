export class TodoEntity {
  private _id?: number;
  private _title: string;
  private _content: string;
  private _isDone: boolean;
  private _createdAt?: Date;
  private _updatedAt?: Date;

  public constructor(params: {
    id?: number;
    title: string;
    content: string;
    isDone: boolean;
    createdAt?: Date;
    updatedAt?: Date;
  }) {
    this._id = params.id;
    this._title = params.title;
    this._content = params.content;
    this._isDone = params.isDone;
    this._createdAt = params.createdAt;
    this._updatedAt = params.updatedAt;
  }

  get id(): number | undefined {
    return this._id;
  }

  set id(id: number | undefined) {
    this._id = id;
  }

  get title(): string {
    return this._title;
  }

  set title(title: string) {
    this._title = title;
  }

  get content(): string {
    return this._content;
  }

  set content(content: string) {
    this._content = content;
  }

  get isDone(): boolean {
    return this._isDone;
  }

  set isDone(isDone: boolean) {
    this._isDone = isDone;
  }

  get createdAt(): Date | undefined {
    return this._createdAt;
  }

  set createdAt(createdAt: Date | undefined) {
    this._createdAt = createdAt;
  }

  get updatedAt(): Date | undefined {
    return this._updatedAt;
  }

  set updatedAt(updatedAt: Date | undefined) {
    this._updatedAt = updatedAt;
  }
}
