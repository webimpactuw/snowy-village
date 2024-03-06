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
    <div className="bg-white w-1/4 aspect-square m-auto rounded-lg">
      <a href={link} className="grid justify-center w-full h-full">
        <img
          src={imgFileName}
          alt={companyName + " Logo"}
          className="w-2/3 aspect-square m-auto rounded-md"
        />
        <p className="text-center text-text-color-1 font-semibold w-11/12 text-xs sm:text-sm md:text-base lg:text-lg">
          Order Online with {companyName}
        </p>
      </a>
    </div>
  );
}

export default OrderButton;
