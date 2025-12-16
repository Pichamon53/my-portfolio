module.exports = {
  darkMode: 'class', // ใช้ dark mode ผ่าน class
  content: ['./src/**/*.{js,ts,jsx,tsx}'],  // กำหนดไฟล์ที่ Tailwind จะคอมไพล์
  theme: {
    extend: {
      fontFamily: {
        sarabun: ['"Sarabun"', 'sans-serif'],  // ใช้ฟอนต์ Sarabun
      },
      animation: {
        blob: "blob 7s infinite",  // กำหนด animation blob
      },
      keyframes: {
        blob: {
          "0%, 100%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(30px, -50px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
        },
      },
    },
  },
  plugins: [],
};
