import * as RiIcons from "react-icons/ri";

export default function Card({ cardData }) {
  return (
    <div class="relative block overflow-hidden rounded-3xl border p-10 my-5 border-gray-100 card-profile shadow-sm hover:shadow-md">
      <div class="justify-between sm:flex">
        <div>
          <h3 class="text-xl font-bold text-gray-900">
            {cardData?.firstName + " " + cardData?.lastName}
          </h3>
          <div class=" sm:pr-8">
            <p class="mt-1 text-sm font-medium text-gray-600">
              {cardData?.tagline}
            </p>
          </div>
        </div>
        <div class=" flex-shrink-0 sm:block">
          <img
            alt="Profile"
            src={`${cardData?.contacts?.github}.png`}
            class="h-20 w-h-20 rounded-lg object-cover shadow-sm "
          />
        </div>
      </div>

      <div className="flex flex-row items-center justify-start gap-3 mt-8 text-lg">
        {cardData?.contacts?.linkedin && (
          <a
            href={cardData?.contacts?.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-xl gray-700 text-"
          >
            <RiIcons.RiLinkedinFill />
          </a>
        )}
        {cardData?.contacts?.github && (
          <a
            href={cardData?.contacts?.github}
            target="_blank"
            rel="noreferrer"
            className="text-xl gray-700 text-"
          >
            <RiIcons.RiGithubFill />
          </a>
        )}
        {cardData?.contacts?.twitter && (
          <a
            href={cardData?.contacts?.twitter}
            target="_blank"
            rel="noreferrer"
            className="text-xl gray-700 text-"
          >
            <RiIcons.RiTwitterFill />
          </a>
        )}
      </div>
    </div>
  );
}

