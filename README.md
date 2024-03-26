# Package Metadata

![GitHub](https://img.shields.io/github/license/omermecitoglu/next-openapi-interface-generator)
![GitHub package.json version](https://img.shields.io/github/package-json/v/omermecitoglu/next-openapi-interface-generator)

Provides a simple and convenient way to access important information about your package, such as its name, version, and scope.

## Installation

```bash
npm install @omer-x/package-metadata
```

## Usage

```javascript
import getPackageMetadata from "@omer-x/package-metadata";

const packageMetadata = getPackageMetadata();
console.log(packageMetadata);
```

## API

### `getPackageMetadata(): PackageMetadata`

Function to extract metadata from `package.json`.

#### Returns

```json
{
  "scope": "@omer-x",
  "packageName": "@omer-x/package-metadata",
  "moduleName": "package-metadata",
  "serviceName": "Package Metadata",
  "version": "0.1.0"
}
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
