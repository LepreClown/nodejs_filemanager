import {cd} from "./cd.js";

const DEFAULT_ARGS = ["../"]

export const up = async () => {
  await cd({args: DEFAULT_ARGS});
}