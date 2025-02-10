import { useState, useEffect } from "react";
import "./App.css";
import Confetti from "react-confetti";
import { useParams } from "react-router-dom";
import constants, { CONSTANTS } from "./constants";

function App() {
  const [yesClicked, setYesClicked] = useState(false);
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const [noButtonMoved, setNoButtonMoved] = useState(false);
  const [noClicked, setNoClicked] = useState(false);
  const { name } = useParams();

  useEffect(() => {
    const yesButton = document.querySelector(".yes-button");
    if (yesButton) {
      const yesButtonRect = yesButton.getBoundingClientRect();
      setNoButtonPosition({
        x: yesButtonRect.right + 10,
        y: yesButtonRect.top,
      });
    }
  }, []);

  useEffect(() => {
    let timeoutId: number;
    if (noClicked) {
      timeoutId = setTimeout(() => {
        setNoClicked(false);
      }, 2000);
    }
    return () => clearTimeout(timeoutId);
  }, [noClicked]);

  const handleNoHover = () => {
    document.body.style.cursor = "url('/no.png'), auto";
    const buttonWidth = 100;
    const buttonHeight = 50;
    const maxX = window.innerWidth - buttonWidth;
    const maxY = window.innerHeight - buttonHeight;
    const x = Math.random() * maxX;
    const y = Math.random() * maxY;
    setNoButtonPosition({ x, y });
    setNoButtonMoved(true);
  };

  const handleNoClick = () => {
    setNoClicked(true);
  };

  const handleYesHover = () => {
    document.body.style.cursor = "url('/yes-hover.png'), auto";
  };

  const handleYesClick = () => {
    setYesClicked(true);
    document.body.style.cursor = "url('/celebration.png'), auto";
    playAudio();
  };

  const playAudio = () => {
    const audio = new Audio("/happihappihappi.mp3");
    audio.play();
    audio.loop = true;
    audio.volume = 0.5;
  };

  if (noClicked) {
    return (
      <div className="container">
        <h1
          className="title"
          dangerouslySetInnerHTML={{ __html: CONSTANTS.CHEATING_MESSAGE }}
        ></h1>
      </div>
    );
  }

  return (
    <div className="container">
      {!yesClicked && (
        <h1 className="title">
          {name
            ? CONSTANTS.PROPOSALPREFIX.WITHNAME(name)
            : constants.PROPOSALPREFIX.WITHOUTNAME}{" "}
          {CONSTANTS.PROPOSALSUFFIX}{" "}
        </h1>
      )}
      {!yesClicked ? (
        <div className="buttons">
          <button
            className="yes-button"
            onClick={handleYesClick}
            onMouseEnter={handleYesHover}
          >
            {CONSTANTS.BUTTONS.YES}
          </button>
          <button
            className="no-button"
            onMouseEnter={handleNoHover}
            onClick={handleNoClick}
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
            {CONSTANTS.BUTTONS.NO}
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
            <img src="/Dance-Cat.gif" alt="Happy Cat" />
            <h1>{CONSTANTS.CELEBRATION.TITLE}</h1>
            <p className="love-message">
              {CONSTANTS.CELEBRATION.MESSAGE.map((line, index) => (
                <span key={index}>
                  {line}
                  <br />
                </span>
              ))}
            </p>{" "}
          </div>
        </>
      )}
    </div>
  );
}

export default App;
