function MenuItem({
  imgFileName,
  name,
  price,
  description,
}: {
  imgFileName: string;
  name: string;
  price: string;
  description: string;
}) {
  return (
    <div>
      <img className="rounded-t-xl" src={imgFileName} alt={name} />
      <div className="grid grid-cols-2 content-around aspect-square">
        <h3 className="text-center">{name}</h3>
        <h3 className="text-center">{price}</h3>
        <p className="col-span-2 overflow-scroll md:overflow-hidden hover:overflow-visible">
          {description}
        </p>
      </div>
    </div>
  );
}

export default MenuItem;
