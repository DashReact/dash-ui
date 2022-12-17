import { Theme } from "./interfaces";
import defaultTheme from "./defaultTheme";

const extendTheme = (theme: Theme): Theme => {
    // Merge the default theme with the provided theme
    return {
        ...defaultTheme,
        ...theme,
    };
};

export default extendTheme;