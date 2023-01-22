import React from "react";

function Header() {
  return (
    // <header className="">
    //   <h1>This is the header</h1>
    // </header>
    <nav class="flex items-center justify-between flex-wrap bg-[#f4f2f0] p-6">
      <div class="flex items-center flex-shrink-0 text-[#0f0c0b] mr-6">
        <img src="../../Team-Myow.png" alt="Team Myow" className="w-56" />
        {/* <span class="font-semibold text-xl tracking-tight">Your logo</span> */}
      </div>
      <div class="block lg:hidden">
        <button class="flex items-center px-3 py-2 border rounded text-[#0f0c0b] border-teal-400 hover:text-white hover:border-white">
          <svg
            class="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div class="text-sm lg:flex-grow">
          <a
            href="#"
            class="block mt-4 text-base lg:inline-block lg:mt-0 text-[#0f0c0b] hover:text-red mr-4"
          >
            Home
          </a>
          <a
            href="#"
            class="block mt-4 text-base lg:inline-block lg:mt-0 text-[#0f0c0b] hover:text-red mr-4"
          >
            About
          </a>
          <a
            href="#"
            class="block mt-4 text-base lg:inline-block lg:mt-0 text-[#0f0c0b] hover:text-red"
          >
            Contact
          </a>
        </div>
        <div></div>
      </div>
    </nav>
  );
}

export default Header;
