import Link from "next/link";

const Footer = () => {
  return (
    <footer className="h-10 w-full bg-primary/85 backdrop-blur shadow border-t border-primary">
      <p className="text-sm flex items-center justify-center gap-2 h-full">
        Made with ❤️ by
        <Link
          href="https://bilalhassan.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-400 transition"
        >
          Bilal Shah
        </Link>
      </p>
    </footer>
  );
};

export default Footer;
