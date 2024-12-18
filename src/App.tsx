import React from "react";
import "./App.css";
import { getRandomEnabledKey, keyboardCharacters } from "./keyboardCharacters";

function App() {
  const [randomKey, setRandomKey] = React.useState(getRandomEnabledKey());
  const [selectedIncorrectKey, setSelectedIncorrectKey] = React.useState("");
  const [score, setScore] = React.useState(0);
  const [streak, setStreak] = React.useState(0);
  const [wrongCount, setWrongCount] = React.useState(0);
  const [remainingMs, setRemainingMs] = React.useState(60000);
  const [isTimerRunning, setIsTimerRunning] = React.useState(true);

  const [timeline, setTimeline] = React.useState<Array<"y" | "n">>([]);

  React.useEffect(() => {
    if (!isTimerRunning || remainingMs === 0) return;

    const interval = setInterval(() => {
      setRemainingMs((prev) => {
        const newValue = prev - 10;
        if (newValue <= 0) {
          clearInterval(interval);
          setIsTimerRunning(false);
          return 0;
        }
        return newValue;
      });
    }, 10);

    return () => clearInterval(interval);
  }, [isTimerRunning, remainingMs]);

  const seconds = (remainingMs / 1000).toFixed(2);

  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (isTimerRunning) {
        if (event.key.toLowerCase() === randomKey.toLowerCase()) {
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
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [randomKey, isTimerRunning]);
  return (
    <div>
      <p style={{}}>time remaining</p>
      <p style={{ fontSize: "32px", marginBottom: "24px" }}>{seconds}s</p>
      <div style={{ display: "flex", flexDirection: "row", columnGap: "28px" }}>
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
          <div>
            {score} || {streak} || {wrongCount}
          </div>
          <div>{randomKey.toUpperCase()}</div>
        </div>
      </div>
    </div>
  );
}

export default App;
