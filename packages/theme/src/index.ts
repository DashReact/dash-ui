import plugin from 'tailwindcss/plugin';
export * from './lib/use-theme/use-theme';

const dashUiLib = plugin(({ addComponents, theme }) => {
    addComponents({
        '*': {
            transition: 'all 0.2s ease-in-out',
        },
    });
})

module.exports.default = dashUiLib;

