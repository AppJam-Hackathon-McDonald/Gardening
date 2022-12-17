import styled from "styled-components";
import { Img_Back } from "../../assets/images";

function WriteMessage() {
  return (
    <>
      <Title>
        <HighlightsText>메세지</HighlightsText>
        를 <br />
        입력해주세요
      </Title>
      <InputWrapper>
        <Flower>🌻</Flower>
        <p>from</p>
        <input type="text" placeholder="닉네임" />
        <div />
        <textarea placeholder="메세지를 입력해주세요"></textarea>
      </InputWrapper>
      <ConfirmButton>확인</ConfirmButton>
      <BackButton src={Img_Back} />
    </>
  );
}

export default WriteMessage;

const Flower = styled.h1`
  position: absolute;
  z-index: 1;
  right: 20px;
  width: 55px;
  height: 55px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 55px;
  line-height: 67px;

  color: #000000;
`;

const Title = styled.div`
  font-weight: 900;
  font-size: 40px;
  line-height: 47px;
  position: absolute;
  top: 105px;
  left: 26px;
  color: ${({ theme }) => theme.title};
`;
const HighlightsText = styled.span`
  color: ${({ theme }) => theme.button};
`;

const InputWrapper = styled.div`
  border: 1px solid black;
  width: 340px;
  height: 514px;
  left: 20px;
  top: 220px;
  position: absolute;
  background: #ffffff;
  border-radius: 10px;
  padding: 12px;
  > p {
    font-weight: 700;
    font-size: 20px;
    line-height: 23px;
    text-align: center;
    color: #626262;
    position: absolute;
  }
  > input {
    position: absolute;
    top: 43px;
    width: calc(100% - 24px);
    height: 35px;
    font-weight: 700;
    font-size: 30px;
    line-height: 35px;
    border: none;
    outline: none;
    :focus::placeholder {
      opacity: 0;
    }
    ::placeholder {
      color: rgba(98, 98, 98, 0.3);
    }
  }
  > div {
    width: 300px;
    border-top: 2px solid rgba(0, 0, 0, 0.2);
    position: absolute;
    top: 90px;
  }
  > textarea {
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 23px;
    position: absolute;
    width: 300px;
    height: 399px;
    top: 101px;
    border: none;
    outline: none;
    resize: none;
    :focus::placeholder {
      opacity: 0;
    }
    ::placeholder {
      color: rgba(98, 98, 98, 0.3);
    }
  }
`;

const ConfirmButton = styled.button`
  position: absolute;
  width: 258px;
  height: 60px;
  left: 102px;
  top: 766px;
  background: #285430;
  border-radius: 10px;
  font-weight: 700;
  font-size: 25px;
  line-height: 29px;
  text-align: center;

  color: #ffffff;
`;

const BackButton = styled.img`
  position: absolute;
  top: 766px;
  left: 20px;
`;
