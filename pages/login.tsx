import { User } from "@/api";
import Button from "@/components/Button";
import Input from "@/components/Input";
import { AuthApiService } from "@/services/api";
import { useRouter } from "next/router";
import { FC, useState } from "react";

const Login: FC = () => {
  const [email, setEmail] = useState("test@gmail.com");
  const [password, setPassword] = useState("123456");
  const [error, setError] = useState("");
  const router = useRouter();

  //@ts-ignore
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await AuthApiService.authControllerLogin({ user: { email, password } as User });
      localStorage.setItem('token', response.token);
      router.push("/");
    } catch (error) {
      setError('Wrong email or password');
    }
  };

  const registerUser = async () => {
    try {
      const response = await AuthApiService.authControllerRegister({ user: { id: 0, email: 'test@gmail.com', password: '123456' } });
      localStorage.setItem('token', response.token);
      router.push("/");
    } catch (error) {
      setError('User already exists');
    }
  }

  return (
    <div className="login w-full flex flex-col items-center justify-center">
      <div className="border-2 border-solid border-orange-200 rounded p-5">
        <h1 className="mb-10">Login:</h1>
        <form className="block mt-10">
          <Input
            wrapperClassName="block margin-top-4"
            id="login"
            label="Email:"
            value={email}
            onChange={(val) => setEmail(val)}
          />
          <Input
            wrapperClassName="block margin-top-4"
            id="password"
            label="Password:"
            value={password}
            onChange={(val) => setPassword(val)}
          />

          <div className="flex items-center justify-between">
            <Button label="Create User" onClick={registerUser} className="block margin-top-4" />
            <Button label="Submit" onClick={handleSubmit} className="block margin-top-4" />
          </div>
          <p className="text-red">{error}</p>
        </form>
      </div>
    </div>
  );
}

export default Login;
