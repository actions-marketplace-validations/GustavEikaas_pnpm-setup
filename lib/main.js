"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@actions/core");
const node_child_process_1 = require("node:child_process");
function main() {
    try {
        (0, node_child_process_1.execSync)("npm i -g pnpm");
    }
    catch (_error) {
        (0, core_1.setFailed)("Failed to install pnpm");
    }
}
main();
