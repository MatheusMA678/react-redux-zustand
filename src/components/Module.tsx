import { ChevronDown } from "lucide-react";
import * as Collapsible from "@radix-ui/react-collapsible";
import { useStore } from "../zustand-store";

import { Lesson } from "./Lesson";

interface ModuleProps {
  moduleIndex: number;
  title: string;
  lessonsAmount: number;
}

export function Module({ moduleIndex, title, lessonsAmount }: ModuleProps) {
  const { play, isLoading, lessons } = useStore((store) => {
    return {
      play: store.play,
      isLoading: store.isLoading,
      lessons: store.course.modules[moduleIndex].lessons,
    };
  });

  return (
    <Collapsible.Root className="group" defaultOpen={moduleIndex === 0}>
      <Collapsible.Trigger className="flex w-full items-center gap-3 bg-zinc-800 p-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-950 text-xs">
          {moduleIndex + 1}
        </div>

        <div
          className="group flex flex-col gap-1 text-left"
          data-loading={isLoading}
        >
          <strong className="text-sm group-data-[loading=true]:h-[14px] group-data-[loading=true]:w-28 group-data-[loading=true]:bg-zinc-500">
            {title}
          </strong>
          <span className="text-xs text-zinc-400">{lessonsAmount} aulas</span>
        </div>

        <ChevronDown className="ml-auto h-5 w-5 text-zinc-400 transition-transform duration-200 group-data-[state=open]:rotate-180" />
      </Collapsible.Trigger>

      <Collapsible.Content>
        <nav className="relative flex flex-col gap-4 p-6">
          {lessons &&
            lessons.map((lesson, lessonIndex) => {
              return (
                <Lesson
                  key={lesson.id}
                  {...lesson}
                  onPlay={() => play([moduleIndex, lessonIndex])}
                />
              );
            })}
        </nav>
      </Collapsible.Content>
    </Collapsible.Root>
  );
}
