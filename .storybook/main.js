const path = require("path"); // Добавьте эту строку в начало файла

function getAbsolutePath(value) {
    return path.dirname(require.resolve(path.join(value, "package.json")));
}

module.exports = {
    stories: [
        "../stories/**/*.mdx",
        "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
        "../packages/client/src/components/**/*stories.@(js|jsx|mjs|ts|tsx)"
    ],
    addons: [
        getAbsolutePath("@storybook/preset-scss"),
        getAbsolutePath("@storybook/addon-links"),
        getAbsolutePath("@storybook/addon-essentials"),
        getAbsolutePath("@storybook/addon-onboarding"),
        getAbsolutePath("@storybook/addon-interactions"),
        getAbsolutePath('@storybook/addon-backgrounds')
    ],
    framework: {
        name: getAbsolutePath("@storybook/react-webpack5"),
        options: {},
    },
    docs: {
        autodocs: "tag",
    },
    webpackFinal: async (config) => {
        config.module.rules.push({
            test: /\.(ts|tsx)$/,
            use: [
                {
                    loader: require.resolve('babel-loader'),
                    options: {
                        presets: [
                            require.resolve('@babel/preset-env'),
                            require.resolve('@babel/preset-react'),
                            require.resolve('@babel/preset-typescript'),
                        ],
                        plugins: [
                            require.resolve('@babel/plugin-proposal-class-properties'),
                            require.resolve('@babel/plugin-proposal-object-rest-spread'),
                        ],
                    },
                },
            ],
            exclude: /node_modules/,
        });

        // Правило для обработки SCSS файлов

        config.module.rules.push({
            test: /\.scss$/,
            use: [
                require.resolve('style-loader'),
                require.resolve('css-loader'),
                require.resolve('sass-loader'),
            ], include: path.resolve(__dirname, '../client/src'),

        });

        config.module.rules.push({
            test: /\.(png|jpg|jpeg|gif|svg)$/,
            use: [
                {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'images/',
                    },
                },
            ],
            include: path.resolve(__dirname, '../client'),
        });

        config.resolve.extensions.push('.ts', '.tsx', '.scss');
        return config;
    },
};
