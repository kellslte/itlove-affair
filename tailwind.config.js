/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./index.html"
  ],
  theme: {
    extend: {
      screens: {
        xs: "320px",
        sm: "480px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1440px",
        mxl: { max: "1279px" },
        mlg: { max: "1023px" },
        mmlg: { max: "976px" },
        mmd: { max: "768px" },
        msm: { max: "639px" },
        mxs: { max: "480px" },
        mxxs: { max: "400px" },
        mxxss: { max: "375px" },
        mxxssw: { max: "355px" },
        mxxxs: { max: "320px" },
        "ms-height": { raw: "(max-height: 700px)" },
        "mxl-height": { raw: "(max-height: 850px)" },
      }
    },
  },
  plugins: [],
}

