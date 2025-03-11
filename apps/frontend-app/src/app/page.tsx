import { log } from "@repo/logger";
import { Homepage } from "../components";

export const metadata = {
  title: "Store | Kitchen Sink",
};

export default function Store() {
  log("Hey! This is the Store page.");

  return <Homepage />;
}
