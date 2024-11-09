export const Product = ({ data }) => {
  const formatCurrency = (value) => {
    return value.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    });
  };

  return (
    <section className="max-w-40 max-h-64 w-full flex items-center flex-col bg-zinc-900 border border-zinc-800 rounded-lg px-2 py-4 gap-2">
      <div className="relative w-full aspect-square">
        <img
          src={data.thumbnail.replace(/\w\.jpg/gi, "W.jpg")}
          alt="product-image"
          className="absolute w-full h-full object-cover rounded-lg"
        />
      </div>
      <p className="w-full text-sm text-zinc-200 h-10 truncate">{data.title}</p>
      <span className="text-lg text-zinc-50 font-semibold">
        {formatCurrency(data.price)}
      </span>
    </section>
  );
};
