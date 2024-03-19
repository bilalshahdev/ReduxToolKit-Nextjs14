"use client";
import { closeConfirmation } from "@/redux/slices/confirmationSlice";
import { useDispatch, useSelector } from "react-redux";

const Confirmation = () => {
  const dispatch = useDispatch();
  const confirmation = useSelector((store: any) => store.confirmation);

  setTimeout(() => {
    dispatch(closeConfirmation());
  }, 5000);

  return (
    <>
      {confirmation.isOpen && (
        <div className="w-full h-12 bg-white text-purple-950">
          <div className="h-full flex items-center justify-start px-4">
            {confirmation.message}
          </div>
        </div>
      )}
    </>
  );
};

export default Confirmation;
