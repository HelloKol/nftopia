import React from "react";
import Image from "next/image";

export default function ImageTag({
  src,
  alt = "",
  objectFit = "cover",
  quality,
  priority,
}: {
  src: string;
  alt?: string;
  objectFit?: string;
  quality?: number;
  priority?: boolean;
}) {
  return (
    <div className="relative w-full h-full">
      <Image
        src={src}
        alt={alt}
        objectFit={objectFit}
        fill={true}
        quality={quality}
        priority={priority}
      />
    </div>
  );
}
