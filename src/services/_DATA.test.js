import { _saveQuestion, _saveQuestionAnswer } from "./_DATA";

describe("_DATA testing _saveQuestion", () => {
  it("Test _saveQuestion is true", async () => {
    const res = await _saveQuestion({
      author: "sarahedo",
      optionOneText: "option one text test",
      optionTwoText: "option two text test",
    });

    expect(res).toBeTruthy();
  });

  it("Test _saveQuestion is false", async () => {
    const value = undefined;

    const rej = await _saveQuestion({
      author: "sarahedo",
      optionOneText: value,
      optionTwoText: "",
    }).catch((e) => e);

    expect(rej).toBe("Please provide optionOneText, optionTwoText, and author");
  });
});

describe("_DATA testing _saveQuestionAnswer", () => {
  it("Test _saveQuestionAnswer is true", async () => {
    const res = await _saveQuestionAnswer({
      authedUser: "sarahedo",
      qid: "8xf0y6ziyjabvozdd253nd",
      answer: "optionOne",
    });

    expect(res).toBeTruthy();
  });

  it("Test _saveQuestionAnswer is false", async () => {
    const value = undefined;

    const rej = await _saveQuestionAnswer({
      authedUser: "sarahedo",
      qid: value,
      answer: "optionOne",
    }).catch((e) => e);

    expect(rej).toBe("Please provide authedUser, qid, and answer");
  });
});
