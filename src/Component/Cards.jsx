import Image from "next/image";
import { HiLocationMarker } from "react-icons/hi";

export default function ProjectCard({ item }) {
  return (
    <div className="relative h-[560] w-full overflow-hidden rounded-[30]">
      <Image
        src={item.image}
        alt={item.title}
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 flex flex-col bg-black/35 p-7">
        <span className="w-fit rounded-full bg-lime-200 px-6 py-2 text-sm font-bold text-black">
          {item.status}
        </span>
        <div className="mt-auto">
          <div className="flex items-center gap-3 text-white">
            <span className="flex  items-center justify-center text-lime-200">
              <HiLocationMarker className="text-2xl" />
            </span>

            <p className="text-xl font-semibold">
              {item.location}
            </p>
          </div>
          <hr className="my-6 border-white/30" />
          <h3 className="text-white font-bold text-5xl">
            {item.title}
          </h3>
        </div>
      </div>
    </div>
  );
}
