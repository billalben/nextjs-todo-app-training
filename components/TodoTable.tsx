import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ITodo } from "@/interfaces";
import TodosTableActions from "./TodosTableActions";
import { Badge } from "./ui/badge";
import dayjs from "dayjs";

interface IProps {
  todos: ITodo[];
}

export default function TodosTable({ todos }: IProps) {
  return (
    <Table>
      <TableCaption>A list of your todos.</TableCaption>
      <TableHeader>
        <TableRow>
          {/* <TableHead>ID</TableHead> */}
          <TableHead>Title</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Created At</TableHead>
          <TableHead>Updated At</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {todos.map((todo) => (
          <TableRow key={todo?.id}>
            {/* <TableCell className="font-medium">{todo?.id}</TableCell> */}
            <TableCell className={todo.completed ? "line-through" : ""}>
              {todo?.title}
            </TableCell>
            <TableCell>
              {todo?.completed ? (
                <Badge>Completed</Badge>
              ) : (
                <Badge variant="secondary">Uncompleted</Badge>
              )}
            </TableCell>
            <TableCell>{dayjs(todo.createdAt).format("MMMM D YYYY")}</TableCell>
            <TableCell>{dayjs(todo.updatedAt).format("MMMM D YYYY, H:MM A")}</TableCell>
            <TableCell className="flex items-center justify-end space-x-2">
              <TodosTableActions todo={todo} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={4}>Total</TableCell>
          <TableCell className="text-right">
            {!todos.length ? "YOU DON'T HAVE ANY TODO YET!" : todos.length}
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
