function OrderOnline({
  imgFileName,
  companyName,
  link,
}: {
  imgFileName: string;
  companyName: string;
  link: string;
}) {
  return (
    <div className="m-auto w-1/6">
      <a href={link} className="rounded-xl grid grid-cols-2 w-full">
        <img src={imgFileName} alt={companyName + " Logo"} className="" />
        <button className="bg-highlight-color text-text-color-2 text-lg">
          Order Online with {companyName}
        </button>
      </a>
    </div>
  );
}

export default OrderOnline;
