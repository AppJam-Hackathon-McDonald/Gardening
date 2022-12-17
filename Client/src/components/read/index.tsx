import styled from "styled-components";

function Read() {
  return (
    <Background>
      <Container>
        <p>from</p>
        <h1>나무</h1>
        <h2>동경</h2>
        <h3>해바라기</h3>
        <h4>🌻</h4>
        <h5>
          asdfjklahsdlfkjahsldkfjhaslkdfhklasdjfhlkasdhflkashdfklahsdfkasdf
        </h5>
        <div>
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
        </div>
        <Button>확인</Button>
      </Container>
    </Background>
  );
}

export default Read;

const Background = styled.div`
  z-index: 99;
  width: 100%;
  height: 100%;
  position: absolute;
  background: rgba(0, 0, 0, 0.5);
`;

const Container = styled.div`
  position: absolute;
  width: 340px;
  height: 554px;
  left: 27px;
  top: 130px;
  background: #f2f2f2;
  border-radius: 10px;
  > p {
    position: absolute;
    top: 22px;
    left: 22px;
    font-weight: 400;
    font-size: 25px;
    line-height: 29px;
    color: #626262;
  }
  > h1 {
    position: absolute;
    top: 53px;
    left: 22px;
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 47px;
    text-align: center;
    color: #626262;
  }
  > h2 {
    position: absolute;
    height: 29px;
    right: 77px;
    top: 44px;
    font-style: normal;
    font-weight: 700;
    font-size: 25px;
    line-height: 29px;
    text-align: end;
    color: #626262;
  }
  > h3 {
    position: absolute;
    top: 78px;
    right: 77px;
    font-style: normal;
    font-weight: 300;
    font-size: 15px;
    line-height: 18px;
    text-align: end;
    color: #626262;
  }
  > h4 {
    width: 55px;
    height: 55px;
    position: absolute;
    top: 41px;
    right: 25px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 55px;
    line-height: 67px;

    color: #000000;
  }
  > h5 {
    word-wrap: break-word;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 31px;
    color: #626262;
    position: absolute;
    width: 282px;
    height: 328px;
    top: 113px;
    left: 33px;
  }
  > div {
    position: absolute;
    top: 113px;
    left: 33px;
    width: 282px;
    height: 328px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    > div {
      margin-top: 30px;
      border-top: 1px solid rgba(0, 0, 0, 0.3);
      width: 100%;
    }
  }
`;

const Button = styled.button`
  position: absolute;
  width: 258px;
  height: 51px;
  border: 3px solid #285430;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0);
  font-style: normal;
  font-weight: 700;
  font-size: 25px;
  line-height: 29px;
  text-align: center;
  color: #285430;
  bottom: 21px;
  left: 41px;
`;
