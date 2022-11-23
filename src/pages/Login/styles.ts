import styled from "styled-components";

export const ContainerLogin = styled.div`
  width: fit-content;
  height: fit-content;
  margin: 60px auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 30px;

  padding: 0 20px;

  animation: 5s visibility;

  @keyframes visibility {
    to {
      opacity: 1;
    }
    from {
      opacity: 0;
    }
  }
`;

export const FormArea = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 10px;
`;
