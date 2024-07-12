import express, { Router } from 'express';
import TaskController from './controllers/TaskController.js';
import router from '../routes.js';

const app = express();

app.use(express.json());

app.use(routes)

export default app;