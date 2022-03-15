import { passThroughSymbol } from "next/dist/server/web/spec-compliant/fetch-event";
import React, { useState } from "react";

export default function Forms() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formErrors, setFormsError] = useState("");
  const onUsernameChange = (event: React.SyntheticEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setUsername(value);
  };
  const onEmailChange = (event: React.SyntheticEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setFormsError("");
    setEmail(value);
  };
  const onPasswordChange = (event: React.SyntheticEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setPassword(value);
  };
  const onSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(username, email, password);
    if (username === "" || email === "" || password === "") {
      setFormsError("모든 필드는 필수입니다.");
    }
    if (!email.includes("@")) {
      setFormsError("이메일 형식을 준수해주세요.");
    }
  };
  return (
    <form onSubmit={onSubmit}>
      <input
        required
        onChange={onUsernameChange}
        value={username}
        type="text"
        placeholder="Username"
        minLength={5}
      ></input>
      <input
        required
        onChange={onEmailChange}
        value={email}
        type="email"
        placeholder="Email "
      ></input>
      <input
        required
        onChange={onPasswordChange}
        value={password}
        type="password"
        placeholder="Password"
      ></input>
      <input type="submit" value="Create Account"></input>
      {formErrors}
    </form>
  );
}
