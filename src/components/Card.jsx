export default function Card({ pokeImg, pokeName, onClick }) {
  return (
    <div className="card">
      <img src={pokeImg} alt={pokeName} onClick={onClick} />
      <p>{pokeName}</p>
    </div>
  );
}
