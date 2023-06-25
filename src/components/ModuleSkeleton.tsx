import { LessonSkeleton } from "./LessonSkeleton";

export function ModuleSkeleton() {
  return (
    <div>
      <div className="flex w-full items-center gap-3 bg-zinc-800 p-4">
        <div className="h-10 w-10 animate-pulse rounded-full bg-zinc-950" />

        <div className="flex flex-col gap-1 text-left">
          <div className="h-[14px] w-32 animate-pulse rounded-full bg-zinc-50/50" />
          <span className="h-3 w-12 animate-pulse rounded-full bg-zinc-400/50" />
        </div>

        <div className="ml-auto h-5 w-5 text-zinc-400 transition-transform duration-200 group-data-[state=open]:rotate-180" />
      </div>

      <div>
        <nav className="relative flex flex-col gap-4 p-6">
          <LessonSkeleton />
          <LessonSkeleton />
          <LessonSkeleton />
        </nav>
      </div>
    </div>
  );
}
