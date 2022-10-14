import { ChangeEvent, MouseEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import * as Api from "../../api";
import token from "../../atom/token";



interface LoginData {
    email: string;
    password: string;
    [key: string]: string;
}

function LoginForm() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState<LoginData>({
        email: "",
        password: "",
    });

    const [jwtToken, setjwtToken] = useRecoilState(token);
    

    const validateEmail = (loginObj:LoginData) => {
        return loginObj.email
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          );
      };

      //위 validateEmail 함수를 통해 이메일 형태 적합 여부를 확인함.
  const isEmailValid = validateEmail(formData);
  // 비밀번호가 4글자 이상인지 여부를 확인함.
  const isPasswordValid = formData.password.length >= 4;
  //
  // 이메일과 비밀번호 조건이 동시에 만족되는지 확인함.
  const isFormValid = isEmailValid && isPasswordValid;


  const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      // "user/login" 엔드포인트로 post요청함.
      const res = await Api.post("user/login", formData);
      // 유저 정보는 response의 data임.
      const user = res.data;
      // JWT 토큰은 유저 정보의 token임.
      setjwtToken(res.data.accessToken);
      sessionStorage.setItem("refreshToken", res.data.refreshToken);
  

      // 기본 페이지로 이동함.
      navigate("/", { replace: true });
    } catch (err) {
      console.log("로그인에 실패하였습니다.\n", err);
    }
  };

  const handleonChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prev: LoginData) => {
        const newData = {
            ...prev,
            [name]: value,
        };

        return newData;
    });
};


  

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="이메일을 입력하세요."
                    name="email"
                    value={formData.email}
                    onChange={handleonChange}
                />
                 {!isEmailValid && (
                <div className="text-success">
                  이메일 형식이 올바르지 않습니다.
                </div>
              )}
                <input
                    type="password"
                    placeholder="비밀번호를 입력하세요."
                    name="password"
                    value={formData.password}
                    onChange={handleonChange}
                />
                 {!isPasswordValid && (
                <div className="text-success">
                  비밀번호는 4글자 이상입니다.
                </div>
              )}
                <button type="submit" disabled={!isFormValid}>로그인</button>
                <button onClick={() => navigate("/register")}>회원가입하기</button>
            </form>
        </div>
    );
};

export default LoginForm;
