import { defaultTheme } from "./defaultTheme";
import { Theme } from "./interfaces";

const extendTheme = (theme: Theme): Theme => {
    // Merge the default theme with the provided theme
    return {
        ...defaultTheme,
        ...theme,
    };
};

export default extendTheme;