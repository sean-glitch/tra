import * as React from "react";

export default function Home() {
  const hello = "Hello React!";

  return (
    <>
      <h1 className="title">{hello}</h1>
      <p>
        Gets behind Buckner! 
        {" "}
        <a href="https://glitch.com/edit/#!/remix/glitch-hello-react">
          ~glitch-hello-react
        </a>
        .
      </p>
    </>
  );
}
