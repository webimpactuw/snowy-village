import React from "react";

function MenuBlock({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) {
  return (
    <div>
      <h2>{title}</h2>
      {children}
    </div>
  );
}

export default MenuBlock;
