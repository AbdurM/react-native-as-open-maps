import { Platform, Linking } from 'react-native';
export function openNativeMap(
  latitude: string,
  longitude: string,
  destinationLabel: string
) {
  try {
    const scheme = Platform.select({
      ios: 'maps://0,0?q=',
      android: 'geo:0,0?q=',
    });
    const latLng = `${latitude},${longitude}`;
    const label = destinationLabel;
    const url = Platform.select({
      ios: `${scheme}${label}@${latLng}`,
      android: `${scheme}${latLng}(${label})`,
    });

    Linking.openURL(url!);
  } catch (error) {
    throw error;
  }
}
