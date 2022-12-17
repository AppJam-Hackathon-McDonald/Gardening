import { Navigate, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Black, Green } from "../../../styles/theme";
import { flower } from "../../assets/constants/flower";
import { Img_Back } from "../../assets/images";

function ChooseFlower() {
  const arr = Object.entries(flower);
  return (
    <>
      <Title>
        전하고 싶은
        <HighlightsText> 꽃</HighlightsText>
        을 <br />
        골라주세요
      </Title>
      <ButtonContainer>
        {arr.map((value) => (
          <Button
            icon={value[1].icon}
            mean={value[1].mean}
            name={value[1].name}
          />
        ))}
      </ButtonContainer>
      <BackButton src={Img_Back} />
    </>
  );
}

interface ButtonProps {
  name: string;
  icon: string;
  mean: string;
}

function Button({ icon, mean, name }: ButtonProps) {
  const navigate = useNavigate();

  return (
    <ButtonWrapper
      onClick={() => {
        localStorage.setItem("flower", JSON.stringify({ name, icon, mean }));
        navigate("letter");
      }}
    >
      <h1>{icon}</h1>
      <h2>{mean}</h2>
      <p>{name}</p>
    </ButtonWrapper>
  );
}

export default ChooseFlower;

const ButtonWrapper = styled.div`
  position: relative;
  width: 150px;
  height: 150px;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  > h1 {
    position: absolute;
    width: 55px;
    height: 55px;
    left: 44px;
    top: 11px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 55px;
    line-height: 67px;

    color: #000000;
  }
  > h2 {
    position: absolute;
    width: 75px;
    height: 29px;
    left: 37px;
    top: 85px;
    font-style: normal;
    font-weight: 700;
    font-size: 25px;
    line-height: 29px;
    text-align: center;
    color: #626262;
  }
  > p {
    position: absolute;
    width: 75px;
    height: 18px;
    left: 37px;
    top: 117px;
    font-style: normal;
    font-weight: 300;
    font-size: 15px;
    line-height: 18px;
    text-align: center;
    color: #626262;
  }
`;

const Title = styled.div`
  position: fixed;
  top: 111px;
  left: 28px;
  font-size: 40px;
  color: ${Black};
  font-weight: 900;
`;
const HighlightsText = styled.span`
  color: ${Green};
`;

const ButtonContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  gap: 27px;
  flex-wrap: wrap;
  height: 450px;
  overflow-y: scroll;
  top: 240px;
  left: 33px;
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
