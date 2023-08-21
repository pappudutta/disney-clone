import React from "react";

function HeaderItem({ name, Icon }) {
  return (
    <div className="text-white flex items-center gap-1 cursor-pointer font-semibold hover:underline underline-offset-8 mb-2 mt-2">
      <Icon />
      <div>{name}</div>
    </div>
  );
}

export default HeaderItem;
