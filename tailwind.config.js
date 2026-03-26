/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,css}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        "primary-dark": "var(--primary-dark)",
        accent: "var(--accent)",
        text: "var(--text)",
        "bg-light": "var(--bg-light)",

        // ✅ KHÔNG override toàn bộ gray
        // 👉 chỉ thêm default nếu muốn dùng var
        gray: {
          DEFAULT: "var(--gray)",
        },
      },

      keyframes: {
        slideIn: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        slideOut: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },

      animation: {
        "slide-in": "slideIn 1s ease forwards",
        "slide-out": "slideOut 1s ease forwards",
      },
    },
  },
  plugins: [],
};
