import { theme } from '../constants/theme'

export const getTypeColor = (type) => {
    switch (type) {
        case 'fire':
            return theme.color.LIGHT_PURPLE;
        case 'water':
            return theme.color.LIGHT_BLUE; 
        case 'grass':
            return theme.color.LIGHT_GREEN;
        case 'electric':
            return theme.color.LIGHT_VELVET; 
        case 'psychic':
            return theme.color.SEA_BLUE;
        case 'ice':
            return theme.color.LIGHT_VISIBLE_GREY; 
        case 'dragon':
            return theme.color.BLUE_SHADE; 
        case 'dark':
            return theme.color.GRAYLISH_BLUE; 
        case 'fairy':
            return theme.color.LIGHT_PINK;
        case 'ghost':
            return theme.color.MUTED_PURPLE;
        default:
            return theme.color.GREENISH_GRAY;
    }
};
