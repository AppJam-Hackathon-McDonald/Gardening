import { ChangeEvent, useEffect, useState } from "react";
import { useMutation, useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { register } from "../../../utils/request";
import { Img_Logo } from "../../assets/images";

function SignUpPage() {
  const [data, setData] = useState({
    name: "",
    password: "",
  });
  const {
    mutate,
    data: id,
    isLoading,
  } = useMutation(["signup"], () =>
    register({ password: data.password, userName: data.name })
  );
  const navigate = useNavigate();

  const onClick = () => {
    mutate();
  };

  useEffect(() => {
    if (id) {
      navigate(`/garden/${id}/owner`);
    }
  }, [isLoading]);

  return (
    <TotalWrapper>
      <TitleWrapper>
        <h1>
          <div>
            <h2>이름</h2>
            <p>이</p>
          </div>
          무엇인가요?
        </h1>
      </TitleWrapper>
      <Input
        title="이름"
        placeholder="이름을 입력해주세요"
        value={data.name}
        onChange={(e) => {
          setData({ ...data, name: e.currentTarget.value });
        }}
      />
      <Input
        title="비밀번호"
        placeholder="4자리 숫자로 입력해주세요"
        value={data.password}
        onChange={(e) => {
          const regType1 = /^[0-9]*$/;
          const num = e.currentTarget.value;
          if (regType1.test(num) && num.length < 5) {
            setData({ ...data, password: num });
          }
        }}
      />
      <Button onClick={onClick}>만들기</Button>
    </TotalWrapper>
  );
}

interface InputProps {
  title: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

function Input({ title, placeholder, onChange, value }: InputProps) {
  return (
    <InputWrapper>
      <p>{title}</p>
      <input
        value={value}
        type="text"
        placeholder={placeholder}
        onChange={onChange}
      />
    </InputWrapper>
  );
}

export default SignUpPage;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  width: 335px;
  height: 96px;
  margin-bottom: 33px;

  > p {
    font-weight: 800;
    font-size: 25px;
    line-height: 29px;
    color: ${({ theme }) => theme.subtitle};
  }
  > input {
    width: 100%;
    height: 50px;
    border-radius: 10px;
    border: none;
    outline: none;
    padding: 0 14px;
    font-weight: 300;
    font-size: 20px;
    line-height: 23px;
    :focus::placeholder {
      opacity: 0;
    }
    ::placeholder {
      color: rgba(98, 98, 98, 0.3);
    }
  }
`;

const TotalWrapper = styled.div`
  border: 1px solid black;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 120px;
  width: 100%;
  padding-left: 29px;
  margin-bottom: 99px;
  > h1 {
    width: 100%;
    font-weight: 900;
    line-height: 47px;
    color: ${({ theme }) => theme.title};
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-size: 40px;
    > div {
      h2 {
        font-size: 40px;
        color: ${({ theme }) => theme.button};
      }
      font-size: 40px;
      display: flex;
      flex-direction: row;
    }
  }
`;

const Button = styled.button`
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  width: 326px;
  height: 60px;
  background-color: ${({ theme }) => theme.button};
  font-weight: 700;
  font-size: 25px;
  line-height: 29px;
  color: #ffffff;
  border: none;
  margin-top: 153px;
`;
