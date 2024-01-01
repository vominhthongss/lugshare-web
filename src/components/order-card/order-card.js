import Skeleton from '@mui/material/Skeleton';
function OrderCard({ order, index }) {
  return (
    <div className="bg-white p-4 rounded shadow-md hover:shadow-lg border cursor-pointer">
      <h2 className="text-xl font-bold mb-2">Order {index + 1}</h2>
      <div className="mb-2 flex space-x-2">
        <p>Recipient:</p>{" "}
        <p className="hover:underline cursor-pointer hover:text-blue-500">
          {order.owner_first_name && order.owner_last_name ? `${order.owner_first_name} ${order.owner_last_name}` : <Skeleton variant="text" sx={{ fontSize: '1rem', width: '100%' }} />}
        </p>
      </div>
      <p className="mb-2 flex">✈️ {order.departure ?? <Skeleton variant="text" sx={{ fontSize: '1rem', width: '100%' }} />}</p>
      <p>↓</p>
      <p className="mb-2 flex">⛳️ {order.destination ?? <Skeleton variant="text" sx={{ fontSize: '1rem', width: '100%' }} />}</p>
      <p className="mb-2 flex">⏱️ {order.posted_time ?? <Skeleton variant="text" sx={{ fontSize: '1rem', width: '100%' }} />}</p>
      <div className="flex flex-row space-x-2">
        <p>🚚 Remain Weight:</p>{" "}
        <p className="text-green-700 font-bold">{order.delivery_fee ?? <Skeleton variant="text" sx={{ fontSize: '1rem', width: '100%' }} />} kg</p>
      </div>
    </div>
  );
}

export default OrderCard;
