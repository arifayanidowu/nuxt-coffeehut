export default defineEventHandler(async (event) => {
  const snipcartEvent = await readBody(event);

  let subscription;

  switch (snipcartEvent.eventName) {
    case "order.completed":
      subscription = snipcartEvent;
      await prisma.order.create({
        data: {
          userEmail: subscription.content.items[0].customFields[0].value,
          items: subscription.content.items,
          paymentStatus: subscription.content.paymentStatus,
          status: subscription.content.status,
          orderEvent: subscription.eventName,
          trackingNumber: subscription.content.trackingNumber,
          invoiceNumber: subscription.content.invoiceNumber,
          createdOn: subscription.createdOn,
          quantity: subscription.content.itemsCount,
          loggedInUserEmail:
            subscription.content.items[0].customFields[0].value,
          token: subscription.content.token,
        },
      });
      break;
    case "order.status.changed":
      subscription = snipcartEvent;
      await prisma.order.update({
        where: {
          token: subscription.content.token,
        },
        data: {
          status: subscription.content.status,
          orderEvent: subscription.eventName,
        },
      });
      break;
    case "order.paymentStatus.changed":
      subscription = snipcartEvent;
      await prisma.order.update({
        where: {
          token: subscription.content.token,
        },
        data: {
          paymentStatus: subscription.content.paymentStatus,
          orderEvent: subscription.eventName,
        },
      });
    case "order.trackingNumber.changed":
      subscription = snipcartEvent;
      await prisma.order.update({
        where: {
          token: subscription.content.token,
        },
        data: {
          trackingNumber: subscription.content.trackingNumber,
          orderEvent: subscription.eventName,
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
