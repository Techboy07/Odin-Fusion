import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FeatureSection from "../components/FeatureSection";
import openIMG from "/images/assets/Open Source Icon.png";
import reliableIMG from "/images/assets/Reliable Icon.png";
import DaoIMG from "/images/assets/dao.png";
import { useRef } from "react";

export default function Home() {
  const links = useRef([
    { title: "Features", location: "/" },
    { title: "Pricing", location: "/" },
    { title: "Roadmap", location: "/" },
    { title: "Whitepaper", location: "/" },
    { title: "Blog", location: "/" },
    { title: "FAQs", location: "/" },
  ]);

  const features = [
    {
      icon: openIMG,
      heading: "OPEN SOURCE",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      icon: reliableIMG,
      heading: "RELAIBLE",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    },
    {
      icon: DaoIMG,
      heading: "DAO CONTROLLED",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    },
  ];
  return (
    <main className="black-gradient">
      <Navbar navLinks={links.current} />
      <Hero />
      <FeatureSection features={features} />
    </main>
  );
}
