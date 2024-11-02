import amqplib from "amqplib";
import * as notificationRepositories from "../repositories/notification.repositories";

export async function rabbitmq() {
  const queue = "orderCreated";

  const connection = await amqplib.connect("amqp://rabbitmq");
  const channel = await connection.createChannel();
  await channel.assertQueue(queue, { durable: false });

  return channel;
}

export async function consumeOrderCreateEvents() {
  const channel = await rabbitmq();

  channel.consume("orderCreated", async (message) => {
    if (message !== null) {
      console.log(message.content.toString());
      const { productName, price, sellerName } = JSON.parse(
        message.content.toString()
      );
      await notificationRepositories.createNotification(
        productName,
        price,
        sellerName
      );
      //Insert data to Database
    }
  });
}
