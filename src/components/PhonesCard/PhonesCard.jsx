const PhonesCard = ({ phone }) => {
  const { brand, image, phone_name, slug } = phone;
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-xl text-black p-6">
        <figure>
          <img
            src={image}
            alt={phone_name}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            Shoes!
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Fashion</div>
            <div className="badge badge-outline">Products</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhonesCard;
