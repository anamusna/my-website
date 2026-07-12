import React, { memo } from "react";

const VIDEO_SRC_PATTERN = /\.(mp4|webm|ogg|mov|avi)(?:[?#]|$)/i;

export const isVideoSrc = (src?: string): boolean =>
  VIDEO_SRC_PATTERN.test(src || "");

interface StoryMediaProps {
  src: string;
  alt?: string;
  className?: string;
}

const DEFAULT_MEDIA_CLASS =
  "w-full h-full object-contain rounded-lg border border-light-border/55 dark:border-dark-border/40 bg-black";

const StoryMedia: React.FC<StoryMediaProps> = memo(({ src, alt, className }) => {
  const mediaClass = className || DEFAULT_MEDIA_CLASS;

  if (isVideoSrc(src)) {
    return (
      <video
        src={src}
        controls
        playsInline
        preload="metadata"
        className={mediaClass}
        aria-label={alt || "Story video"}
      />
    );
  }

  return (
    <img
      src={src}
      alt={alt || "Story content"}
      loading="lazy"
      className={mediaClass}
    />
  );
});

StoryMedia.displayName = "StoryMedia";

export default StoryMedia;
