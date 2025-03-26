export default function Scorekeeper({score = 0, highScore = 0}){
    return (
        <div className="scorekeeper">
            <p>Score: {score}</p>
            <p>High Score: {highScore}</p>
        </div>
    )
}