export const HOME_AREA = {
    sidebar: 'sidebar',
    navbar: 'navbar',
    main: 'main'
};

export const HOME_SETTINGS = {
    templateAreas: `"${HOME_AREA.sidebar} ${HOME_AREA.navbar}"
    "${HOME_AREA.sidebar} ${HOME_AREA.main}"
    "${HOME_AREA.sidebar} ${HOME_AREA.main}"`,
    gridTemplateColumns: '90px 1fr',
    gridTemplateRows: '92px 1fr'
};

