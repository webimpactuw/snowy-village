import React from "react";

function MenuBlock({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) {
  return (
    <>
      <div className="m-auto w-11/12 md:w-5/6 lg:w-3/4 grid grid-cols:2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-12 lg:gap-16">
        <h2 className="w-1/3 sm:w-1/4 md:w-1/5 lg:w-1/6 m-auto text-center col-span-2 md:col-span-3 lg:col-span-4 text-4xl font-bold text-text-color-1 border-b-4 border-text-color-1">
          {title}
        </h2>
        {children}
      </div>
    </>
  );
}

export default MenuBlock;
