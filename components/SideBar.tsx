"use client";
import React from "react";
import Icon from "../public/Icon.svg";
import GroupModal from "./GroupModel";

const SideBar: React.FC = () => {
  const groupModal = GroupModal();
  // Replace this with your data from the database
  const icons = [
    { color: 'slate-gray-500', src: 'group.svg', alt: 'group' },
    { color: 'slate-gray-500', src: 'group.svg', alt: 'group' },
    { color: 'slate-gray-500', src: 'group.svg', alt: 'group' },
    { color: 'slate-gray-500', src: 'group.svg', alt: 'group ' },
  ];

  return (
    <div
      className={`${
        groupModal.isOpen ? "block absolute" : "hidden"
      } bg-gradient-to-b from-[#262626] to-[#141414] p-6 rounded-xl flex flex-col items-center justify-center h-max-full md:block w-32 border-2 border-[#292929] `}
    >
      {icons.map((icon) => (
        <button
          key={icon.alt}
          className={`bg-${icon.color} border-2 border-[#323333] rounded-full p-2 mb-4`}
        >
          <img src={icon.src} alt={icon.alt} width="36" height="36" />
        </button>
      ))}
      <div className="flex flex-col  gap-2 mt-auto items-center">
        <button className="text-[#bd837f] text-md font-semibold ">
          Sign Out
        </button>
        <button type="submit" className=" text-white rounded-xl">
          <img src="logOut.svg" alt="Sign Out" />
        </button>
      </div>
    </div>
  );
};

export default SideBar;
