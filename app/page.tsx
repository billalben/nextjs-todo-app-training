import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { getTodoListAction } from "@/actions/todo.actions";

export default async function Home() {
  // get todo list
  const todoList = await getTodoListAction();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* <Dialog>
        <DialogTrigger asChild>
          <Button>
            <Plus className="mr-1 h-4 w-4" />
            Click me
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you&apos;re done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input
                id="name"
                defaultValue="Billal Benzazoua"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Username
              </Label>
              <Input
                id="username"
                defaultValue="@billal"
                className="col-span-3"
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog> */}

      <ul>
        {todoList.map((todo) => (
          <li
            key={todo.id}
            className="bg-gray-100 p-4 rounded-md shadow-md w-flil sm:w-[425px]"
          >
            <h2 className="text-black text-lg font-semibold">{todo.title}</h2>
            <p className="text-gray-600">{todo.body}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
