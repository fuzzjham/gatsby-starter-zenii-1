module.exports = () => ({
    plugins: [
        require("tailwindcss"),
        require("postcss-import"),
        
        require("postcss-nested"),
        // require("precss"),
        require("autoprefixer")
    ],
});