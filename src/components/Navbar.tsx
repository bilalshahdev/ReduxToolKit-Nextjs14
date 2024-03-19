import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-10 h-16 w-full bg-purple-950/85 backdrop-blur shadow border-b border-purple-950">
      <div className="max-w-screen-xl mx-auto h-full flex items-center px-4">
        <Link href="/">
          <h2 className="text-xl font-semibold uppercase">Example</h2>
        </Link>
        <ul className="">
          <li className=""></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
