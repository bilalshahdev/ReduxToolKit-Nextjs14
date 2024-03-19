"use client";
import Container from "@/components/Container";
import Form from "@/components/Form";
import { openConfirmation } from "@/redux/slices/confirmationSlice";
import { addUser } from "@/redux/slices/usersSlice";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";

export default function AddUserPage() {
  const dispatch = useDispatch();
  const router = useRouter();
  const handleSubmit = (data: UserI) => {
    dispatch(addUser(data));
    dispatch(openConfirmation(`${data.name}'s data added!`));
    router.replace("/users");
  };
  return (
    <Container title="Add user">
      <Form submitData={handleSubmit} />
    </Container>
  );
}
