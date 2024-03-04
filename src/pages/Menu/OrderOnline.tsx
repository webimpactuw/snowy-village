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
      <a href={link} className="rounded-xl grid grid-cols-2">
        <img src={imgFileName} alt={companyName + " Logo"} className="w-1/4" />
        <button className="bg-highlight-color text-text-color-2">
          Order Online with {companyName}
        </button>
      </a>
    </div>
  );
}

export default OrderOnline;
