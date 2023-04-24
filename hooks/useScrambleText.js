import { useRef, useState, useEffect } from "react";

const useScrambleText = (text) => {
  const textBoxRef = useRef(null);
  const specialCharacters = [
    "!",
    "§",
    "$",
    "%",
    "&",
    "/",
    "(",
    ")",
    "=",
    "?",
    "_",
    "<",
    ">",
    "^",
    "°",
    "*",
    "#",
    "-",
    ":",
    ";",
    "~",
  ];
  const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
  let newStringSplit = "";
  const time = 110;
  let count = 0,
    j = 0;
  const delayAnimation = 2;

  const [triggerScramble, setTriggerScramble] = useState(false);

  useEffect(() => {
    const startScrambleText = () => {
      if (!textBoxRef.current) return;
      const stringSplit = text.split("");
      textBoxRef.current.style.width = `${stringSplit.length}ch`;
      textBoxRef.current.style.animation = `typing ${
        (time * stringSplit.length) / 1000
      }s steps(${stringSplit.length})`;

      const interval = setInterval(() => {
        newStringSplit = "";

        for (let i = 0; i <= stringSplit.length - 1; i++) {
          if (i <= j && count >= stringSplit.length + delayAnimation) {
            newStringSplit += stringSplit[i];
          } else {
            newStringSplit +=
              specialCharacters[random(0, specialCharacters.length - 1)];
          }
        }
        if (!textBoxRef.current.textContent) return;
        textBoxRef.current.textContent = newStringSplit;
        count++;

        if (count >= stringSplit.length + delayAnimation) {
          j++;
          if (j >= stringSplit.length) {
            clearInterval(interval);
          }
        }
      }, time);
      return () => clearInterval(interval);
    };

    if (triggerScramble) {
      startScrambleText();
    }
  }, [triggerScramble, text]);

  useEffect(() => {
    setTriggerScramble(true);
  }, []);

  return { textBoxRef };
};

export default useScrambleText;
