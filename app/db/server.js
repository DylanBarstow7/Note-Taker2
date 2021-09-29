import { promises as fs } from "fs";
import { v4 as uuidv4 } from "uuid";

let realPath = null;

export default {
  async index() {
    return JSON.parse(await fs.readFile(`${realPath}/app/db/db.json`, "utf8"));
  },

  async create(entry) {
    const { title, text } = entry;
    const newEntry = { id: uuidv4(), title, text };
    const currentEntry = await this.index();
    fs.writeFile(
      `${realPath}/app/db/db.json`,
      JSON.stringify([...currentEntry, newEntry])
    );
  },
};

(async () => {
  realPath = await fs.realpath("./");
})();
