export default function Card({ pokeImg, pokeName, onClick }) {
  return (
    <div className="card">
      <img
        className="poke-image"
        src={pokeImg}
        alt={pokeName}
        onClick={onClick}
      />
      <p className="poke-name">{pokeName.toUpperCase()}</p>
    </div>
  );
}
