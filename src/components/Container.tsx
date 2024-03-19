import Link from "next/link";
import { ReactNode } from "react";

const Container = ({
  children,
  title,
  add,
}: {
  children: ReactNode;
  title?: string;
  add?: boolean;
}) => {
  return (
    <div>
      {title && (
        <div className="h-16 md:my-4">
          <div className="max-w-screen-xl mx-auto h-full flex items-center uppercase px-4">
            <h1 className="text-lg md:text-3xl font-semibold">{title}</h1>
            {add && (
              <Link
                href={"/users/add"}
                className="text-sm font-semibold ml-auto px-4 py-2 bg-white hover:bg-white/80 transition-colors text-purple-950 rounded"
              >
                Add user
              </Link>
            )}
          </div>
        </div>
      )}
      <div className="px-4 max-w-screen-xl mx-auto mb-8">{children}</div>
    </div>
  );
};

export default Container;
