import os from "node:os";

export const username = async () => {
  console.log(`Username: ${os.userInfo().username}`);
}