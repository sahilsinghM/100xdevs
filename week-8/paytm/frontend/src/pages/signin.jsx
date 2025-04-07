import { React, useState } from "react";
import { Input } from "../components/input";
import { Card } from "../components/card";
import { Button } from "../components/button";
import axios from "axios";
import { BottomWarning } from "../components/bottomwarning";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [userName, setUserName] = useState("sahilsingh@gmail.com");
  const [password, setPassword] = useState("********");

  const [show, setShow] = useState(true);
  const navigate = useNavigate();
  const buttonHandler = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/v1/user/signin",
        {
          userName,
          password,
        }
      );
      //   console.log(response.data.token);
      localStorage.setItem("token", response.data.token);
      navigate("/");
      //   console.log(JSON.parse(localStorage.getItem("token")));
    } catch (err) {
      if (err.response.data.message == "Invalid credentials") {
        setShow((s) => {
          s ? !s : s;
        });
      } else {
        console.log(err.response.data);
      }
    }
  };
  return (
    <div className="h-screen bg-gray-200 flex items-center justify-center">
      <div className=" bg-white rounded-2xl">
        <Card>
          <div className="inline-flex flex-col items-center rounded-2xl">
            <h1 className="text-3xl font-[1000] pb-2">Sign In</h1>
            <p className="text-sm font-normal text- pb-3">
              Enter your information to Sign In
            </p>
            <Input
              onChange={(e) => {
                setUserName(e.target.value);
              }}
              label="User Name"
              placeholder={userName}
            ></Input>

            <Input
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              label="Password"
              placeholder={password}
            ></Input>

            <Button onClick={buttonHandler} label={"Sign In"}></Button>
            <BottomWarning
              show={show}
              to={"/signup"}
              buttontext={"Sign Up"}
              message={"Don't have an account? "}
            ></BottomWarning>
            <BottomWarning
              show={!show}
              to={"/signup"}
              buttontext={"Sign Up"}
              message={"User Doesn't Exists! "}
            ></BottomWarning>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default SignUp;
