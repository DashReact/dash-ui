

export const getTheme = () => {
    // get data-theme attribute
    const theme = document.body.getAttribute('data-theme');
    return theme || 'light';
}

export const changeTheme = (newTheme: string) => {
    // Change data-theme attribute 
    document.body.setAttribute('data-theme', newTheme);
    return newTheme;
}


