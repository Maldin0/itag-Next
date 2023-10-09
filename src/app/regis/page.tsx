"use client";
import React from "react";
import '../../../bootstrap/dist/css/bootstrap.min.css';
import { useRouter } from "next/navigation";
import RegisStyle from "./RegisStyle.module.css";
import LoginStyle from "../login/LoginStyle.module.css";
import Link from "next/link";
import axios from "axios";

type Props = {};

export default function Regis({ }: Props) {
  const [username, setUsername] = React.useState<string>("");
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const [loading, setLoading] = React.useState<boolean>(false);
  const router = useRouter();

  async function handleRegis() {
    try {
      setLoading(true);
      const res = await axios.post("https://itag_server.iservkmitl.tech/users/register", {
        username,
        email,
        password
      });
      if (res.data.status === "Success") {
        alert(res.data.message);
        router.push("/login");
      } else {
        alert(res.data.message);
        router.refresh();
      }
    } catch (error) {
      if (
        axios.isAxiosError(error) &&
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        alert(error.response.data.message);
      } else {
        alert("An unexpected error occurred.");
      }
      router.refresh();
    } finally {
      setLoading(false);
    }
  }
  return (
    <div className={RegisStyle.myImages}>
      <div className={RegisStyle.scroll}>
        <div style={{ position: "relative", display: "flex" }}>
          <div className={LoginStyle.topline}></div>
          <h1
            className={RegisStyle.topfont}
            style={{
              position: "absolute",
              top: "20%",
              left: "3%",
              color: "white",
            }}
          >
            <Link
              href="/"
              style={{ textDecoration: "none", color: "white" }}
              className={RegisStyle.topfont}
            >
              ITAG
            </Link>
          </h1>
        </div>

        <p>&nbsp;</p>
        <p>&nbsp;</p>

        <div className="container px-1 mainbox p-5" style={{width:'55%'}}>
        
            <div  className="row justify-center font mb-4">
              <h1 className="col-2 whitespace-nowrap">Sign up</h1>
            </div>
           
            
            <div className="justify-content-center mb-4">
              <div className={RegisStyle.line} ></div>
            </div>
            
            
            <div className="row justify-content-center mb-4">
              <input
                placeholder="E-mail"
                type="text"
                className="col-6 inputBox"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></input>
            </div>

           
            <div className="row justify-content-center mb-4">
              <input
                placeholder="Username"
                type="text"
                className="col-6 inputBox"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              ></input>
            </div>

            

            <div className="row justify-content-center mb-5">
              <input
                placeholder="Password"
                type="password"
                className="col-6 inputBox"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></input>
            </div>

           
            <div className="row justify-content-center ">
              <button type="button" className="button btn-dark col-2 " onClick={handleRegis}>Register</button>
            </div>
          </div>
        
      </div>
    </div>
  );
}
