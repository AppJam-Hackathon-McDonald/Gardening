import { instance } from "./instance";

interface RegisterProps {
  userName: string;
  password: string;
}

export const register = async (props: RegisterProps) => {
  const response = await instance.post("/register", {
    userName: props.userName,
    password: props.password,
  });
  return response.data.result.id;
};

export const getName = async (id: string) => {
  const response = await instance.get(`/garden/${id}/owner`);
  return response.data.result.userName;
};

export const inputPassword = async (id: string, password: string) => {
  const response = await instance.post(`/garden/${id}/password`, {
    password: password,
  });
  return response.data;
};

export const shareGardenInfo = async (id: string) => {
  const response = await instance.get(`/garden/${id}`);
  return response.data.result;
};

interface LetterProps {
  from: string;
  flower: string;
  context: string;
}

export const writeLetter = async (id: string, props: LetterProps) => {
  const response = await instance.post(`/garden/${id}/writer/letter`, {
    letters: [
      {
        whoFrom: props.from,
        flowerType: props.flower,
        context: props.context,
      },
    ],
  });
  return response.data;
};
