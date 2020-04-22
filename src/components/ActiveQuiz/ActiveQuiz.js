import React from "react";
import classes from './ActiveQuiz.module.css'
import AswersList from "./AswersList/AswersList";

const ActiveQuiz = props => (
  <div className={classes.activeQuiz}>
    <p className={classes.Question}>
      <span>
        <strong>{props.questionNumber}.</strong>&nbsp;
        {props.question}
      </span>

      <small>{`${props.questionNumber} из ${props.quizLenth}`}</small>
    </p>

    <AswersList
      state={props.state}
      answers={props.answers}
      onAnswerClick={props.onAnswerClick}
    />
  </div>
);

export default ActiveQuiz;
