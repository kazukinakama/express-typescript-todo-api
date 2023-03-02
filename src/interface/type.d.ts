export type TodoRequest = {
  title: string;
  content: string;
  isDone: boolean;
};

export type TodoResponse = {
  id: number;
  title: string;
  content: string;
  isDone: boolean;
  createdAt: string;
  updatedAt: string;
};
