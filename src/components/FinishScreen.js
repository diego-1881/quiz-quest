import { useQuiz } from "../contexts/QuizContext";

function FinishScreen() {
  const { points, maxPossiblePoints, highscore, dispatch } = useQuiz();

  const percentage = (points / maxPossiblePoints) * 100;

  let emoji;
  if (percentage === 100) {
    emoji = "🥇";
  }
  if (percentage >= 80 && percentage < 100) {
    emoji = "🥈";
  }
  if (percentage >= 60 && percentage < 80) {
    emoji = "🥉";
  }
  if (percentage < 60) {
    emoji = "🤨";
  }
  if (percentage === 0) {
    emoji = "💩";
  }

  return (
    <>
      <p className="result">
        <span>{emoji}</span>
        You scored {points} out of {maxPossiblePoints} ({Math.ceil(percentage)}%)
      </p>
      <p className="highscore">(Highscore: {highscore} points)</p>
      <button className="btn btn-ui" onClick={() => dispatch({ type: "restart" })}>
        Restart quiz
      </button>
    </>
  );
}

export default FinishScreen;
