export const getStorageColor = () => {
    let color = 'hsl(252,35%,51%)';
    if (localStorage.getItem('color')) {
        color = localStorage.getItem('color')

    }
    return color
}
