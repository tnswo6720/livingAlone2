import React from "react";
import styled from "@emotion/styled";

interface IProps {
  username: string;
  password: string;

  onUsernameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onPasswordChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Form = styled.form`
display:flex ;
flex-direction :column ;
padding :20px ;

border-radius :5px ;

background-color:#fff ;

box-shadow0 px10 px20 px rgba(0,0,0,0.19),0 px6 px6 p xrgba(0,0,0,0.23);

width300 p x;

transitionall .25s ease-in-out;
transformscale(.8);

&::hover{
transformscale(1);} `;

const Label = styled.label`
margin-bottom10 p x; 

&::last-of-type{
margin-bottom20 p x;}`;

const InputText = styled.input`
padding-left5 p x; 
height30 p x; 
border-radius3p x; 
border1p xsolid#ddd;

&::focus{
outline-color:#4d90fe;} `;

const CheckboxContainer = styled.div` display:flex ; align-items:center;margin-bottom15px ;`;
const Checkbox = styled.input` margin-right10px ;`;
const Button = styled.button` background-color:#4d90fe;color:white;padding-top8px;padding-bottom8p;border:none;border-radius3p;&::hover{cursor:pointer;background-color:#2f5bb7;} `;
const GoogleLoginButton = styled.button` background-color:#db4437;color:white;padding-top8p;padding-bottom8p;margin-top15p;border:none;border-radius3p;&::hover{cursor:pointer;background-color:#c23321;} `;
const LinkContainer = styled.div` display:flex ; justify-contentspace-between;margin-top15p`;

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
function LoginPresenter({
  username,
  password,
  onUsernameChange,
  onPasswordChange,
  onSubmit,
}: IProps) {
  return (
    <Container>
      <Form onSubmit={onSubmit}>
        <Label>
          {" "}
          Username:
          <InputText type="text" value={username} onChange={onUsernameChange} />
        </Label>
        <Label>
          {" "}
          Password:
          <InputText
            type="password"
            value={password}
            onChange={onPasswordChange}
          />
        </Label>

        <CheckboxContainer>
          <Checkbox type="checkbox" />
          <span>로그인 상태 유지</span>
        </CheckboxContainer>
        <Button type="submit">로그인 하기</Button>
        <LinkContainer>
          <a href="/signup">회원가입</a>
          <div>
            <a href="/find-id">아이디 찾기</a>,
            <a href="/find-password">비밀번호 찾기</a>
          </div>
        </LinkContainer>
        <GoogleLoginButton type="button">
          Google 계정으로 로그인
        </GoogleLoginButton>
      </Form>
    </Container>
  );
}

export default LoginPresenter;
