// filepath: /home/falguni/Desktop/small-projects/be-my-valentine/src/App.tsx
import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [yesClicked, setYesClicked] = useState(false);
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const [noButtonMoved, setNoButtonMoved] = useState(false);

  useEffect(() => {
    const yesButton = document.querySelector(".yes-button");
    if (yesButton) {
      const yesButtonRect = yesButton.getBoundingClientRect();
      setNoButtonPosition({
        x: yesButtonRect.right + 10, // 10px gap between buttons
        y: yesButtonRect.top,
      });
    }
  }, []);

  const handleNoHover = () => {
    const buttonWidth = 100; // Approximate width of the button
    const buttonHeight = 50; // Approximate height of the button
    const maxX = window.innerWidth - buttonWidth;
    const maxY = window.innerHeight - buttonHeight;
    const x = Math.random() * maxX;
    const y = Math.random() * maxY;
    setNoButtonPosition({ x, y });
    setNoButtonMoved(true);
  };

  const handleYesClick = () => {
    setYesClicked(true);
  };

  return (
    <div className="container">
      {!yesClicked && <h1 className="title">Will you be my Valentine? 🌹</h1>}
      {!yesClicked ? (
        <div className="buttons">
          <button className="yes-button" onClick={handleYesClick}>
            Yes
          </button>
          <button
            className="no-button"
            onMouseEnter={handleNoHover}
            style={
              noButtonMoved
                ? {
                    position: "fixed",
                    left: noButtonPosition.x,
                    top: noButtonPosition.y,
                  }
                : {}
            }
          >
            No
          </button>
        </div>
      ) : (
        <div className="celebration">
          <img
            src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExeXl5cTBxbTdwaTZ1ODMwZ2gzbXA5bjRjNXlpd3BvYzl5NDZreDNxaiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/S5h4gvxxc1qlG/giphy.gif"
            alt="Happy Cat"
          />
        </div>
      )}
    </div>
  );
}

export default App;
