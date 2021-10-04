import { promises as fs } from "fs";

let realPath = null;

export default {
  async index() {
    return JSON.parse(await fs.readFile(`${realPath}/app/db/db.json`, "utf8"));
  },

  async create(newEntry) {
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
