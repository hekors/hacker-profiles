import React from "react";
import * as RiIcons from "react-icons/ri";

export default function Footer() {
  return (
    <footer className="p-4 mx-24 mt-10 rounded-t-3xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 ">
      <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="">
            <p className="text-lg font-bold text-gray-100">
              HEKORS Community 🤍
            </p>
            <p className="mt-4 text-sm text-gray-100 sm:my-2 ">
              Join our community on :{" "}
              <a
                href="https://discord.gg/VYN3GTBDeY"
                target="_blank"
                rel="noreferrer"
                className="underline"
              >
                {"Discord"}
              </a>
            </p>{" "}
          </div>

          <a
            class="inline-flex items-center rounded border p-2 bg-gray-50"
            href="/download"
          >
            <span class="text-sm font-medium mx-2"> Contribute </span>

            <RiIcons.RiGithubFill />
          </a>
        </div>
      </div>
    </footer>
  );
}

