import { FormEvent } from "react";

import { connect } from "react-redux";

import { useNavigate } from "react-router-dom";

import { Input } from "components/Input";
import { Button } from "components/Button";

import { handleSaveQuestion } from "redux/actions/questions";

import { NewQuestionContainer } from "./styles";

function NewQuestion({ dispatch }: any) {
  const navigate = useNavigate();

  function onSubmitQuestion(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const optionOneText = e.currentTarget["optionOne"].value;
    const optionTwoText = e.currentTarget["optionTwo"].value;

    dispatch(handleSaveQuestion(optionOneText, optionTwoText)).then(() => {
      navigate("/dashboard");
    });
  }

  return (
    <NewQuestionContainer>
      <h1>New Poll:</h1>
      <form onSubmit={onSubmitQuestion}>
        <Input name="optionOne" label="First question" required />
        <Input name="optionTwo" label="Second question" required />
        <Button type="submit" label="Send" />
      </form>
    </NewQuestionContainer>
  );
}

export default connect()(NewQuestion);
