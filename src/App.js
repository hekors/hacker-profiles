import { useRef } from "react";
import HackerProfileData from "./Data/hacker-profiles.json";
import Card from "./components/Card";
import Footer from "./components/Footer";

export default function App() {
  const hackerProfileRef = useRef(HackerProfileData);
  return (
    <div className=" app">
      <div className="container px-10 mx-auto">
        <div className="p-24">
          <h1 className="mt-16 text-2xl font-semibold leading-snug">
            Hey there 👋🏻 <br />
            Welcome to the HEKORS Hacker-Profiles Page 🧡
          </h1>
          <p className="mt-3 text-base font-normal leading-snug text-gray-400">
            We are happy to have your hacker profile here, and we hope you will
            be a part of our community. <br />
            for more information, please visit{" "}
            <a
              href="https://hekors.tech"
              className="text-blue-500"
              target="_blank"
              rel="noreferrer"
            >
              {"hekors.tech"}
            </a>
          </p>
          <div className="grid grid-cols-1 gap-5 mt-16 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
            {hackerProfileRef.current?.map(
              (hackerProfile, hackerProfileIndex) => (
                <Card key={hackerProfileIndex} cardData={hackerProfile} />
              )
            )}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
