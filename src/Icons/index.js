import React from 'react';

import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Foundation from 'react-native-vector-icons/Foundation';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Octicons from 'react-native-vector-icons/Octicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

import {isRTL} from 'utils';

const invertStyle = {transform: [{scaleX: isRTL ? -1 : 1}]};

const VectorIcon = props => {
  const {iconType, ...rest} = props;

  switch (iconType) {
    case 'AntDesign':
      return <AntDesign {...rest} />;
    case 'Entypo':
      return <Entypo {...rest} />;
    case 'Feather':
      return <Feather {...rest} />;
    case 'FontAwesome':
      return <FontAwesome {...rest} />;
    case 'FontAwesome5':
      return <FontAwesome5 {...rest} />;
    case 'Foundation':
      return <Foundation {...rest} />;
    case 'Ionicons':
      return <Ionicons {...rest} />;
    case 'EvilIcons':
      return <EvilIcons {...rest} />;
    case 'MaterialCommunityIcons':
      return <MaterialCommunityIcons {...rest} />;
    case 'MaterialIcons':
      return <MaterialIcons {...rest} />;
    case 'Octicons':
      return <Octicons {...rest} />;
    case 'SimpleLineIcons':
      return <SimpleLineIcons {...rest} />;
    default:
      return <></>;
  }
};

export default VectorIcon;

export const ArrowLeftIcon = props => <VectorIcon iconType="AntDesign" name="arrowleft" {...props} style={invertStyle} />;
export const PhoneIcon = props => <VectorIcon iconType="Feather" name="phone" {...props} style={invertStyle} />;
export const IDCardIcon = props => <VectorIcon iconType="AntDesign" name="idcard" {...props} style={invertStyle} />;
export const UserIcon = props => <VectorIcon iconType="Feather" name="user" {...props} />;
export const AngleDownIcon = props => <VectorIcon iconType="FontAwesome" name="angle-down" {...props} />;
export const AngleUpIcon = props => <VectorIcon iconType="FontAwesome" name="angle-up" {...props} />;
export const DrawerIcon = props => <VectorIcon iconType="Feather" name="align-center" {...props} />;
export const BellIcon = props => <VectorIcon iconType="Feather" name="bell" {...props} />;
