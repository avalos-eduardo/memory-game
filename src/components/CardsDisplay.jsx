export default function CardsDisplay({ children, message }) {
  return (
    <>
      <div className="cards-display">{children}</div>
      <p className="message">{message}</p>
    </>
  );
}
