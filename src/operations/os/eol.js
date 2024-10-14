import os from "node:os";

export const EOL = async () => {
  console.log(`System End-Of-Line (EOL) is: ${JSON.stringify(os.EOL)}`);
}