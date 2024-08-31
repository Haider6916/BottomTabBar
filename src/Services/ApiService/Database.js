const database = {
  user: {
    name: 'Huzaifa',
    phoneNumber: '3312220373',
  },
  code: '1232',
};

export const DATABASE_MANAGER = {
  get: ({key}) =>
    new Promise((resolve, reject) =>
      setTimeout(() => {
        if (key in database) resolve({success: 1, message: 'Data Fetched Successfully', data: database[key]});
        else reject({success: 0, message: `Error Occured while fetching data for ${key}`, data: {}});
      }, 4000),
    ),
  post: ({key, data}) =>
    new Promise((resolve, reject) =>
      setTimeout(() => {
        if (key in database) {
          database[key] = data;
          resolve({success: 1, message: 'Data Saved Successfully', data: database[key]});
        } else {
          reject({success: 0, message: `Error Occured while saving data for ${key}`, data: {}});
        }
      }, 4000),
    ),
};
