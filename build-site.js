import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
delete require.cache[require.resolve("./build-site.cjs")];
require("./build-site.cjs");
