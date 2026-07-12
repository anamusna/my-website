import { readFileSync, readdirSync, statSync, writeFileSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import prettier from "prettier";

const __dirname = dirname(fileURLToPath(import.meta.url));
const blogContentDir = join(__dirname, "../src/data/blogContent");

const PARSER_BY_LANGUAGE = {
  typescript: "typescript",
  javascript: "typescript",
  html: "html",
  yaml: "yaml",
};

const formatCode = async (code, language) => {
  const parser = PARSER_BY_LANGUAGE[language];
  if (!parser) return code.trimEnd();

  const formatted = await prettier.format(code, {
    parser,
    semi: true,
    singleQuote: false,
    tabWidth: 2,
    printWidth: 80,
  });

  return formatted.trimEnd();
};

const formatInlineCodeBlocks = async (source) => {
  const regex = /content: `([\s\S]*?)`,\n(\s+)language: "(\w+)"/g;
  const matches = [...source.matchAll(regex)];

  if (matches.length === 0) return source;

  let result = source;
  for (const match of matches.reverse()) {
    const [full, code, indent, language] = match;
    if (language === "text") continue;

    try {
      const formatted = await formatCode(code, language);
      const replacement = `content: \`${formatted}\`,\n${indent}language: "${language}"`;
      result =
        result.slice(0, match.index) +
        replacement +
        result.slice(match.index + full.length);
    } catch (error) {
      console.warn(`Skipped ${language} block: ${error.message}`);
    }
  }

  return result;
};

const walkTsFiles = (dir) => {
  const entries = readdirSync(dir);
  const files = [];

  for (const entry of entries) {
    const fullPath = join(dir, entry);
    if (statSync(fullPath).isDirectory()) {
      files.push(...walkTsFiles(fullPath));
    } else if (entry.endsWith(".ts") && !entry.endsWith("shared-content.ts")) {
      files.push(fullPath);
    }
  }

  return files;
};

for (const filePath of walkTsFiles(blogContentDir)) {
  const original = readFileSync(filePath, "utf8");
  const formatted = await formatInlineCodeBlocks(original);

  if (formatted !== original) {
    writeFileSync(filePath, formatted);
    console.log(`Formatted ${filePath.replace(`${join(__dirname, "..")}/`, "")}`);
  }
}
