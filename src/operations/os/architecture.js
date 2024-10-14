import os from "node:os";

export const architecture = async () => {
  console.log(`Architecture is: ${os.arch()}`);
}