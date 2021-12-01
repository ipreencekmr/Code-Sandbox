import "./DialogueComponent.css";

export default function DialogueComponent({ open, children }) {
  return (
    <div className="DialogueComponent">
      {open === true ? (
        <div className="background">
          <div className="dialog">{children}</div>
        </div>
      ) : null}
    </div>
  );
}
