import { Server } from "node:http";
import { app } from "./app.js";
import { env } from "./config/env.js";
import { SERVER_NAME } from "./config/constant.js";

let server: Server | undefined;
let isShuttingDown = false;

const start = async (): Promise<void> => {
  server = app.listen(env.port, () => {
    console.log(
      `${SERVER_NAME} listening on http://localhost:${env.port} in ${env.nodeEnv} mode`,
    );
  });
};

const closeHttpServer = async (): Promise<void> => {
  if (!server) {
    return;
  }

  await new Promise<void>((resolve, reject) => {
    server?.close((error) => {
      if (error) {
        return reject(error);
      }
      resolve();
    });
  });
};

const shutdown = async (signal: NodeJS.Signals): Promise<void> => {
  if (isShuttingDown) {
    return;
  }
  isShuttingDown = true;
  console.log(`${signal} received. Closing services.`);
  try {
    await closeHttpServer();
    process.exit(0);
  } catch (error) {
    console.error("Failed to shut down cleanly.", error);
    process.exit(1);
  }
};

process.on("SIGINT", () => void shutdown("SIGINT"));
process.on("SIGTERM", () => void shutdown("SIGTERM"));

void start().catch(async (error) => {
  console.error(`Failed to start ${SERVER_NAME}.`, error);
  process.exit(1);
});