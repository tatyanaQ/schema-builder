import { readFile, writeFile } from "fs/promises";
import path from "path";
import ejs from "ejs";

interface CollectionProperty {
  name: string;
  type: "string";
}

interface CreateCollectionBody {
  name: string;
  properties: CollectionProperty[];
}

function capitalizeFirstLetter(text: string) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

export async function createCollection({
  data,
}: {
  data: CreateCollectionBody;
}) {
  const { name, properties } = data;
  const namePlural = `${name}s`;

  const templateFileName = path.join(
    __dirname,
    "..",
    "templates",
    "mongo-schema.ejs"
  );
  const template = await readFile(templateFileName, { encoding: "utf8" });

  const schemaFileName = path.join(
    process.cwd(),
    "src",
    "schemas",
    `${namePlural}.ts`
  );

  const schemaContent = ejs.render(template, {
    collection: { name, nameCapital: capitalizeFirstLetter(name) },
    properties: properties.map(({ name, type }) => ({
      name,
      tsType: type,
      mongoProp: `{ type: ${capitalizeFirstLetter(type)} }`,
    })),
  });

  await writeFile(schemaFileName, schemaContent);
}
