import { mocks } from "./mock"

export const ekadashiRequest = (date = "2022") => {
    return new Promise((resolve, reject) => {
        const mock = mocks[date];
        console.log(mocks[date])
        if (!mock) {
            reject("not found");
        }
        resolve(mock)
    });
};
