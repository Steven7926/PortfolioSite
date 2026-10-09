function Window({ title, meta, children, className = "", bodyClassName = "p-4 phone:p-6", as: Tag = "section", ...rest }) {
  return (
    <Tag className={`term ${className}`} {...rest}>
      <div className="term-bar">
        <div className="term-lights" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <span className="truncate">{title}</span>
        {meta && <span className="ml-auto shrink-0">{meta}</span>}
      </div>
      <div className={bodyClassName}>{children}</div>
    </Tag>
  );
}

export default Window;
