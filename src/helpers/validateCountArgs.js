export const validateCountArgs = (args, expectedArgs) => {
  if (args.length !== expectedArgs) {
    return true;
  } else {
    console.error(`Expected ${expectedArgs} argument(s), but got ${args.length}`);
    return false;
  }
};