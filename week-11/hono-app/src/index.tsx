import { Hono } from "hono";
import { renderer } from "./renderer";

const app = new Hono();

app.use(renderer);

app.get("/", (c) => {
  const body = c.req.json();
  console.log(body);
  console.log(c.req.query());
  console.log(c.req.param("name"));
  console.log(c.req.header("Authorization"));
  return c.text("Hello World!");
});

export default app;
