import React from "react";
import { gsap } from "gsap";
import "./Countdown.css";
import { motion } from "framer-motion";
import { navVariants } from "../utils/motion";
window.addEventListener("load", () => {
  let birthday = "2023,08,01";

  (function () {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const countDown = new Date(birthday).getTime();
    x = setInterval(function () {
      const now = new Date().getTime();
      const distance = countDown - now;

      document.getElementById("days").innerText = setNumber(distance / day);

      document.getElementById("hours").innerText = setNumber(
        (distance % day) / hour
      );
      document.getElementById("minutes").innerText = setNumber(
        (distance % hour) / minute
      );

      let secondsElem = document.getElementById("seconds");
      let seconds = setNumber((distance % minute) / second);
      secondsElem.innerText = seconds;

      animateFlip(secondsElem, seconds);
      //do something later when date is reached
      if (distance < 0) {
        let headline = document.getElementById("headline"),
          countdown = document.getElementById("countdown"),
          content = document.getElementById("content");

        headline.innerText = "It's my birthday!";
        countdown.style.display = "none";
        content.style.display = "block";

        clearInterval(x);
      }
    }, 1000);
  })();

  function animateFlip(element, value) {
    const valueInDom = element.querySelector(".bottom-back").innerText;
    const currentValue = value < 10 ? "0" + value : "" + value;

    if (valueInDom === currentValue) return;

    element.querySelector(".top-back span").innerText = currentValue;
    element.querySelector(".bottom-back span").innerText = currentValue;

    gsap.to(element.querySelector(".top"), 0.7, {
      rotationX: "-180deg",
      transformPerspective: 300,
      ease: Quart.easeOut,
      onComplete: function () {
        element.querySelector(".top").innerText = currentValue;
        element.querySelector(".bottom").innerText = currentValue;
        gsap.set(element.querySelector(".top"), { rotationX: 0 });
      },
    });

    gsap.to(element.querySelector(".top-back"), 0.7, {
      rotationX: 0,
      transformPerspective: 300,
      ease: Quart.easeOut,
      clearProps: "all",
    });
  }

  function setNumber(num) {
    const res = Math.floor(num);
    return res >= 10 ? res : `0${res}`;
  }
});
const Countdown = () => {
  return (
    <motion.div variants={navVariants} initial="hidden" whileInView="show">
      <div class="max-w-4xl mx-auto mt-8 z-10 font-Orbitron mb-24 sm:w-full">
        <div class="text-center text-4xl font-Orbitron">Launching in </div>

        <div class="mt-14 flex items-center justify-between">
          <div class="flex items-center mr-7 flex-col flex-nowrap">
            <span
              class="time-elem relative w-36 h-32 shadow-xl flex items-center justify-center mb-5 rounded-lg text-6xl"
              id="days"
            >
              <span class="top">00</span>
              <span class="top-back">
                <span>00</span>
              </span>
              <span class="bottom">08</span>
              <span class="bottom-back">
                <span>00</span>
              </span>
            </span>
            <span class="title font-Orbitron">Days</span>
          </div>

          <div class="flex items-center mr-7 flex-col flex-nowrap">
            <span
              class="time-elem relative w-36 h-32 shadow-xl flex items-center justify-center mb-5 rounded-lg text-6xl"
              id="hours"
            ></span>
            <span class="title font-Orbitron">Hours</span>
          </div>

          <div class="flex items-center mr-7 flex-col flex-nowrap">
            <span
              class="time-elem relative w-36 h-32 shadow-xl flex items-center justify-center mb-5 rounded-lg text-6xl"
              id="minutes"
            ></span>
            <span class="title font-Orbitron">Minutes</span>
          </div>

          <div class="flex items-center mr-7 flex-col flex-nowrap">
            <span
              class="seconds time-elem relative w-36 h-32 shadow-xl flex items-center justify-center mb-5 rounded-lg text-6xl"
              id="seconds"
            >
              <span class="top">00</span>
              <span class="top-back">
                <span>00</span>
              </span>
              <span class="bottom">00</span>
              <span class="bottom-back">
                <span>00</span>
              </span>
            </span>
            <span class="title font-Orbitron">Seconds</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Countdown;
