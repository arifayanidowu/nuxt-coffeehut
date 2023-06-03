import { getServerSession } from "#auth";

export default defineEventHandler(async (event) => {
  const snipcartEvent = await readBody(event);
  const session = await getServerSession(event);

  let subscription;

  if (!session) {
    throw createError({ statusMessage: "Unauthenticated", statusCode: 403 });
  }

  switch (snipcartEvent.eventName) {
    case "order.completed":
      subscription = snipcartEvent;
      await prisma.order.create({
        data: {
          userEmail: session?.user?.email,
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
