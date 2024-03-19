import { ReactNode } from "react";

const CardBody = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-full h-full cursor-pointer rounded-md border border-gray-700 p-4 md:p-8 transition-colors hover:border-gray-400">
      {children}
    </div>
  );
};

export default CardBody;
