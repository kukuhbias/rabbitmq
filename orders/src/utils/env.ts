import { cleanEnv, str } from "envalid";

export const env = cleanEnv(process.env, {
  MONGO_URI: str(),
  RABBITMQ_URI: str(),
  API_GATEWAY_HOST: str(),
  NOTIFICATIONS_SERVICE_HOST: str(),
  ORDERS_SERVICE_HOST: str(),
});
