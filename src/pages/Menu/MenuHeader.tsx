export default function MenuHeader() {
  function DividerBar() {
    return <p className="text-[#bc9a6c] text-xl">|</p>;
  }
  function MenuLink({ text }: { text: string }) {
    // add href to page locations
    return (
      <a className="text-white text-xs tracking-wide hover:underline">{text}</a>
    );
  }

  return (
    <div className="bg-dark-blue pt-12 pb-2 grid justify-center">
      <h1 className="text-center text-white font-fjalla-one text-6xl tracking-widest">
        MENU
      </h1>
      {/* Line with snowflake */}
      <a
        href="https://www.doordash.com/store/snowy-village-seattle-24422697/"
        className="bg-[#ff3008] text-center text-white font-fjalla-one text-2xs tracking-wider my-4 mx-auto py-1 px-3"
      >
        Order on Doordash
      </a>
      <div className="w-screen grid grid-flow-col justify-around items-center px-2">
        <MenuLink text="ADD-ONS" />
        <DividerBar />
        <MenuLink text="BINGSOO" />
        <DividerBar />
        <MenuLink text="DRINKS" />
        <DividerBar />
        <MenuLink text="TAIYAKI" />
      </div>
    </div>
  );
}
