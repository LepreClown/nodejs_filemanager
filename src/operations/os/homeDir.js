import os from "node:os";

export const homeDir = async () => {
  console.log(`Homedir is: ${os.homedir()}`);
}