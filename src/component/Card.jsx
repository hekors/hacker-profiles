import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Card({ cardData }) {
  return (
    <div className="card w-fit h-auto p-6 rounded-md bg-gray-100">
      <div className="flex flex-col items-start justify-start gap-2">
        {cardData?.contacts?.github
          ? <img
            src={`${cardData?.contacts?.github}.png`}
            className="w-24 h-24 rounded-full"
          />
          : <span className="text-sm text-gray-400 font-normal select-none cursor-default">{"Please add your GitHub Profile Link"}</span>
        }
        <h1 className="text-base text-gray-800 font-semibold mt-3">
          {cardData?.firstName + " " + cardData?.lastName}
        </h1>
        <span className="social-links-wrapper text-lg flex flex-row items-center justify-start gap-3 mt-2">
          {cardData?.contacts?.linkedin && <a
            href={cardData?.contacts?.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-gray-700"
          >
            <FaLinkedin />
          </a>}
          {cardData?.contacts?.github && <a
            href={cardData?.contacts?.github}
            target="_blank"
            rel="noreferrer"
            className="text-gray-700"
          >
            <FaGithub />
          </a>}
          {cardData?.contacts?.twitter && <a
            href={cardData?.contacts?.twitter}
            target="_blank"
            rel="noreferrer"
            className="text-blue-400"
          >
            <FaTwitter />
          </a>}
        </span>
      </div>
      <p className="leading-snug text-gray-500 mt-3 font-normal text-sm italic">
        {cardData?.tagline}
      </p>
    </div>
  );
}
