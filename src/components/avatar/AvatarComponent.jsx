import React from "react";
import MeowImg from "../../assets/img/m.png";

export default function AvatarComponent() {
  const firstName = "Meow";
  const lastName = "Meow";
  const dateIfBirth = "2 November 2001";
  const imgAvatar = MeowImg;

  return (
    <div className="border-2">
      <div>
        <img
          src={imgAvatar}
          alt={firstName}
          width={150}
          height={200}
          className="rounded-full"
        />
      </div>

      <h3 className="text-2xl font-bold text-center my-4">
        This is {firstName} {lastName}
      </h3>
      <hr />
      <h2>Date of birth: 
        {dateIfBirth}
      </h2>
    </div>
  );
}
