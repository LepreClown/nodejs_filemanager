import fs from "node:fs/promises";

export const checkIsHasDir = async (path) => {
  try {
    const stats = await fs.stat(path);
    return stats.isDirectory();
  } catch {
    return false;
  }
};