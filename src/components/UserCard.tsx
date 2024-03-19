import React from "react";
import CardBody from "./CardBody";
import formatDate from "@/utils/formatDate";

const UserCard = ({ user }: { user: UserI }) => {
  return (
    <CardBody>
      <div className="space-y-1 text-gray-400 text-justify text-sm">
        <h2 className="text-lg font-semibold text-white w-full">
          {user.name}{" "}
          {user.id === "110" && (
            <span className="font-normal text-xs ml-3">(Author)</span>
          )}
        </h2>
        <div className="flex">
          <p className="font-bold w-1/4">Email</p>
          <p className="w-3/4">{user.email}</p>
        </div>

        <div className="flex">
          <p className="font-bold w-1/4">Location</p>
          <p className="w-3/4">
            {user.city}, {user.country}
          </p>
        </div>
        <div className="flex">
          <p className="font-bold w-1/4">Bio</p>
          <p className="w-3/4 line-clamp-3">{user.bio}</p>
        </div>
        <div className="flex">
          <p className="font-bold w-1/4 truncate">Created on</p>
          <p className="w-3/4">{formatDate(user.createdAt)}</p>
        </div>
      </div>
    </CardBody>
  );
};

export default UserCard;
