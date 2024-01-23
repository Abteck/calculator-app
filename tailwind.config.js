/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        sm: "375px",
      },
      colors: {
        //        Theme 1
        //  Backgrounds
        "dark-blue-bg-main": "hsl(222, 26%, 31%)", // (main background)
        "dark-blue-tg": "hsl(223, 31%, 20%)", // (toggle bg, keypad bg)
        "dark-blue-sc": "hsl(224, 36%, 15%)", // (screen background)

        //  Keys
        "desaturated-blue": "hsl(225, 21%, 49%)", // (key background)
        "dark-blue-shadow": "hsl(224, 28%, 35%)", // (key shadow)
        Red: "hsl(6, 63%, 50%)", // (key background, toggle)
        "dark-red": "hsl(6, 70%, 34%)", // (key shadow)
        "Light-grayish-orange": "hsl(30, 25%, 89%)", // (key background)
        "Grayish orange": "hsl(28, 16%, 65%)", // (key shadow)

        //  Text
        "Very-dark-grayish-blue": "hsl(221, 14%, 31%)",
        White: "hsl(0, 0%, 100%)",

        //  Theme 2
        //  Backgrounds
        "light-gray": "hsl(0, 0%, 90%)", // (main background)
        "grayish-red": "hsl(0, 5%, 81%)", // (toggle background, keypad background)
        "very-light-gray": "hsl(0, 0%, 93%)", // (screen background)

        // Keys
        "Dark-moderate-cyan": "hsl(185, 42%, 37%)", // (key background)
        "Very-dark-cyan": "hsl(185, 58%, 25%)", // (key shadow)
        Orange: "hsl(25, 98%, 40%)", // (key background, toggle)
        "Dark-orange": "hsl(25, 99%, 27%)", // (key shadow)
        "Light-grayish-yellow": "hsl(45, 7%, 89%)", // (key background)
        "Dark-grayish-orange": "hsl(35, 11%, 61%)", // (key shadow)

        //  Text
        "Very dark grayish yellow": "hsl(60, 10%, 19%)",
        White: "hsl(0, 0%, 100%)", // (text)

        //  Theme 3
        //  Backgrounds
        "Very-dark-v": "hsl(268, 75%, 9%)", // (main background)
        "Very-dark-v-tg": "hsl(268, 71%, 12%)", // (tggle bg, kypad bg, screenbg)

        // #### Keys
        "Dark-v": "hsl(281, 89%, 26%)", // (key background)
        "Vivid-magenta": "hsl(285, 91%, 52%)", // (key shadow)
        "Pure-cyan": "hsl(176, 100%, 44%)", // (key background, toggle)
        "Soft-cyan": "hsl(177, 92%, 70%)", // (key shadow)
        "Very-dark-v-key": "hsl(268, 47%, 21%)", // (key background)
        "Dark-magenta": "hsl(290, 70%, 36%)", // (key shadow)

        // #### Text
        "Light-yellow": "hsl(52, 100%, 62%)",
        "Very-dark-b": "hsl(198, 20%, 13%)",
        White: "hsl(0, 0%, 100%)", // (text)
      },
      fontFamily: {
        "League Spartan": "'League Spartan' sans-serif",
      },
    },
  },
  plugins: [],
};
