function MenuItem({
  imgFileName,
  name,
  price,
  description,
}: {
  imgFileName: string;
  name: string;
  price: number;
  description: string;
}) {
  return (
    <div>
      <img src={imgFileName} alt={name} />
      <h2>{name + " | " + price}</h2>
      <p>{description}</p>
    </div>
  );
}

export default MenuItem;
