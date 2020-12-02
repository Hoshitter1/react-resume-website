import React from "react";
import Navbar from "~/components/organisms/Navbar";
import Header from "~/components/organisms/Header";
import Profile from "~/components/organisms/Profile";
import Skills from "~/components/organisms/Skills";

function Main() {
  return (
    <div>
      <Navbar />
      <Header />
      <Profile />
      <Skills />
    </div>
  );
}

export default Main;
