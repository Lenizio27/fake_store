/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        c1: "var(--c1)",
        c2: "var(--c2)",
        c3: "var(--c3)",
        c4: "var(--c4)",
        c5: "var(--c5)",
        c6: "var(--c6)",
        c7: "var(--c7)",

        s1: "var(--s1)",
        s2: "var(--s2)",
        s3: "var(--s3)",
        s4: "var(--s4)",
        s5: "var(--s5)",
        s6: "var(--s6)",
        s7: "var(--s7)",
        s8: "var(--s8)",
        
        b1: "var(--b1)",
      },
    },
  },
  plugins: [],
}
