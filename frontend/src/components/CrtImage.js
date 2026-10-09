function CrtImage({ src, alt, caption, className = "", imgClassName = "" }) {
  return (
    <figure className={`m-0 ${className}`}>
      <div className="crt-img" tabIndex={caption ? 0 : undefined}>
        <img src={src} alt={alt} loading="lazy" decoding="async" className={imgClassName} />
      </div>
      {caption && <figcaption className="text-dim text-xs mt-2">{caption}</figcaption>}
    </figure>
  );
}

export default CrtImage;
