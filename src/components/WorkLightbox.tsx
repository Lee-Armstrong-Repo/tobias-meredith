"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type WorkLightboxProps = {
  src: string;
  alt: string;
  title: string;
  unoptimized?: boolean;
};

export function WorkLightbox({
  src,
  alt,
  title,
  unoptimized = false,
}: WorkLightboxProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) {
      return;
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        className="work-detail__media"
        onClick={() => setOpen(true)}
        aria-label={`View larger image of ${title}`}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 859px) 100vw, 55vw"
          unoptimized={unoptimized}
          priority
        />
        <span className="work-detail__zoom">Tap to enlarge</span>
      </button>

      {open ? (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`${title} enlarged`}
          onClick={() => setOpen(false)}
        >
          <button
            type="button"
            className="lightbox__close"
            onClick={() => setOpen(false)}
            aria-label="Close enlarged image"
          >
            Close
          </button>
          <div
            className="lightbox__image"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={src}
              alt={alt}
              fill
              sizes="100vw"
              unoptimized={unoptimized}
              priority
            />
          </div>
        </div>
      ) : null}
    </>
  );
}
