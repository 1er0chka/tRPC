/** @type { import('@storybook/react').Preview } */
const preview = {
    parameters: {
        actions: {argTypesRegex: "^on[A-Z].*"},
        backgrounds: {
            default: 'modals', // Имя выбранного по умолчанию фона
            values: [
                {name: 'light', value: '#F0F0F0'},
                {name: 'dark', value: '#333333'},
                {
                    name: 'gradient',
                    value: 'linear-gradient(317deg, rgba(240, 101, 67, 0.6) 0%, rgba(255, 190, 61, 0.7) 74%)'
                },
                {
                    name: 'modals',
                    value: 'rgb(227,182,113)'
                }
            ],
        },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
};

export default preview;
