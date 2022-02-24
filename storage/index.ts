import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeData = async (key: string, value: any) => {
  const stringValue = JSON.stringify(value);
  await AsyncStorage.setItem(key, stringValue);
};

export const getData = async (key: string) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value) {
      const data = JSON.parse(value);
      return data;
    }
  } catch (error: any) {
    console.error(error.message);
  }
};

export const containsKeys = async (key: string) => {
  try {
    const allKeys = await AsyncStorage.getAllKeys();
    return allKeys.includes(key);
  } catch (error: any) {
    console.error(error.message);
  }
}
