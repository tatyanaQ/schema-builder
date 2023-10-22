import { readFile, writeFile } from "fs/promises";
import path from "path";
import ejs from "ejs";
import { Injectable } from "@nestjs/common";
import { BuilderUtil } from "./utils";

interface CollectionProperty {
  name: string;
  type: "string";
}

export interface CreateCollectionBody {
  name: string;
  properties: CollectionProperty[];
}

@Injectable()
export class BuilderService {
  constructor(private builderUtil: BuilderUtil) {}

  async createCollection({ data }: { data: CreateCollectionBody }) {
    const { name, properties } = data;
    const namePlural = `${name}s`;

    const templateFileName = path.join(
      __dirname,
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
      collection: {
        name,
        nameCapital: this.builderUtil.capitalizeFirstLetter(name),
      },
      properties: properties.map(({ name, type }) => ({
        name,
        tsType: type,
        mongoProp: `{ type: ${this.builderUtil.capitalizeFirstLetter(type)} }`,
      })),
    });

    await writeFile(schemaFileName, schemaContent);
  }
}
