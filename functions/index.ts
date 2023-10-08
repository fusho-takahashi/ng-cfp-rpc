import { Hono } from 'hono';

export const apiApp = new Hono();

const apiRoute = apiApp.get('/title', (c) => {
  return c.jsonT({ title: 'Hono RPC mode' });
});

export type ApiRoute = typeof apiRoute;
