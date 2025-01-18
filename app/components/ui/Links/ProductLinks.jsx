import Link from "next/link";

export default function ProductLinks() {
  const products = [
    {
      id: 1,
      title: "AI Site Builder",
      description: "Create Sitemap & Wireframe in minutes",
      img: "https://cdn.prod.website-files.com/6177739448baa66404ce1d9c/65b1a6353fe69352be714507_Site%20Builder%20Icon%20(Smooth).svg",
    },
    {
      id: 2,
      title: "WebFlow Library",
      description: "1K+ Client-First Webflow Components",
      img: "https://cdn.prod.website-files.com/6177739448baa66404ce1d9c/65b1a5bb449e0bb467854101_Webflow%20Library%20Icon%20(Smooth).svg",
    },
    {
      id: 3,
      title: "Figma Library",
      description: "1k+ Figma Components",
      img: "https://cdn.prod.website-files.com/6177739448baa66404ce1d9c/65b1a5a9ac8d073ce51206c9_Figma%20Library%20Icon%20(Smooth).svg",
    },
    {
      id: 4,
      title: "React Library",
      description: "React Library Icon",
      img: "https://cdn.prod.website-files.com/6177739448baa66404ce1d9c/65f8e468c7cfd863aef27641_React%20Library%20Icon%20(Smooth).svg",
    },
    {
      id: 5,
      title: "Chrom Extensions",
      description: "Boost your Productivity in Webflow",
      img: "https://cdn.prod.website-files.com/6177739448baa66404ce1d9c/65b29814f5b2226620fe43f4_Chrome%20Ext%20Icon%20(Smooth)No%20Gradient.svg",
    },
    {
      id: 6,
      title: "Libraries",
      description: "Create your own Webflow Library",
      img: "https://cdn.prod.website-files.com/6177739448baa66404ce1d9c/65b2981470cb1850c0f0855f_Relume%20Libraries%20Icon%20(Smooth)No%20Gradient.svg",
    },
    {
      id: 7,
      title: "Relume Icons",
      description: "Open source icons for Webflow & Figma",
      img: "https://cdn.prod.website-files.com/6177739448baa66404ce1d9c/65b29814eab2ab3c2b0c9501_Relume%20Ipsum%20Icon%20(Smooth)No%20Gradient.svg",
    },
  ];
  return (
    <div>
      {products.map((product) => (
        <Link
          href="#"
          className={`flex items-center text-black ${
            product.id == 1 ? "bg-gray-200" : "hover:bg-gray-200"
          } pl-2 py-2 rounded-md mb-2 transition-all duration-200`}
          key={product.id}
        >
          <img src={product.img} alt={product.title} className="w-8 h-8 mr-4" />
          <div className="flex flex-col">
            <span className="font-semibold text-lg">{product.title}</span>
            <p className="text-gray-600 mt-1 leading-tight text-xs">
              {product.description}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}
