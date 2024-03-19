import { FC, useState } from "react";
import generateId from "@/utils/generateId";
import { useRouter } from "next/navigation";

type Form = {
  data?: UserI;
  submitData: (data: UserI) => void;
};
const Form: FC<Form> = ({ data, submitData }) => {
  const router = useRouter();
  let initialData = {
    id: data?.id || generateId(),
    name: data?.name || "",
    email: data?.email || "",
    bio: data?.bio || "",
    city: data?.city || "",
    country: data?.country || "",
    website: data?.website || "",
  };

  const [userFormData, setUserFormData] = useState(initialData);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setUserFormData({
      ...userFormData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    submitData({
      ...userFormData,
      id: userFormData.id || generateId(),
      createdAt: data?.createdAt || new Date(),
    });
  };
  return (
    <div>
      <h6 className="mb-2">
        {data ? "Edit values to update user" : "Fill the form to add user"}
      </h6>
      <form className="space-y-2" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          className="w-full rounded bg-purple-950/50 text-white border border-purple-600 p-2"
          value={userFormData?.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          className="w-full rounded bg-purple-950/50 text-white border border-purple-600 p-2"
          value={userFormData?.email}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="city"
          placeholder="Enter your city"
          className="w-full rounded bg-purple-950/50 text-white border border-purple-600 p-2"
          value={userFormData?.city}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="country"
          placeholder="Enter your country"
          className="w-full rounded bg-purple-950/50 text-white border border-purple-600 p-2"
          value={userFormData?.country}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="website"
          placeholder="Enter your website"
          className="w-full rounded bg-purple-950/50 text-white border border-purple-600 p-2"
          value={userFormData?.website}
          onChange={handleChange}
        />
        <textarea
          rows={4}
          name="bio"
          placeholder="Enter your bio"
          className="w-full rounded bg-purple-950/50 text-white border border-purple-600 p-2"
          value={userFormData?.bio}
          onChange={handleChange}
          required
        />
        <div className="flex gap-2 pt-2">
          <input
            type="submit"
            value={data ? "Update" : "Add"}
            className="w-full rounded font-semibold bg-white hover:bg-white/80 transition-colors text-purple-950 p-2 cursor-pointer"
          />
          <input
            type="button"
            value={"cancel"}
            className="w-full rounded font-semibold bg-transparent transition-colors p-2 text-center text-white hover:text-purple-600 hover:bg-white/80 hover:border-transparent  border border-purple-600 cursor-pointer"
            onClick={() => router.back()}
          />
        </div>
      </form>
    </div>
  );
};

export default Form;
