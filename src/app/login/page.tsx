"use client";

import React from "react";
import Link from "next/link";
import LoginStyle from "./LoginStyle.module.css";
import axios from "axios";

type Props = {};

export default function Login({}: Props) {
  const [usernameOrEmail, setUsernameOrEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const [loading, setLoading] = React.useState<boolean>(false);

  async function handleLogin() {
    try {
      setLoading(true);
      const res = await axios.post("http://localhost:8080/users/login", {
        usernameOrEmail,
        password,
      });

      if (res.data._user_id) {
        // TODO: Notification then go redirect to home page
      } else {
        // TODO: Notification the massage then reload the page
      }
    } catch (error) {
      // TODO: Still Noti the massage bitches
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className={LoginStyle.myImages}>
      <div className={LoginStyle.scroll}>
        <div style={{ position: "relative", display: "flex" }}>
          <div className={LoginStyle.topline}></div>
          <h1
            className={LoginStyle.topfont}
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
              className={LoginStyle.topfont}
            >
              ITAG
            </Link>
          </h1>
        </div>

        <div
          className={LoginStyle.box}
          style={{ display: "flex", flexDirection: "column" }}
        >
          <div>
            <h1 className={LoginStyle.font}>
              IT ADVENTURERS
              <br />
              GUILD
            </h1>
          </div>

          <input
            placeholder="E-mail/Username"
            type="input"
            className={LoginStyle.inputBox}
            value={usernameOrEmail}
            onChange={(e) => setUsernameOrEmail(e.target.value)}
          ></input>

          <p>&nbsp;</p>

          <input
            placeholder="Password"
            type="input"
            className={LoginStyle.inputBox}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>

          <div className={LoginStyle.submit} style={{ marginTop: "-5%" }}>
            <button type={"submit"} onClick={handleLogin} disabled={loading}>
              {loading ? "Loading..." : "Login"}
            </button>
          </div>

          <div className={LoginStyle.line} style={{ marginTop: "3%" }}></div>

          <div className={LoginStyle.supButton} style={{ marginTop: "10%" }}>
            <button type={"submit"}>
              <a href="#">Are you new adventurer?</a>
            </button>
            <button type={"submit"}>
              <a href="#">Forgot password?</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
