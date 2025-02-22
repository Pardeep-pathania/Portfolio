

import React, { useEffect, useState } from 'react';

function TextChange() {
  const texts = [
    "Hi, I'm Pardeep Singh Pathania",
    "Hi, I'm Frontend Developer",
    "Hi, I'm Web Developer",
    "Hi, I'm Fullstack Developer"
  ];

  const [currentText, setCurrentText] = useState("");
  const [endValue, setEndValue] = useState(0);
  const [isForward, setIsForward] = useState(true);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentText(texts[index].substring(0, endValue));

      if (isForward) {
        setEndValue((prev) => prev + 1);
      } else {
        setEndValue((prev) => prev - 1);
      }

      // If the endValue exceeds the length of the current text, switch to backward
      if (endValue >= texts[index].length) {
        setIsForward(false);
      }

      // If the endValue is less than or equal to 0, switch to the next text
      if (endValue <= 0) {
        setIsForward(true);
        setIndex((prev) => (prev + 1) % texts.length); // Cycle through texts
      }
    }, 50); // Adjust the interval time as needed

    return () => clearInterval(intervalId);
  }, [endValue, isForward, index, texts]);

  return (
    <div className='transition ease duration-300'>
      {currentText}
    </div>
  );
}

export default TextChange;