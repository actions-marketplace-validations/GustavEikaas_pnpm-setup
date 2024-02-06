import { setFailed } from "@actions/core";
import { execSync } from "node:child_process";

function main() {
  try {
    execSync("npm i -g pnpm");
  } catch (_error) {
    setFailed("Failed to install pnpm");
  }
}

main();
