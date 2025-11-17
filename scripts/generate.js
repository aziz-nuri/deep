// scripts/generate.js
const fs = require('fs');
const path = require('path');

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  console.error("ERROR: Missing API_KEY. Add it in GitHub Secrets.");
  process.exit(1);
}

async function build() {
  console.log("Running generate.js with secret...");

  const apiUrl = "https://api.chatanywhere.tech/v1/chat/completions";

  // Panggil API pakai fetch bawaan Node 18 (TIDAK perlu axios)
  const response = await fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${API_KEY}`
    },
    body: JSON.stringify({
      model: "gpt-4o-mini",
      messages: [
        { role: "user", content: "Buatkan teks sambutan singkat untuk halaman ini." }
      ]
    })
  });

  const json = await response.json();
  const text = json?.choices?.[0]?.message?.content || "Hello world!";

  // Buat folder output
  const outputDir = path.join(__dirname, "../public");
  fs.mkdirSync(outputDir, { recursive: true });

  fs.writeFileSync(
    path.join(outputDir, "index.html"),
    `<h1>${text}</h1>`,
    "utf8"
  );

  console.log("Generated public/index.html");
}

build().catch(err => {
  console.error(err);
  process.exit(1);
});
