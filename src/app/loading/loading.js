import { Loader } from "lucide-react";

export default function loading() {
  return (
    <div className="flex h-screen items-center justify-center">
      <Loader className="h-[50px] w-[50px] animate-spin" />
    </div>
  );
}
