export default defineEventHandler(async (event) => {
  const snipcartEvent = await readBody(event);
  let subscription;

  switch (snipcartEvent.eventName) {
    case "order.completed":
      // Do something
      console.log("Order completed:", snipcartEvent.content.items);
      subscription = snipcartEvent.content.items;
      break;
    case "order.status.changed":
      // Do something
      console.log("Order status changed:", snipcartEvent.content.items);
      subscription = snipcartEvent.content.items;
      break;
    case "order.paymentStatus.changed":
      console.log("Order payment status changed:", snipcartEvent.content.items);
      subscription = snipcartEvent.content.items;
      // Do something
      break;
    case "order.trackingNumber.changed":
      console.log(
        "Order tracking number changed:",
        snipcartEvent.content.items
      );
      subscription = snipcartEvent.content.items;
      // Do something
      break;
    case "order.refund.created":
      console.log("Order refund created:", snipcartEvent.content.items);
      // Do something
      break;
    case "order.notification.created":
      console.log("Order notification created:", snipcartEvent.content.items);
      subscription = snipcartEvent.content.items;
      // Do something
      break;
    default:
      console.log("Default:", snipcartEvent.content.items);
      subscription = snipcartEvent.content.items;
      // Do something
      break;
  }
  return {
    statusCode: 200,
    body: subscription,
  };
});
