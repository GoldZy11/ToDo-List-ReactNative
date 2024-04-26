
const generateUniqueId = (): string => {
    const timestamp = new Date().getTime();
    const randomValue = Math.floor(Math.random() * 1000000);
    return `${timestamp}-${randomValue}`;
};

export default generateUniqueId;