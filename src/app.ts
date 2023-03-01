import express, { Application, json, Request, Response } from 'express';
import { todoRouter } from './infrastructure/routers/todo-router';

export const app: Application = express();

app.use(json());

app.get('/api/hello', (req: Request, res: Response) => {
  res.json({ message: 'Hello World!' });
});

app.use('/api/todos', todoRouter());
