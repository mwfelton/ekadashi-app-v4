import { mocks } from "./mock"
export const ekadashiRequest = (date = "ddddd") => {
    return new Promise((resolve, reject) => {
        const mock = mocks[date];
        if (!mock) {
            reject("not found");
        }
        resolve(mock)
    });
};
ekadashiRequest().then((result) => {
    console.log(result);
}).catch((err) => {
    console.log('error')
});
