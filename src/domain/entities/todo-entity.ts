export class TodoEntity {
  private _id?: number;
  private _title: string;
  private _content: string;
  private _isDone: boolean;
  private _createdAt?: string;
  private _updatedAt?: string;

  public constructor(title: string, content: string, isDone: boolean) {
    this._title = title;
    this._content = content;
    this._isDone = isDone;
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

  get createdAt(): string | undefined {
    return this._createdAt;
  }

  set createdAt(createdAt: string | undefined) {
    this._createdAt = createdAt;
  }

  get updatedAt(): string | undefined {
    return this._updatedAt;
  }

  set updatedAt(updatedAt: string | undefined) {
    this._updatedAt = updatedAt;
  }
}
