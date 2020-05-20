import { basename, dirname } from "path";
import spawn = require("cross-spawn");

const getGitLastUpdatedTimeStamp = (filePath: string): number | undefined => {
  try {
    const timestamp = spawn
      .sync("git", ["log", "-1", "--format=%at", basename(filePath)], {
        cwd: dirname(filePath),
      })
      // .stdout.toString('utf-8')
      .stdout.toString();

    return parseInt(timestamp) * 1000;
  } catch (e) {
    /* do not handle for now */
    return undefined;
  }
};

export default getGitLastUpdatedTimeStamp;
