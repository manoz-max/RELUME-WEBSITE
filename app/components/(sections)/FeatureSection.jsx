"use client";
import Image from "next/image";
import cardImage from "../../assets/images/card.png";

export default function FeatureSection() {
  const features = [
    {
      id: 1,
      status: "Online",
      title: "Sitemaps",
      description:
        "From a simple company description to a fully fleshed out sitemap generated with AI to help you get a bird's eye view.",
      image: cardImage,
    },
    {
      id: 2,
      status: "Online",
      title: "Wireframes",
      description:
        "Turn your Sitemap into wires in one click generating real components un-styled and ready for feedback.",
      image: cardImage,
    },
    {
      id: 3,
      status: "Beta",
      title: "Style Guide",
      description:
        "Turn your wireframes into polished designs with a Style Guide ready for development.",
      image: cardImage,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
      {features.map((feature) => (
        <div
          key={feature.id}
          className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center min-h-[400px] hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out"
        >
          <span
            className={`text-sm font-medium px-3 py-1 rounded-full ${
              feature.status === "Online"
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {feature.status}
          </span>
          <h3 className="mt-4 text-xl font-semibold">{feature.title}</h3>
          <p className="mt-2 text-gray-600">{feature.description}</p>
          <div className="mt-6 flex-grow flex items-center">
            <Image
              src={feature.image}
              alt={feature.title}
              className="rounded-md w-full h-full"
            />
          </div>
        </div>
      ))}
    </div>
  );
}