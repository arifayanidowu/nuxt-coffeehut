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
          quantity: subscription.itemsCount,
        },
      });
      break;
    case "order.status.changed":
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
          quantity: subscription.itemsCount,
        },
      });
      break;
    case "order.paymentStatus.changed":
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
          quantity: subscription.itemsCount,
        },
      });
      break;
    case "order.trackingNumber.changed":
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
          quantity: subscription.itemsCount,
        },
      });
      break;
    case "order.refund.created":
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
          quantity: subscription.itemsCount,
        },
      });
      break;
    case "order.notification.created":
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
          quantity: subscription.itemsCount,
        },
      });
      break;
    default:
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
          quantity: subscription.itemsCount,
        },
      });
      break;
  }
  return {
    statusCode: 200,
    body: subscription,
  };
});
