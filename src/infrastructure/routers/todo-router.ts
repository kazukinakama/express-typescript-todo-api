import { PrismaClient } from '@prisma/client';
import { Router } from 'express';
import { TodoUsecase } from '../../application/usecases/todo-usecase';
import { TodoController } from '../../interface/controllers/todo-controller';
import { TodoRepositoryImpl } from '../../interface/repositories/todo-repository-impl';
import { TodoSerializer } from '../../interface/serializers/todo-serializer';

type TodoRequest = {
  title: string;
  content: string;
  isDone: boolean;
};

export const todoRouter = (): Router => {
  const router = Router();
  const prisma = new PrismaClient();
  const todoRepository = new TodoRepositoryImpl(prisma);
  const todoSerializer = new TodoSerializer();
  const todoUsecase = new TodoUsecase(todoRepository);
  const todoController: TodoController = new TodoController(todoUsecase, todoSerializer);

  router.get('/', async (req, res, next) => {
    try {
      const result = await todoController.findAll();
      res.json(result);
    } catch (err) {
      next(err);
    }
  });

  router.post('/', async (req, res, next) => {
    try {
      const requestBody: TodoRequest = req.body;
      const result = await todoController.create(requestBody);
      res.json(result);
    } catch (err) {
      next(err);
    }
  });

  router.get('/:id', async (req, res, next) => {
    try {
      const id: number = +req.params.id;
      const result = await todoController.findOne(id);
      res.json(result);
    } catch (err) {
      next(err);
    }
  });

  router.put('/:id', async (req, res, next) => {
    try {
      const id: number = +req.params.id;
      const requestBody: TodoRequest = req.body;
      const result = await todoController.update(id, requestBody);
      res.json(result);
    } catch (err) {
      next(err);
    }
  });

  router.delete('/:id', async (req, res, next) => {
    try {
      const id: number = +req.params.id;
      const result = await todoController.delete(id);
      res.json(result);
    } catch (err) {
      next(err);
    }
  });

  return router;
};
