import { memo, useEffect, useState } from "react";
import styles from "./ImageFullscreenViewer.module.css";

type ImageFullscreenViewerProps = {
  src: string;
  alt: string;
  imageClassName?: string;
};

const ImageFullscreenViewer = ({
  src,
  alt,
  imageClassName,
}: ImageFullscreenViewerProps) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

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
        className={styles.trigger}
        onClick={() => setOpen(true)}
        aria-label="Xem ảnh toàn màn hình"
      >
        <img
          src={src}
          alt={alt}
          className={imageClassName}
          loading="lazy"
          decoding="async"
        />
      </button>

      {open && (
        <div
          className={styles.overlay}
          role="dialog"
          aria-modal="true"
          onClick={() => setOpen(false)}
        >
          <button
            type="button"
            className={styles.closeButton}
            onClick={() => setOpen(false)}
            aria-label="Đóng xem ảnh"
          >
            ×
          </button>

          <img
            src={src}
            alt={alt}
            className={styles.fullscreenImage}
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}
    </>
  );
};

export default memo(ImageFullscreenViewer);
