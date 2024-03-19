"use client";
import { closeModal } from "@/redux/slices/modalSlice";
import { useDispatch, useSelector } from "react-redux";

const Modal = () => {
  const dispatch = useDispatch();
  const modal = useSelector((state: any) => state.modal);
  const handleDelete = () => {
    modal.handleConfirm();
  };
  return (
    <>
      {modal.title && (
        <div className="w-full h-screen z-50 fixed inset-0 bg-black/60 backdrop-blur">
          <div className="h-full flex justify-center items-center">
            <div className="flex flex-col gap-2">
              <p>{modal.description}</p>
              {modal.title == "Confirmation" ? (
                <div className="flex gap-4">
                  <div
                    className="px-3 py-2 rounded bg-red-500 hover:bg-red-400 transition-colors cursor-pointer"
                    onClick={handleDelete}
                  >
                    Delete
                  </div>
                  <div
                    className="px-3 py-2 rounded text-white bg-white/30 hover:bg-white/50 transition-colors cursor-pointer"
                    onClick={() => dispatch(closeModal())}
                  >
                    cancel
                  </div>
                </div>
              ) : (
                <div
                  className="mr-auto px-3 py-2 rounded text-white bg-white/30 hover:bg-white/50 transition-colors cursor-pointer"
                  onClick={() => dispatch(closeModal())}
                >
                  Okay
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
