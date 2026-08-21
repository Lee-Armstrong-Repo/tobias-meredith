const { spawnSync } = require("child_process");
const path = require("path");

const root = path.join(__dirname, "..");

console.log("Building production app with webpack (required before start)...");

const build = spawnSync("npx", ["next", "build", "--webpack"], {
  cwd: root,
  stdio: "inherit",
  env: {
    ...process.env,
    NODE_ENV: "production",
  },
  shell: process.platform === "win32",
});

if (build.status !== 0) {
  console.error("Production build failed. Fix the build errors, then Restart the app.");
  process.exit(build.status == null ? 1 : build.status);
}

require("./../server.js");
