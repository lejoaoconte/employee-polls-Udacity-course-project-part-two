import "@testing-library/jest-dom";

import { fireEvent, render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import { Questions } from ".";

const users = {
  sarahedo: {
    id: "sarahedo",
    password: "password123",
    name: "Sarah Edo",
    avatarURL: "https://github.com/sarah.png",
    answers: {
      "8xf0y6ziyjabvozdd253nd": "optionOne",
      "6ni6ok3ym7mf1p33lnez": "optionOne",
      am8ehyc8byjqgar0jgpub9: "optionTwo",
      loxhs1bqm25b708cmbf3g: "optionTwo",
    },
    questions: ["8xf0y6ziyjabvozdd253nd", "am8ehyc8byjqgar0jgpub9"],
  },
};

const questions = {
  "8xf0y6ziyjabvozdd253nd": {
    id: "8xf0y6ziyjabvozdd253nd",
    author: "sarahedo",
    timestamp: 1467166872634,
    optionOne: {
      votes: ["sarahedo"],
      text: "Build our new application with Javascript",
    },
    optionTwo: {
      votes: [],
      text: "Build our new application with Typescript",
    },
  },
};

describe("Questions", () => {
  const setup = () => {
    const component = render(
      <MemoryRouter>
        <Questions
          questions={Object.values(questions)}
          users={Object.values(users)}
        />
      </MemoryRouter>
    );

    expect(component).toMatchSnapshot();

    const questionsComponent = component.getByTestId("questions-test");
    const questionComponentItem = component.getByTestId("questions-item-test");
    const questionItemRender = component.getByText(/Sarah/);

    return {
      questionsComponent,
      questionComponentItem,
      questionItemRender,
      ...component,
    };
  };

  it("Testing render on screen", () => {
    const { questionsComponent, questionComponentItem } = setup();
    expect(questionsComponent).toBeInTheDocument;
    expect(questionComponentItem).toBeInTheDocument;
  });

  it("Test render infos on screen", () => {
    const { questionItemRender } = setup();
    expect(questionItemRender).toBeInTheDocument;
  });

  it("Test onClick element", () => {
    const { questionComponentItem } = setup();

    fireEvent.click(questionComponentItem);
  });
});
