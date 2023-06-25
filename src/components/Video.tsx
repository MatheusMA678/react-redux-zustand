import ReactPlayer from "react-player";
import { useCurrentLesson, useStore } from "../zustand-store";

import { Loader2 } from "lucide-react";

export function Video() {
  const { currentLesson } = useCurrentLesson();

  const { next, isLoading, complete } = useStore((store) => {
    return {
      next: store.next,
      isLoading: store.isLoading,
      complete: store.complete,
    };
  });

  const handleVideoEnded = () => {
    complete(true);
    next();
  };

  return (
    <div className="aspect-video w-full bg-zinc-950">
      {isLoading ? (
        <div className="flex h-full items-center justify-center">
          <Loader2 className="h-8 w-8 animate-spin text-zinc-400" />
        </div>
      ) : (
        <ReactPlayer
          height="100%"
          width="100%"
          controls
          playing
          url={`https://www.youtube.com/watch?v=${currentLesson?.id}`}
          onEnded={handleVideoEnded}
        />
      )}
    </div>
  );
}
