import { Express, Request, Response } from 'express';
import express from "express";
const app: Express = express();

app.get('/test', (req: Request, res: Response) => {
  res.send('API server works fine');
});

module.exports = {
  path: '/api',
  handler: app
};
