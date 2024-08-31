import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 *
 * @param {any} data
 * @param {string} storageKey
 */

export const setData = async (data, storageKey) => {
  try {
    if (typeof data === 'string') {
      await AsyncStorage.setItem(storageKey, data);
    } else {
      const jsonData = JSON.stringify(data);
      await AsyncStorage.setItem(storageKey, jsonData);
    }
  } catch (error) {}
};

/**
 *
 * @param {string} storageKey
 * @returns {any} data
 */

export const getData = async storageKey => {
  try {
    const data = await AsyncStorage.getItem(storageKey);

    return data !== null ? data : null;
  } catch (error) {
    return Promise.reject(error);
  }
};

/**
 *
 * @param {string} storageKey
 */
export const removeData = async storageKey => {
  try {
    await AsyncStorage.removeItem(storageKey);
  } catch (error) {}
};

export default {
  removeData,
  setData,
  getData,
};
