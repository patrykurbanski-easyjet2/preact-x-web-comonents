import { FC } from "preact/compat";

import { useState } from "preact/hooks";

import styles from "./app.scss?inline";

export interface AppProps {
  someText?: string;
}

export const App: FC<AppProps> = ({ someText }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: any) => {
    e.preventDefault();

    alert(`${e.target[0].value} / ${e.target[1].value} _ Login attempt made`);
  };

  return (
    <>
      <style>{styles}</style>
      <div>
        <form onSubmit={handleLogin}>
          <h1 className="title">Preact Login Form</h1>
          {someText && <p>{someText}</p>}
          <input
            type="text"
            placeholder="Username"
            value={username}
            onInput={(e) => setUsername((e.target as any).value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onInput={(e) => setPassword((e.target as any).value)}
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </>
  );
};
