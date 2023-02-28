import express, { Application, Request, Response } from 'express';

export const app: Application = express();

app.use(express.json());

app.get('/api/hello', (req: Request, res: Response) => {
  res.json({ message: 'Hello World!' });
});
