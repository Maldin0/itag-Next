"use client";
import React from "react";
import { useRouter } from "next/navigation";
import RegisStyle from "./RegisStyle.module.css";
import LoginStyle from "../login/LoginStyle.module.css";
import Link from "next/link";
import axios from "axios";

type Props = {};

export default function Regis({}: Props) {
  const [username, setUsername] = React.useState<string>("");
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const [loading, setLoading] = React.useState<boolean>(false);
  const router = useRouter();

  async function handleRegis() {
    try {
      setLoading(true);
      const res = await axios.post("http://localhost:8080/users/register", {
        username,
        email,
        password,
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

        <div
          className={RegisStyle.box}
          style={{ display: "flex", flexDirection: "column" }}
        >
          <div className={RegisStyle.font}>
            <h1>Sign up</h1>
          </div>

          <div className={RegisStyle.line} style={{ paddingTop: "0%" }}></div>

          <input
            placeholder="E-mail"
            type="text"
            className={RegisStyle.inputBox}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>

          <p>&nbsp;</p>

          <input
            placeholder="Username"
            type="text"
            className={RegisStyle.inputBox}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          ></input>

          <p>&nbsp;</p>

          <input
            placeholder="Password"
            type="password"
            className={RegisStyle.inputBox}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>

          <p>&nbsp;</p>
          <div className={LoginStyle.submit}>
            <button type={"submit"} onClick={handleRegis}>
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
