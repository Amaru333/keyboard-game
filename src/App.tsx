import React from "react";
import "./App.css";
import { getRandomEnabledKey, keyboardCharacters } from "./keyboardCharacters";

function App() {
  const [randomKey, setRandomKey] = React.useState<string>();
  const [selectedIncorrectKey, setSelectedIncorrectKey] = React.useState("");
  const [score, setScore] = React.useState(0);
  const [streak, setStreak] = React.useState(0);
  const [wrongCount, setWrongCount] = React.useState(0);

  const [endTime, setEndTime] = React.useState<number>(Date.now() + 60000);
  const [remainingMs, setRemainingMs] = React.useState(60000);
  const [isTimerRunning, setIsTimerRunning] = React.useState(false);

  const [timeline, setTimeline] = React.useState<Array<"y" | "n">>([]);

  React.useEffect(() => {
    let requestId: number;

    const update = () => {
      if (!isTimerRunning) return;
      const now = Date.now();
      const diff = endTime - now;

      if (diff <= 0) {
        setRemainingMs(0);
        setIsTimerRunning(false);
      } else {
        setRemainingMs(diff);
        requestId = requestAnimationFrame(update);
      }
    };

    if (isTimerRunning) {
      requestId = requestAnimationFrame(update);
    }

    return () => {
      if (requestId) {
        cancelAnimationFrame(requestId);
      }
    };
  }, [isTimerRunning, endTime]);

  const seconds = (remainingMs / 1000).toFixed(2);

  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!isTimerRunning) return;

      if (randomKey && event.key.toLowerCase() === randomKey.toLowerCase()) {
        setScore((prev) => prev + 1);
        setStreak((prev) => prev + 1);
        setSelectedIncorrectKey("");
        setTimeline((prev) => [...prev, "y"]);
        setRandomKey(getRandomEnabledKey());
      } else {
        setSelectedIncorrectKey(event.key);
        setStreak(0);
        setTimeline((prev) => [...prev, "n"]);
        setWrongCount((prev) => prev + 1);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [randomKey, isTimerRunning]);

  const handleReset = () => {
    setEndTime(Date.now() + 60000); // Set a new end time 60 seconds from now
    setRemainingMs(60000);
    setIsTimerRunning(true);
    setScore(0);
    setStreak(0);
    setWrongCount(0);
    setTimeline([]);
    setRandomKey(getRandomEnabledKey());
  };

  return (
    <div>
      <p>time remaining</p>
      <p style={{ fontSize: "32px", marginBottom: "24px" }}>{seconds}s</p>
      <button
        onClick={handleReset}
        style={{
          marginBottom: "24px",
        }}
        disabled={isTimerRunning}
      >
        Start
      </button>
      <div style={{ display: "flex", flexDirection: "row", columnGap: "28px" }}>
        <div>
          <div
            style={{
              backgroundColor: "black",
              borderRadius: "8px",
              padding: "8px",
            }}
          >
            {keyboardCharacters.map((row, rowIndex) => (
              <div
                key={rowIndex}
                style={{
                  display: "flex",
                  gap: "5px",
                  marginBottom: "5px",
                  fontSize: "14px",
                  justifyContent: "center",
                }}
              >
                {row.map((key, keyIndex) => (
                  <div
                    key={keyIndex}
                    className={
                      key.key === randomKey
                        ? "glow correct"
                        : key.key === selectedIncorrectKey
                        ? "glow incorrect"
                        : "no-glow"
                    }
                    style={{
                      width: `${key.width * 50}px`,
                      height: "50px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: "#2B2B2B",
                      borderRadius: "4px",
                    }}
                  >
                    {key.key.length > 1 ? key.key.toLowerCase() : key.key.toUpperCase()}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div style={{ width: "240px" }}>
          <p style={{ fontSize: "16px" }}>your score</p>
          <p style={{ fontSize: "32px" }}>{score}</p>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              columnGap: "2px",
              rowGap: "2px",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
              minHeight: "40px",
            }}
          >
            {timeline.map((value, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: value === "y" ? "green" : "#fd0202",
                  width: "100%",
                  maxWidth: "2px",
                  height: "6px",
                }}
              ></div>
            ))}
          </div>
          <p style={{ fontSize: "16px" }}>your streak 🔥</p>
          <p style={{ fontSize: "32px", marginBottom: "24px" }}>{streak}</p>
          <p style={{ fontSize: "16px" }}>accuracy 🎯</p>
          <p style={{ fontSize: "32px", marginBottom: "24px" }}>
            {score === 0 ? 0 : ((score / (score + wrongCount)) * 100).toFixed(2)}%
          </p>
          <button onClick={handleReset}>Reset Timer</button>
        </div>
      </div>
    </div>
  );
}

export default App;
