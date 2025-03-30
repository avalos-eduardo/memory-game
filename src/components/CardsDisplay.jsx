export default function CardsDisplay({ children, message }) {
  return (
    <div className="display-wrapper">
      <div className="cards-display">{children}</div>
      <p className="message">{message}</p>
    </div>
  );
}
