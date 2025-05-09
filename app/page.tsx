"use client";
import Image from "next/image.js";
import BeatPlayer from "./components/BeatPlayer.jsx";

export default function Home() {
  return (
    <>
      <div>
        <a href="/" className="logoLink">
          <Image
            className="logo"
            src="/img/logo.png"
            alt="logo for Y2K DOM"
            width={280}
            height={280}
          ></Image>
        </a>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-8 items-center">
        <BeatPlayer id={0} name={"CRASH"}></BeatPlayer>
        <BeatPlayer id={1} name={"BIG BODY"}></BeatPlayer>
        <BeatPlayer id={2} name={"DIVA"}></BeatPlayer>
        <BeatPlayer id={3} name={"FOREIGN"}></BeatPlayer>
        <BeatPlayer id={4} name={"YAKIMA"}></BeatPlayer>
        <BeatPlayer id={5} name={"LIKE THAT"}></BeatPlayer>
        <BeatPlayer id={6} name={"XPRESS"}></BeatPlayer>
        <BeatPlayer id={7} name={"VANILLA BEAN"}></BeatPlayer>
        <BeatPlayer id={8} name={"THE 3ND"}></BeatPlayer>
        <BeatPlayer id={9} name={"TERRAFORM"}></BeatPlayer>
        <BeatPlayer id={10} name={"TAKE A BREATH"}></BeatPlayer>
        <BeatPlayer id={11} name={"SERUM"}></BeatPlayer>
        <BeatPlayer id={12} name={"REVENGE"}></BeatPlayer>
        <BeatPlayer id={13} name={"POLYMORPH"}></BeatPlayer>
        <BeatPlayer id={14} name={"ERA"}></BeatPlayer>
        <BeatPlayer id={15} name={"DON'T MATTER"}></BeatPlayer>
      </div>
      <div id="footer">
        <footer>
          Copyright© 2025 <em>Y2KDOM</em>
        </footer>
      </div>
    </>
  );
}
