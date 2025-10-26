import React from "react";
import ReactDOM from "react-dom/client";
import CardContainer from "./components/CardContainer";
import Header from "./components/Header";

const AppLayout = () => {
  return (
    <>
      <Header />
      <CardContainer />
    </>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
