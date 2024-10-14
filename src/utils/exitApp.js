export default function exitApp(username = "anonymous") {
  console.log(`Thank you for using File Manager, ${username}, goodbye!`);
  process.exit();
}