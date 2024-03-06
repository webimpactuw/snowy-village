function OrderButton({
  imgFileName,
  companyName,
  link,
}: {
  imgFileName: string;
  companyName: string;
  link: string;
}) {
  return (
    <div className="bg-white w-1/4 aspect-square m-auto">
      <a href={link} className="grid justify-center w-full h-full">
        <img
          src={imgFileName}
          alt={companyName + " Logo"}
          className="w-2/3 aspect-square m-auto"
        />
        <p className="text-center text-xs sm:text-sm md:text-base lg:text-lg">
          Order Online with {companyName}
        </p>
      </a>
    </div>
  );
}

export default OrderButton;
