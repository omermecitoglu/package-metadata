import path from "node:path";
import { describe, expect, it } from "@jest/globals";
import getPackageMetadata from ".";

describe("Package Metadata", () => {
  it("should correctly generate package metadata", () => {
    const packageJSON = path.resolve(process.cwd(), "package.json");
    const version = require(packageJSON).version;
    const metadata = getPackageMetadata();
    expect(metadata.scope).toBe("@omer-x");
    expect(metadata.packageName).toBe("@omer-x/package-metadata");
    expect(metadata.moduleName).toBe("package-metadata");
    expect(metadata.serviceName).toBe("Package Metadata");
    expect(metadata.version).toBe(version);
  });
});
