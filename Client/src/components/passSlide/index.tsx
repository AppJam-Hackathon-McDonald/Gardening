import { useEffect, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";

function PassSlide() {
  const [toggle, setToggle] = useState(true);
  const Ref = useRef(null);
  const [number, setNumber] = useState("01");
  useEffect(() => {
    if (Ref.current) {
      Ref.current.value = "0";
    }
  }, [Ref.current]);

  return (
    <Background show={toggle}>
      <SlideWrapper show={toggle}>
        <Bar onClick={() => setToggle(false)} />
        <Title>
          <HighlightsText>비밀번호</HighlightsText>
          를 <br />
          입력해주세요
        </Title>
        <InvisibleInput
          type="text"
          ref={Ref}
          onChange={(e) => {
            var regType1 = /^[0-9]*$/;
            const tnum = e.currentTarget.value;
            if (regType1.test(tnum)) {
              if (e.currentTarget.value.length < 1) {
                const num = number.slice(0, number.length - 1);
                setNumber(number.length > 1 ? num : number);
                Ref.current.value = "0";
              } else if (e.currentTarget.value.length > 1) {
                const num = tnum.slice(tnum.length - 1, tnum.length);
                setNumber(number.length > 4 ? number : number.concat(num));
                Ref.current.value = "0";
              }
            } else {
              Ref.current.value = "0";
              return;
            }
          }}
        />
        <InputWrapper onClick={() => Ref.current.focus()}>
          <div>{number[1]}</div>
          <div>{number[2]}</div>
          <div>{number[3]}</div>
          <div>{number[4]}</div>
        </InputWrapper>
        <CancelButton>취소</CancelButton>
        <ConfirmButton>확인</ConfirmButton>
      </SlideWrapper>
    </Background>
  );
}

export default PassSlide;

const Close = keyframes`
  from{
    bottom:0px;
  }
  to{
    bottom:-500px;
  }
`;

const CloseBack = keyframes`
  0%{
    opacity:1;
  }
  99%{
  }
  100%{
    opacity:0;
    visibility:hidden;
  }
`;

const Open = keyframes`
  from{
    bottom:-500px;
  }
  to{
    bottom:0px;
  }
`;

const OpenBack = keyframes`
  0%{
    opacity:0;
  }
  99%{
  }
  100%{
    opacity:1;
    visibility:visible;
  }
`;

const Background = styled.div<{ show: boolean }>`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 99;
  animation: ${(props) => (props.show ? OpenBack : CloseBack)} 0.5s forwards;
`;

const SlideWrapper = styled.div<{ show: boolean }>`
  width: 100%;
  height: 378px;
  background: #ffffff;
  border-radius: 40px 40px 0px 0px;
  position: absolute;
  bottom: 0px;
  animation: ${(props) => (props.show ? Open : Close)} 0.5s forwards;
`;

const Bar = styled.div`
  background: #d9d9d9;
  border-radius: 15px;
  position: absolute;
  width: 83px;
  height: 6px;
  left: 155px;
  top: 11px;
`;
const Title = styled.div`
  font-weight: 900;
  font-size: 30px;
  line-height: 35px;
  position: absolute;
  top: 40px;
  left: 26px;
  color: ${({ theme }) => theme.title};
`;
const HighlightsText = styled.span`
  color: ${({ theme }) => theme.button};
`;

const InvisibleInput = styled.input`
  opacity: 0;
  position: absolute;
  top: -1000px;
`;

const InputWrapper = styled.div`
  position: absolute;
  top: 154px;
  left: 38px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 320px;
  height: 70px;
  > div {
    width: 61px;
    height: 70px;
    background: #d9d9d9;
    padding: 12px;
    text-align: center;
    border-radius: 10px;
    font-size: 30px;
  }
`;

const CancelButton = styled.button`
  position: absolute;
  width: 146px;
  height: 60px;
  left: 26px;
  border: 3px solid #285430;
  font-weight: 700;
  font-size: 25px;
  line-height: 29px;
  text-align: center;
  color: #285430;
  border-radius: 10px;
  bottom: 32px;
`;
const ConfirmButton = styled.button`
  position: absolute;
  width: 146px;
  height: 60px;
  right: 26px;
  border: 3px solid #285430;
  font-weight: 700;
  font-size: 25px;
  line-height: 29px;
  text-align: center;
  color: white;
  background: #285430;
  border-radius: 10px;
  bottom: 32px;
`;
