export const addSessionStorage = (key, value) => {
	sessionStorage.setItem(key, value);
};

export const removeSessionStorage = (key) => sessionStorage.removeItem(key);
