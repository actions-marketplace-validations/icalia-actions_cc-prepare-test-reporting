import { exec } from "@actions/exec";
import { getInput } from "@actions/core";

import {
  reporter,
  defaultVersion,
  normalizeEnv,
  setupTestReporter,
} from "@icalialabs/cc-test-reporter-base";

export async function pre() {
  const reporterVersion = getInput("version") || defaultVersion;
  await setupTestReporter(reporterVersion);
  return 0;
}

export async function main() {
  await pre();

  const debugMode = getInput("debug") == "true";
  const args = ["before-build"];
  if (debugMode) args.push("--debug");
  const env = normalizeEnv() as { [key: string]: string };

  await exec(reporter, args, { env });

  return 0;
}
