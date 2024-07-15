import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getTodoListAction = async () => {
  const todoList = await prisma.todo.findMany();
  return todoList;
};
export const createTodoAction = async () => {};
export const updateTodoAction = async () => {};
export const deleteTodoAction = async () => {};
export const getTodoByIdAction = async () => {};
