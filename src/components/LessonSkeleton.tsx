export function LessonSkeleton() {
  return (
    <div className="flex items-center gap-3">
      <div className="h-2 w-2 animate-pulse rounded-full bg-zinc-500/50" />
      <div className="flex flex-1 items-center gap-2 text-sm text-zinc-400 hover:text-zinc-300">
        <div className="h-4 w-4 text-zinc-500" />

        <span className="h-4 w-28 animate-pulse rounded-full bg-zinc-500/50" />
        <span className="ml-auto h-3 w-8 animate-pulse rounded-full bg-zinc-500/50" />
      </div>
    </div>
  );
}
