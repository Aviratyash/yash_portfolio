/** @type {import('tailwindcss').Config} */
module.exports = {
content: [
'./app/**/*.{js,jsx,ts,tsx}',
'./components/**/*.{js,jsx,ts,tsx}'
],
theme: {
extend: {
colors: {
'vc-blue-900': '#071229',
'vc-blue-800': '#0b2b44',
'vc-blue-600': '#176083',
'vc-accent': '#59b1d6'
}
}
},
plugins: []
}
