import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Button>
        <Plus className="mr-1 h-4 w-4"/>
        Click me
      </Button>
    </main>
  );
}
