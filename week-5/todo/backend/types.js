const z = require("zod");

const createTodo = z.object({
  title: z.string(),
  description: z.string(),
  done: z.boolean(), // 1 for done 0 for not done
});

const updateTodo = z.string();
module.exports = {
  createTodo,
  updateTodo,
};
