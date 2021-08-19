export const discreteMSlider = {
    root: {
        color: '#FE6E6E',
        height: 10,
    },
    thumb: {
        height: 20,
        width: 20,
        backgroundColor: '#fff',
        border: '3px solid currentColor',
        marginTop: -8,
        marginLeft: -9,
        '&:focus, &:hover, &$active': {
            boxShadow: 'inherit',
        },
    },
    active: {},
    valueLabel: {
        left: `calc(-50% - 2px)`,
    },
    track: {
        height: 8,
        borderRadius: 0,
    },
    rail: {
        height: 8,
        borderRadius: 0,
    }
}