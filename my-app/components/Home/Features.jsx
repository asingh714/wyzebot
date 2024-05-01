import { HoverEffect } from "@/components/ui/HoverEffect";

export default function Features() {
  return (
    // <div className="max-w-7xl mx-auto px-2">
    //   <h2 className="text-6xl font-semibold text-black text-center">
    //     Features
    //   </h2>
    //   <HoverEffect items={features} />
    // </div>

    <div className="h-[75rem] w-full dark:bg-black bg-white  dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] relative flex items-center justify-center">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

      <div className="max-w-[100rem] mx-auto px-2">
        <h2 className="text-6xl font-semibold text-white text-center">
          Features
        </h2>
        <HoverEffect items={features} />
      </div>
    </div>
  );
}
export const features = [
  {
    title: "AI-Powered Innovation",
    description:
      "Wyzebot turns your ideas into clean, functional code, enhancing both design and development.",
  },
  {
    title: "Live Code Preview",
    description:
      "See your code come to life instantly and refine your designs on-the-fly.",
  },
  {
    title: "Effortless Customization",
    description:
      "Easily adjust every detail of your site's design for a perfect look and feel.",
  },
  {
    title: "Seamless Integration",
    description:
      "Wyzebot integrates with your workflow, supporting a wide array of tools and frameworks.",
  },
  {
    title: "Intelligent Error Handling",
    description:
      "Code smarter with AI that spots errors early, keeping your workflow smooth.",
  },
  {
    title: "Collaborative Experience",
    description:
      "Collaborate efficiently with team members, syncing effortlessly for a unified coding experience.",
  },
];
