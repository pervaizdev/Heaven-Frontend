"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { projectMedia } from "@/data/projectMedia";
import {
  HiOutlinePhoto,
  HiOutlineMap,
  HiOutlineVideoCamera,
} from "react-icons/hi2";

import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Autoplay } from "swiper/modules";
import "swiper/css";

const TABS = [
  { key: "photos", label: "Photos", Icon: HiOutlinePhoto },
  { key: "plans", label: "Plans", Icon: HiOutlineMap },
  { key: "videos", label: "Video", Icon: HiOutlineVideoCamera },
];

function Tabs({ active, onChange }) {
  return (
    <div className="flex gap-3">
      {TABS.map(({ key, label, Icon }) => {
        const isActive = active === key;
        return (
          <button
            key={key}
            onClick={() => onChange(key)}
            className={`inline-flex items-center gap-2 rounded-full border px-6 py-3 text-sm font-semibold transition
              ${
                isActive
                  ? "border-lime-200 bg-lime-300 text-black"
                  : "border-black/10 bg-white text-black/70 hover:bg-black/5"
              }`}
          >
            <Icon className="text-lg" />
            {label}
          </button>
        );
      })}
    </div>
  );
}

function FocusSwiper({ items, type }) {
  if (!items?.length) return null;

  const isVideo = type === "video";

  return (
    <div className="relative h-[320px] md:h-[420px] lg:h-[540px]">
      <Swiper
        modules={[Keyboard, Autoplay]}
        keyboard={{ enabled: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true} // ✅ infinite loop
        centeredSlides
        spaceBetween={40}
        breakpoints={{
          0: { slidesPerView: 1.2 },
          640: { slidesPerView: 1.8 },
          1024: { slidesPerView: 3 },
        }}
        className="h-full px-6 py-6"
      >
        {items.map((item) => (
          <SwiperSlide key={item.id} className="h-full">
            {({ isActive }) => (
              <div
                className={`relative h-full w-full overflow-hidden rounded-[40px] border border-black/10 bg-white shadow-lg
                  transition-all duration-500
                  ${isActive ? "opacity-100 scale-100" : "opacity-40 scale-90"}`}
                style={{ filter: isActive ? "none" : "blur(2px)" }}
              >
                {isVideo ? (
                  <Image
                    src={item.poster}
                    alt={item.title || "Video"}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <Image
                    src={item.src}
                    alt={item.alt || "Media"}
                    fill
                    className="object-cover"
                  />
                )}
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default function MediaSection() {
  const [tab, setTab] = useState("photos");

  const { items, type } = useMemo(() => {
    if (tab === "videos") return { items: projectMedia.videos, type: "video" };
    if (tab === "plans") return { items: projectMedia.plans, type: "image" };
    return { items: projectMedia.photos, type: "image" };
  }, [tab]);

  return (
    <section className="mx-auto max-w-7xl px-6 pt-16">
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <h2 className="text-5xl font-extrabold text-black md:text-6xl">
          Media
        </h2>
        <Tabs active={tab} onChange={setTab} />
      </div>

      <div className="mt-10">
        <FocusSwiper items={items} type={type} />
      </div>
    </section>
  );
}