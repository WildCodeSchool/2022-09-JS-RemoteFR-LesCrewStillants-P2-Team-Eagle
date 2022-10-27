import { useState } from "react";
import "./Faq.css";

function Faq() {
  const [isHiding, setIsHiding] = useState(false);

  // Function to hide/show the change name Area.
  function handleHide(event) {
    event.preventDefault();
    setIsHiding(!isHiding);
  }

  return (
    <div className="Faq">
      <p onClick={handleHide} aria-hidden="true">
        Faq{" "}
      </p>
      <p className={isHiding === true ? "visible" : "hidden"}>
        The Toasts emojis we used are from an illustrator called "June Design"
        on flaticon.{" "}
        <a
          href="https://www.flaticon.com/fr/auteurs/june-design"
          target="_blank"
          rel="noreferrer"
        >
          Click here
        </a>{" "}
        to see all her design.
      </p>
    </div>
  );
}

export default Faq;
