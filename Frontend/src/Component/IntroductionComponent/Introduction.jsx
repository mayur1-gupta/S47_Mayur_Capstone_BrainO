import React, { useState, useEffect } from "react";
import "./Introduction.css"

function Introduction() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsVisible(true), 1000); // Adjust delay as needed
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
    <div className="welcome-container">
      <h1 className={isVisible ? "welcome-text visible" : "welcome-text"}>Welcome!</h1>
      <br />
      <p className={isVisible ? "welcome-x margin" : "welcome-x"}>Get ready to experience something amazing.</p>
      <div className={isVisible ? "introduction visible" : "introduction"}>
        <h1 className="introductions">Introduction</h1>
        <p className="introduction-text">
           The user will create the account and log in successfully to access the features.
            <br />
            <br />
           There will be mainly four buttons, the first button is to see the Ranking, the second button is to
            start the test, the third button is for learning the topic and the fourth button is for creating the to-do 
            list of Qun. 
            <br />
            <br />
            A list of subjects will be displayed with checkpoints and a two-button one Btn for the 
            description of the topic and a video or resource link and the second Btn for starting the test
            <br />
            <br />
            Qun will appear with four options select the option and click on the next button after 6 Qun results will 
            be displayed on the basis of the results your ranking will be marked as there is one twist one checkpoint one time.
            <br />
        </p>
      </div>
    </div>
    </>
  );
}

export default Introduction;












