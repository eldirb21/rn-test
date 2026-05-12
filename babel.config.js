module.exports = function (api) {
  api.cache(true);

  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module:react-native-dotenv",
        {
          moduleName: "@env",
          path: ".env",
        },
      ],
      [
        "module-resolver",
        {
          root: ["./"],

          alias: {
            "@atoms":
              ".src/components/atoms",

            "@molecules":
              ".src/components/molecules",

            "@hooks":
              "./src/hooks",

            "@constants":
              "./src/constants",

            "@screens":
              "./src/screens",

            "@navigation":
              "./src/navigation",

            "@services":
              "./src/services",

            "@storage":
              "./src/storage",

            "@theme":
              "./src/theme",

            "@utils":
              "./src/utils",
          },
        },
      ],
    ],
  };
};