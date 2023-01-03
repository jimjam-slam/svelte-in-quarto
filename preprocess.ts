console.log(
  "Output directory: " +
  Deno.env.get("QUARTO_PROJECT_OUTPUT_DIR"));

const in_files = Deno.env.get("QUARTO_PROJECT_INPUT_FILES")

console.log(in_files.split("\n").length + " files to render:");

console.log(in_files)