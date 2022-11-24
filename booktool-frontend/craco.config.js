const path = require(`path`);

module.exports = {
    webpack: {
        alias: {
            "@": path.resolve(__dirname, "src"),
            "@Assets": path.resolve(__dirname, "src/Assets"),
            "@Components": path.resolve(__dirname, "src/Components"),
            "@Constants": path.resolve(__dirname, "src/Constants"),
            "@Hooks": path.resolve(__dirname, "src/Hooks"),
            "@Pages": path.resolve(__dirname, "src/Pages"),
            "@Services": path.resolve(__dirname, "src/Services"),
            "@Store": path.resolve(__dirname, "src/Store"),
            "@Styles": path.resolve(__dirname, "src/Styles"),
            "@Test": path.resolve(__dirname, "src/Test"),
            "@Utils": path.resolve(__dirname, "src/Utils"),
            "@Types": path.resolve(__dirname, "src/Types"),
            "@Actions": path.resolve(__dirname, "src/Store/Actions"),
            "@Slices": path.resolve(__dirname, "src/Store/Slices"),
        },
    },
};