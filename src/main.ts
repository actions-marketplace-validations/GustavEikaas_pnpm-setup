import { execSync } from "node:child_process";
import * as core from "@actions/core";

function main() {
  try {
    execSync("npm i -g pnpm");
  } catch (_error) {
    console.error("rip");
    console.log(core.warning);
    // setFailed("Failed to install pnpm");
  }
}

main();
