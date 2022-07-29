import {Linking, Platform} from 'react-native';
import {Address} from '../entities/Address';

export const openMap = ({lat, lng, address}: Address) => {
  // ios: maps:0,0?q=endereco@latitude,longitude
  // android: geo:0,0?q=latitude,longitude(endereco)
  const url =
    Platform.select({
      ios: `maps:0,0?q=${address}@${lat},${lng}`,
      android: `geo:0,0?q=${lat},${lng}(${address})`,
    }) || '';
  Linking.openURL(url);
};