function getCurrentLocation() {
    return new Promise((resolve, reject) => {
        if (!("geolocation" in navigator)) {
            console.error('no geolocation support');
            reject('no geolocation support');
        }
        navigator.geolocation.getCurrentPosition(position => {
            console.log(position);
            resolve(position);
        }, error => {
            console.error(error);
            reject(error);
        });
    });
}