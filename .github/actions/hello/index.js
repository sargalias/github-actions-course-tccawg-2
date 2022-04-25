const core = require("@actions/core");
const github = require("@actions/github");

try {
  core.debug("Debug message");
  core.warning("Warning message");
  core.error("Error message");

  const name = core.getInput("who-to-greet");
  console.log(`Hello ${name}`);

  const foo = "foo";
  core.setSecret(foo);
  console.log(`Here's a secret: ${foo}`);

  const time = new Date();
  core.setOutput("time", time.toTimeString());

  core.startGroup("github object");
  console.log(JSON.stringify(github, null, 2));
  core.endGroup("github object");

  core.exportVariable("HELLO", "hello");
} catch (error) {
  core.setFailed(error.message);
}
