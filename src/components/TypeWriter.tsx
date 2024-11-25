import { useEffect, useState } from "react";

type Text = {
  text: string;
};

const TypeWriter: React.FC<Text> = ({ text }) => {
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timer = setTimeout(() => {
        setDisplayText((current) => current + text[index]);
        setIndex((i) => i + 1);
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [index, text]);

  return <span>{displayText}</span>;
};

export default TypeWriter;
