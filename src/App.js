import { useRef } from "react"
import HackerProfileData from './dataSource/hacker-profiles.json';
import Card from './component/Card';

export default function App() {
  const hackerProfileRef = useRef(HackerProfileData);
  return (
    <div className="app">
      <h1 className="leading-snug text-2xl text-center font-semibold mt-16">Hacker Profiles</h1>
      <p className="leading-snug text-center text-base font-normal text-gray-400 mt-3">
        We are happy to have your hacker profile, check out {" "}
        <a 
          href="https://hekors.tech" 
          className="text-blue-500"
          target="_blank" 
          rel="noreferrer">
            {"hekors.tech"}
        </a>
      </p>

      <div className="hacker-cards-wrapper mt-24 grid grid-cols-3 gap-8 mx-auto w-fit h-auto">
        {hackerProfileRef.current?.map((hackerProfile, hackerProfileIndex) => (
          <Card key={hackerProfileIndex} 
            cardData={hackerProfile} />
        ))}
      </div>
    </div>
  )
}