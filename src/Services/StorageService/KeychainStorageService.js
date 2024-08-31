import {getGenericPassword, resetGenericPassword, setGenericPassword} from 'react-native-keychain';

/**
 * Clear Storage
 * @returns
 */

const clearToken = async () => {
  try {
    return await resetGenericPassword();
  } catch (error) {
    Promise.reject(error);
  }
};

/**
 * Set Access Token
 * @param {string} key
 * @param {string} token
 * @returns
 */

const setToken = async (key, token) => {
  try {
    return await setGenericPassword(key, token);
  } catch (error) {
    return Promise.reject(error);
  }
};

/**
 * Get Access Token
 * @returns {string} | token
 */
const getToken = async () => {
  try {
    const credentials = await getGenericPassword();
    if (credentials) return credentials.password;
    else return null;
  } catch (error) {
    return Promise.reject(error);
  }
};

export default {
  clearToken,
  getToken,
  setToken,
};
