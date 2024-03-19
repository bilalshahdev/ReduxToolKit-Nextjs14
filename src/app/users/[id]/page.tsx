"use client";
import Container from "@/components/Container";
import { openConfirmation } from "@/redux/slices/confirmationSlice";
import { closeModal, openModal } from "@/redux/slices/modalSlice";
import { deleteUser } from "@/redux/slices/usersSlice";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";

const page = ({ params }: any) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { id } = params;
  const users = useSelector((store: any) => store.users);
  const user = users.find((u: UserI) => u.id === id);
  const handleDelete = () => {
    if (id === "110") {
      dispatch(
        openModal({
          title: "Error",
          description: "Can't delete this user (author)",
          handleConfirm: () => {
            dispatch(closeModal());
          },
        })
      );
      return;
    }
    dispatch(
      openModal({
        title: "Confirmation",
        description: "Are you sure you want to delete this user?",
        handleConfirm: () => {
          dispatch(deleteUser(id));
          dispatch(openConfirmation("User deleted!"));
          router.push("/users");
          dispatch(closeModal());
        },
      })
    );
  };

  const handleEdit = () => {
    if (id === "110") {
      dispatch(
        openModal({
          title: "Error",
          description: "Can't edit this user (author)",
          handleConfirm: () => {
            dispatch(closeModal());
          },
        })
      );
      return;
    }
    router.push(`/users/edit/${id}`);
  };

  return (
    <>
      {user ? (
        <Container>
          <div className="flex flex-col w-full md:max-w-md mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 my-8">
              <div className="flex items-center justify-center w-20 h-20 md:w-28 md:h-28 rounded-full bg-white text-primary text-5xl md:text-[4rem] font-bold">
                {user.name[0]}
              </div>
              <div className="flex flex-col items-center md:items-start">
                <h1 className="text-3xl font-semibold">{user.name}</h1>
                <p className="text-gray-400">{user.email}</p>
                <div className="flex items-center gap-2 mt-1 text-sm">
                  <p
                    className="text-blue-500 hover:text-blue-400 transition-colors cursor-pointer"
                    onClick={handleEdit}
                  >
                    Edit
                  </p>
                  <p
                    className="text-red-500 hover:text-red-400 transition-colors cursor-pointer"
                    onClick={handleDelete}
                  >
                    Delete
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <div>
                <h6 className="text-lg font-semibold">Bio</h6>
                <p className="text-gray-400 text-justify">{user.bio}</p>
              </div>
              {user.city && user.country && (
                <div>
                  <h6 className="text-lg font-semibold">From</h6>
                  <p className="text-gray-400">
                    {user.city}, {user.country}
                  </p>
                </div>
              )}
              {user.website && (
                <div>
                  <h6 className="text-lg font-semibold">Website</h6>
                  <Link
                    href={user.website}
                    className="text-blue-500 hover:text-blue-400 transition-colors cursor-pointer"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {user.website}
                  </Link>
                </div>
              )}
              <div>
                <h6 className="text-lg font-semibold">Since</h6>
                <p className="text-gray-400">{user.createdAt.toDateString()}</p>
              </div>
            </div>
          </div>
        </Container>
      ) : (
        <div className="h-[80vh] flex items-center justify-center">
        <h6 className="h-full grid place-items-center text-gray-400 text-xl">
          Loading...
        </h6></div>
      )}{" "}
    </>
  );
};

export default page;
