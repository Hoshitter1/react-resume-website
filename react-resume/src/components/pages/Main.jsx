import React from "react";

import Navbar from "~/components/organisms/Navbar";
import Header from "~/components/organisms/Header";
import Profile from "~/components/organisms/Profile";
import Skills from "~/components/organisms/Skills";
import Experiences from "~/components/organisms/Experiences";
import Endorsements from "~/components/organisms/Endorsements";
import Portfolio from "~/components/organisms/Portfolio";
import Contact from "~/components/organisms/Contact";
import Footer from "~/components/organisms/Footer";

function Main() {
  return (
    <div>
      <Navbar />
      <Header />
      <Profile />
      <Skills />
      <Experiences />
      <Endorsements />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default Main;
