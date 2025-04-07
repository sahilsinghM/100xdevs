import { React, useState } from "react";
import { Input } from "../components/input";
import { Card } from "../components/card";
import { Button } from "../components/button";
import axios from "axios";
import { BottomWarning } from "../components/bottomwarning";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [firstName, setFirstName] = useState("Sahil");
  const [userName, setUserName] = useState("sahilsingh@gmail.com");
  const [lastName, setLastName] = useState("Singh");
  const [password, setPassword] = useState("********");

  const [show, setShow] = useState(true);
  const navigate = useNavigate();
  const buttonHandler = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/v1/user/signup",
        {
          userName,
          firstName,
          lastName,
          password,
        }
      );
      //   console.log(response.data.token);
      localStorage.setItem("token", response.data.token);
      navigate("/");
      //   console.log(JSON.parse(localStorage.getItem("token")));
    } catch (err) {
      if (err.response.data.message == "User already exists") {
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
            <h1 className="text-3xl font-[1000] pb-2">Sign Up</h1>
            <p className="text-sm font-normal text- pb-3">
              Enter your information to create an account
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
                setFirstName(e.target.value);
              }}
              label="First Name"
              placeholder={firstName}
            ></Input>

            <Input
              onChange={(e) => {
                setLastName(e.target.value);
              }}
              label="Last Name"
              placeholder={lastName}
            ></Input>

            <Input
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              label="Password"
              placeholder={password}
            ></Input>

            <Button onClick={buttonHandler} label={"Sign Up"}></Button>
            <BottomWarning
              show={show}
              to={"/signin"}
              buttontext={"Sign In"}
              message={"Already have an account? "}
            ></BottomWarning>
            <BottomWarning
              show={!show}
              to={"/signin"}
              buttontext={"Sign In"}
              message={"User Already Exists! "}
            ></BottomWarning>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default SignUp;
