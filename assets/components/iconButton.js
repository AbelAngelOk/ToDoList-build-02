import { TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';

export default function IconButton({ IconName, IconProvider, OnPress, IconColor, IconSize }) {

    const defaultIconColor = "#0F172A";
    const defaultIconSize = 35

  return (
        <TouchableOpacity onPress={{ OnPress }}>
           { GeneratedIcon(
                IconProvider, 
                IconName, 
                IconColor || defaultIconColor,
                parseInt(IconSize) || defaultIconSize
            ) }
        </TouchableOpacity>
  );
}

const GeneratedIcon = (IconProvider, IconName, iconColor, IconSize) => {

    if ( IconProvider === "Ionicons") {
        return <Ionicons name={IconName} size={IconSize} color={iconColor} />
    } else if ( IconProvider = "Entypo") {
        return <Entypo name={IconName} size={IconSize} color={iconColor} />
    } else {
        return null;
    }
}
