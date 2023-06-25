import { MessageCircle } from "lucide-react";
import { useCurrentLesson, useStore } from "../zustand-store";

export function Header() {
  const { currentModule, currentLesson } = useCurrentLesson();
  const { isLoading } = useStore((store) => {
    return { isLoading: store.isLoading };
  });

  return (
    <header className="flex items-center justify-between">
      <div data-loading={isLoading} className="group flex flex-col gap-1">
        <h1 className="text-2xl font-bold group-data-[loading=true]:h-8 group-data-[loading=true]:w-48 group-data-[loading=true]:animate-pulse group-data-[loading=true]:rounded-full group-data-[loading=true]:bg-zinc-400/50">
          {currentLesson?.title}
        </h1>
        <span className="text-sm text-zinc-400 group-data-[loading=true]:mt-2 group-data-[loading=true]:h-[14px] group-data-[loading=true]:w-24 group-data-[loading=true]:animate-pulse group-data-[loading=true]:rounded-full group-data-[loading=true]:bg-zinc-600/50">
          {isLoading ? "" : `Módulo "${currentModule?.title}"`}
        </span>
      </div>

      <button className="flex items-center gap-2 rounded bg-violet-500 px-3 py-2 text-sm font-medium text-white duration-200 hover:bg-violet-500/80 active:bg-violet-500/50">
        <MessageCircle className="h-4 w-4" />
        Deixar feedback
      </button>
    </header>
  );
}
