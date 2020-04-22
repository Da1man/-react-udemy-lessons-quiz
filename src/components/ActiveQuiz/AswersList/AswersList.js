import React from "react";
import classes from './AswersList.module.css';
import AnswerItem from "./AnswerItem/AnswerItem";

const AswersList = props => {
  return (
    <ul className={classes.AswersList}>
      {props.answers.map((answer, index) => {
        return (
          <AnswerItem
            key={index}
            answer={answer}
            onAnswerClick={props.onAnswerClick}
            state={props.state ? props.state[answer.id] : null}
          />
        )
      })}
      <li></li>
    </ul>
  )
};

export default AswersList
