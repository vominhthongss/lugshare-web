function OrderCard({ order, index }) {
  return (
    <div className="bg-white p-4 rounded shadow-md hover:shadow-lg border cursor-pointer">
      <h2 className="text-xl font-bold mb-2">Order {index + 1}</h2>
      <div className="mb-2 flex space-x-2">
        <p>Recipient:</p>{" "}
        <p className="hover:underline cursor-pointer hover:text-blue-500">
          {order.recipient.name}
        </p>
      </div>
      <p className="mb-2">✈️ {order.departure}</p>
      <p>↓</p>
      <p className="mb-2">⛳️ {order.destination}</p>
      <p className="mb-2">⏱️ {order.deliveryTime}</p>
      <div className="flex flex-row space-x-2">
        <p>🚚 Remain Weight:</p>{" "}
        <p className="text-green-700 font-bold">{order.remainWeight} kg</p>
      </div>
    </div>
  );
}

export default OrderCard;
