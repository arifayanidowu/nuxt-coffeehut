import { prisma } from "../utils/db/prisma";

export default defineEventHandler(async (event) => {
  const snipcartEvent = await readBody(event);
  let subscription;

  switch (snipcartEvent.eventName) {
    case "order.completed":
      subscription = snipcartEvent;
      await prisma.order.create({
        data: {
          userEmail: subscription.content.email,
          items: subscription.content.items,
          paymentStatus: subscription.content.paymentStatus,
          status: subscription.content.status,
          orderEvent: subscription.eventName,
          trackingNumber: subscription.content.trackingNumber,
          invoiceNumber: subscription.content.invoiceNumber,
          createdOn: subscription.createdOn,
          quantity: subscription.content.itemsCount,
        },
      });
      break;
    default:
      subscription = snipcartEvent;
      console.log(subscription);
      break;
  }
  return {
    statusCode: 200,
    body: subscription,
  };
});
