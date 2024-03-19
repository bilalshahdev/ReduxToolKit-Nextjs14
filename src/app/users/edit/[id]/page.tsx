"use client";
import Container from "@/components/Container";
import Form from "@/components/Form";
import { openConfirmation } from "@/redux/slices/confirmationSlice";
import { openModal } from "@/redux/slices/modalSlice";
import { editUser } from "@/redux/slices/usersSlice";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";

export default function EditUserPage({ params }: any) {
  const dispatch = useDispatch();
  const router = useRouter();
  const { id } = params;
  const users = useSelector((store: any) => store.users);
  const userData = users.find((u: UserI) => u.id === id);
  const handleSubmit = (data: UserI) => {
    if (data.id === "110") {
      dispatch(
        openModal({
          title: "Error",
          description: "Can't edit this user (author)",
        })
      );
      return;
    }
    dispatch(editUser(data));
    dispatch(openConfirmation(`${data.name}'s data updated!`));

    router.replace("/users");
  };

  return (
    <Container title={`Edit - ${userData.name}`}>
      <Form data={userData} submitData={handleSubmit} />
    </Container>
  );
}
