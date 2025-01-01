import CardBody from "@/components/CardBody";
import Link from "next/link";

export default function Home() {
  const links = [
    {
      title: "Example",
      description: "Learn more about Redux toolkit with example.",
      url: "/users",
      newTab: false,
    },
    {
      title: "Source code",
      description: "Browse the source code of this example on GitHub.",
      url: "https://github.com/Bilalshah110/ReduxToolKit-Nextjs14",
      newTab: true,
    },
  ];
  return (
    <div className="w-full max-w-screen-md flex flex-col gap-4 justify-center mx-auto h-screen px-4">
      <h1 className="text-3xl font-semibold leading-tight tracking-tight text-white md:text-5xl">
        Redux Toolkit With Next.js 14
      </h1>
      <p className="md:text-lg text-gray-400">
        This is a basic example that demonstrates the usage of{" "}
        <span className="text-white"> Redux-Toolkit </span>
        with Next.js App Router.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
        {links.map((link) => (
          <CardBody key={link.url}>
            <Link
              href={link.url}
              target={link.newTab ? "_blank" : "_self"}
              rel={link.newTab ? "noopener noreferrer" : ""}
            >
              <p className="text-lg md:text-xl font-semibold text-white">
                {link.title} <span className="ml-2 inline-block">→</span>
              </p>
              <p className="text-sm md:text-lg mt-2 max-w-[250px] text-gray-400">
                {link.description}
              </p>
            </Link>
          </CardBody>
        ))}
      </div>
      <p className="text-sm md:text-lg ml-auto">
        Made with ❤️ by{" "}
        <Link
          href="https://bilalhassan.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-400 transition"
        >
          Bilal Shah
        </Link>
      </p>
    </div>
  );
}
