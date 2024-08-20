import { Fragment, useEffect, useState } from "react";
import styles from "./start-test.module.css";
import CustomButton from "../button/button";
import newton from "../../images/scientists/newton.jpeg";
import { QUESTIONS_BY_SUBJECT } from "../../const";
import { useNavigate } from "react-router-dom";
import Dialog from "@mui/material/Dialog";
import Greeting from "../greeting/greeting";

export default function StartTest() {
  // use states to collect the test related data
  const [userName, setUserName] = useState("");
  const [questions, setQuestions] = useState([]);
  const [currentQueIndex, setCurrentQueIndex] = useState(0);
  const [answer, setAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [isTestSubmitted, setIsTestSubmitted] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    // this use effect has empty array in dependency
    // so it will run once when user will come in this page

    // collecting the user details (name, selected subject that we had stored)
    const user = JSON.parse(localStorage.getItem("userDetails") || "{}");
    const { selectedSub = "", name = "" } = user || {};

    // reading the user name and selected subject

    if (!selectedSub) {
      navigate("/");
      return;
    }
    setUserName(name);
    // setting user name

    const questions = QUESTIONS_BY_SUBJECT?.[user?.selectedSub];
    // getting test questions depend on selected subject
    // and setting the questions in use state
    setQuestions(questions);
  }, []);

  const {
    question = "",
    options = [],
    correctAns = "",
    supportImage = "",
  } = questions?.[currentQueIndex] || {};
  // initially it will be like questions[0]

  function handleSlectAnswer(e) {
    setAnswer(e.target.value);
    // setting the answer selected by the user .
  }

  function handleClickNext() {
    // calculating the score ans setting updating it to useState
    const newScore = score + (answer == correctAns ? 2 : -1);
    setScore(newScore);

    // if last question
    // setting test submit true to open modal
    if (currentQueIndex === 4) {
      setIsTestSubmitted(true);
      return;
    }

    // if not last questions update current question index to prev + 1
    setCurrentQueIndex(currentQueIndex + 1);
  }

  //  when test submitted will be true on submit last question
  // this mui modal will get open
  if (isTestSubmitted) {
    return (
      <Dialog
        open={true}
        PaperProps={{
          style: {
            width: "30%",
          },
        }}
      >
        <Greeting
          data={{
            score,
            userName,
          }}
        />
      </Dialog>
    );
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <div className={styles.leftSec}>
          <p className={styles.question}>{question}</p>
          <div className={styles.options}>
            {options.map((option, index) => (
              <div key={index}>
                <input
                  type="radio"
                  value={option}
                  name={currentQueIndex}
                  onChange={handleSlectAnswer}
                  checked={option === answer}
                />
                <label>{option}</label>
              </div>
            ))}
          </div>
          <CustomButton
            customStyle={styles.btnText}
            btnText={currentQueIndex === 4 ? "Submit" : "Next"}
            handlerFunction={handleClickNext}
          />
        </div>
        <div className={styles.rightSec}>
          {supportImage && <img src={newton} className={styles.supportImage} />}
        </div>
      </div>
    </div>
  );
}
