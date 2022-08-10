import process from "process";
import matter from "gray-matter";
import path from "path";
import fs from "fs";

const DOCS_DIR = path.join(process.cwd(), "pages", "docs");

export function parseFrontmatter(filePath) {
  try {
    const data = fs.readFileSync(path.join(DOCS_DIR, filePath), "utf8");
    const frontmatter = matter(data);
    return frontmatter.data;
  } catch {
    return undefined;
  }
}
