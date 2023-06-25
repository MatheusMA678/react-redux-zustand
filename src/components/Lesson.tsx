import { Video } from "lucide-react";
import { useCurrentLesson } from "../zustand-store";

interface LessonProps {
  id: string;
  title: string;
  duration: string;
  completed: boolean;
  onPlay: () => void;
}

export function Lesson({
  title,
  duration,
  completed,
  id,
  onPlay,
}: LessonProps) {
  const { currentLesson } = useCurrentLesson();

  if (!currentLesson) {
    return null;
  }

  return (
    <div className="flex items-center gap-3">
      <button
        type="button"
        data-active={currentLesson.id === id}
        data-completed={completed}
        className="
          relative
          h-2
          w-2
          rounded-full
          bg-zinc-500
          transition-all
          before:absolute
          before:left-1/2
          before:top-1/2
          before:z-0
          before:h-5
          before:w-5
          before:-translate-x-1/2
          before:-translate-y-1/2
          before:rounded-full
          before:border-[2px]
          after:absolute
          after:left-1/2
          after:top-1/2
          after:h-full
          after:w-full
          after:-translate-x-1/2
          after:-translate-y-1/2
          after:rounded-full
          data-[active=true]:bg-white
          data-[completed=true]:bg-green-500
          before:data-[active=false]:border-transparent
          before:data-[completed=true]:data-[active=true]:border-green-500
          before:data-[active=true]:bg-zinc-900
          after:data-[active=true]:bg-white
          after:data-[completed=true]:bg-green-500
        "
      />
      <button
        onClick={onPlay}
        data-active={currentLesson.id === id}
        className="group flex flex-1 items-center gap-2 text-sm text-zinc-400 hover:text-zinc-300"
      >
        <Video className="h-4 w-4 text-zinc-500" />

        <span className="group-data-[active=true]:font-bold group-data-[active=true]:text-zinc-200 group-data-[active=true]:hover:text-zinc-200">
          {title}
        </span>
        <span className="ml-auto font-mono text-xs text-zinc-500">
          {duration}
        </span>
      </button>
    </div>
  );
}
