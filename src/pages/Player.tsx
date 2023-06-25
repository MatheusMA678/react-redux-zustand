import { useEffect } from "react";
import { useCurrentLesson, useStore } from "../zustand-store";

import { Header } from "../components/Header";
import { Video } from "../components/Video";
import { Module } from "../components/Module";
import { ModuleSkeleton } from "../components/ModuleSkeleton";

export function Player() {
  const { course, load } = useStore((store) => {
    return {
      course: store.course,
      load: store.load,
    };
  });

  const { currentLesson } = useCurrentLesson();

  useEffect(() => {
    load();
  }, []);

  useEffect(() => {
    if (currentLesson) {
      document.title = `${currentLesson.title} - Rocketseat`;
    }
  }, [currentLesson]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-950 py-12 text-zinc-50 antialiased">
      <div className="flex w-[1100px] flex-col gap-6 px-8">
        <Header />

        <main className="relative flex flex-1 flex-col gap-4 overflow-hidden rounded-lg border border-none border-zinc-800 bg-transparent md:gap-0 md:bg-zinc-900 md:pr-80 md:shadow-lg">
          <div className="overflow-hidden rounded-lg border border-zinc-800 shadow-lg md:flex-1 md:rounded-none">
            <Video />
          </div>
          <aside className="bottom-0 right-0 top-0 w-full divide-y-2 divide-zinc-900 overflow-y-auto rounded-lg bg-zinc-900 scrollbar-thin scrollbar-track-zinc-950 scrollbar-thumb-zinc-800 md:absolute md:w-80 md:rounded-none md:border-l md:border-zinc-800">
            {course?.modules ? (
              course?.modules.map((module, index) => {
                return (
                  <Module
                    key={module.id}
                    moduleIndex={index}
                    title={module.title}
                    lessonsAmount={module.lessons.length}
                  />
                );
              })
            ) : (
              <ModuleSkeleton />
            )}
          </aside>
        </main>
      </div>
    </div>
  );
}
