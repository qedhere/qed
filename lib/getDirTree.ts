import process from "process";
import path from "path";
import dirTree from "directory-tree";

const DOCS_DIR = path.join(process.cwd(), "pages", "docs");
export const docsTree = dirTree(DOCS_DIR);;
