// filepath: /home/falguni/Desktop/small-projects/be-my-valentine/src/App.tsx
import { useState, useEffect } from "react";
import "./App.css";
import Confetti from "react-confetti";

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
    document.body.style.cursor = "url('/broken-heart.png'), auto";
  };

  const handleYesHover = () => {
    document.body.style.cursor = "url('/heart-love.png'), auto";
  };

  const handleYesClick = () => {
    setYesClicked(true);
    document.body.style.cursor = "url('/heart.png'), auto";
  };

  return (
    <div className="container">
      {!yesClicked && <h1 className="title">Will you be my Valentine? 🌹</h1>}
      {!yesClicked ? (
        <div className="buttons">
          <button
            className="yes-button"
            onClick={handleYesClick}
            onMouseEnter={handleYesHover}
          >
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
        <>
          <Confetti
            width={window.innerWidth}
            height={window.innerHeight}
            recycle={true}
          />
          <div className="celebration">
            <img
              src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExeXl5cTBxbTdwaTZ1ODMwZ2gzbXA5bjRjNXlpd3BvYzl5NDZreDNxaiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/S5h4gvxxc1qlG/giphy.gif"
              alt="Happy Cat"
            />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
