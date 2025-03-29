export default function CardsDisplay({ children }) {
  return (
    <>
      <div className="cards-display">{children}</div>
      <p className="footer">
        Welcome to the Pokémon Memory Game! Try not to click on the same Pokémon
        more than once!
      </p>
    </>
  );
}
