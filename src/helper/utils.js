import { Dimensions } from "react-native";

export const sortAscendingly = (data) =>{
    return data.sort((a, b) => b.name.localeCompare(a.name));
}

export const sortDescendingly = (data) =>{
    return data.sort((a, b) => a.name.localeCompare(b.name));
}

export const getDimension = () =>{
    return Dimensions.get('window');
}