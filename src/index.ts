import fs from "node:fs";
import path from "node:path";

type PackageMetadata = {
  scope: string | null,
  packageName: string,
  moduleName: string,
  serviceName: string,
  version: string,
};

function capitalize(text: string) {
  return text.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
}

function getScopeName(packageName: string) {
  const scopeRegex = /^@([^/]+)\//;
  const match = packageName.match(scopeRegex);
  return match ? `@${match[1]}` : null;
}

function getModuleName(packageName: string) {
  return packageName.split("/").pop() ?? null;
}

export default function getPackageMetadata(): PackageMetadata {
  const filePath = path.resolve(process.cwd(), "package.json");
  const content = fs.readFileSync(filePath, "utf-8");
  const data = JSON.parse(content) as { name?: string, version?: string };
  const packageName = data.name ?? "unnamed-app";
  const moduleName = getModuleName(packageName) ?? "unknown-package";
  return {
    scope: getScopeName(packageName),
    packageName,
    moduleName,
    serviceName: capitalize(moduleName.replace(/-/g, " ")),
    version: data.version ?? "1.0.0",
  };
}
