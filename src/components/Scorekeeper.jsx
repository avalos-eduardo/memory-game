export default function Scorekeeper({ score, highScore }) {
  return (
    <div className="scorekeeper">
      <p>Score: {score}</p>
      <p>High Score: {highScore}</p>
    </div>
  );
}
