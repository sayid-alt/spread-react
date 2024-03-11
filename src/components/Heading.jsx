import React from "react";

export default function Heading() {
  return (
    <div class="flex mt-[100px] justify-center px-5">
      <div class="text-center container">
        <h1 class="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl ">
          Spread{" "}
          <mark class="px-2 text-white bg-blue-600 rounded ">Secrets</mark>{" "}
          holded in your head
        </h1>
        <p class="text-lg font-normal text-gray-500 lg:text-xl ">
          Freely talk to the world about your biggest secret, and have fun with
          that
        </p>
      </div>
    </div>
  );
}
