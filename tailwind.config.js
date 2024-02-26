export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      "lora": ["Lora", "serif"],
      "spaceMono": ["Space Mono", "monospace"]
    },
    extend: {},
  },
  plugins: [
    require("@xpd/tailwind-3dtransforms")
  ],
}

