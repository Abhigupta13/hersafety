import React, { useState } from "react";
import "./Chatbot.css";

const Chatbot = () => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [responses, setResponses] = useState({});

  const questions = [
    "Consent Form",
    "For Whom You are Sharing For?",
    "Please tell us the gender",
    "Please Share the Age of the victim ?",
    "Please share Incident Here",
    "Can you tell us what happened?",
    "Select type of violence experienced",
    "Have the incident been reported to police?",
    "Please tell us where the incident took place",
  ];

  const handleNext = (response) => {
    setResponses({ ...responses, [questionIndex]: response });
    setQuestionIndex(questionIndex + 1);
  };

  const renderQuestion = () => {
    switch (questionIndex) {
      case 0:
        return (
          <div className="chatbot-question">
            <p className="chatbot-question-text">{questions[questionIndex]}</p>
            <div className="chatbot-options">
              <button className="chatbot-option" onClick={() => handleNext("Yes")}>Yes</button>
              <button className="chatbot-option" onClick={() => handleNext("No")}>No</button>
            </div>
          </div>
        );
      case 1:
        return (
          <div className="chatbot-question">
            <p className="chatbot-question-text">{questions[questionIndex]}</p>
            <div className="chatbot-options">
              <input type="text" className="chatbot-text-input" onChange={(e) => handleNext(e.target.value)} />
            </div>
          </div>
        );
      case 2:
        return (
          <div className="chatbot-question">
            <p className="chatbot-question-text">{questions[questionIndex]}</p>
            <div className="chatbot-options">
              <select className="chatbot-select" onChange={(e) => handleNext(e.target.value)}>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="chatbot-question">
            <p className="chatbot-question-text">{questions[questionIndex]}</p>
            <div className="chatbot-options">
              <input type="number" className="chatbot-text-input" onChange={(e) => handleNext(e.target.value)} />
            </div>
          </div>
        );
      case 4:
        return (
          <div className="chatbot-question">
            <p className="chatbot-question-text">{questions[questionIndex]}</p>
            <div className="chatbot-options">
              <textarea className="chatbot-textarea" onChange={(e) => handleNext(e.target.value)} />
            </div>
          </div>
        );
      case 5:
        return (
          <div className="chatbot-question">
            <p className="chatbot-question-text">{questions[questionIndex]}</p>
            <div className="chatbot-options">
              <textarea className="chatbot-textarea" onChange={(e) => handleNext(e.target.value)} />
            </div>
          </div>
        );
      case 6:
        return (
          <div className="chatbot-question">
            <p className="chatbot-question-text">{questions[questionIndex]}</p>
          
        <div className="chatbot-options">
          <select className="chatbot-select" onChange={(e) => handleNext(e.target.value)}>
            <option value="physical">Physical Violence</option>
            <option value="sexual">Sexual Violence</option>
            <option value="emotional">Emotional Violence</option>
            <option value="financial">Financial Violence</option>
            <option value="digital">Digital Violence</option>
          </select>
        </div>
      </div>
    );
  case 7:
    return (
      <div className="chatbot-question">
        <p className="chatbot-question-text">{questions[questionIndex]}</p>
        <div className="chatbot-options">
          <button className="chatbot-option" onClick={() => handleNext("Yes")}>Yes</button>
          <button className="chatbot-option" onClick={() => handleNext("No")}>No</button>
        </div>
      </div>
    );
  case 8:
    return (
      <div className="chatbot-question">
        <p className="chatbot-question-text">{questions[questionIndex]}</p>
        <div className="chatbot-options">
          <input type="text" className="chatbot-text-input" onChange={(e) => handleNext(e.target.value)} />
        </div>
      </div>
    );
  default:
    return <p className="chatbot-thankyou">Thank you for your responses.</p>;
}
};

return <div className="chatbot-container">{renderQuestion()}</div>;
};

export default Chatbot;