import amqplib from "amqplib";
import { env } from "./env";

export async function rabbitmq() {
  const queue = "orderCreated";

  const connection = await amqplib.connect(env.RABBITMQ_URI);
  const channel = await connection.createChannel();
  await channel.assertQueue(queue, { durable: false });

  return channel;
}
