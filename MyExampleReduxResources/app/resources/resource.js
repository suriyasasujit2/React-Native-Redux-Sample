
class Resource {
    static getResource(url) {
        return fetch(url, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        }).then((response) => {
            return response.json()
        }).catch((error) => {
            console.error(error);
        });
    }
    static postResource(url, data) {
        return fetch(url, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: data
            }).then((response) => {
                return response.json()
            })
            .catch((error) => {
                console.error(error);
            });
    }
    static postLoginResource(url,username,password) {  
        let params = {
            'grant_type' : 'password',
            'username' : username,
            'password' : password,
            'client_id' : '436172676f576f726c644e6574776f726b',
            'client_secret' : 'Q2FyZ29Xb3JsZE5ldHdvcms',
        }
        let formBody = [];
        for (let property in params) {
            let encodedKey = encodeURIComponent(property);
            let encodedValue = encodeURIComponent(params[property]);
            formBody.push(encodedKey + "=" + encodedValue);
        }
        formBody = formBody.join("&");
        
        return fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            },
            body: formBody
        }).then((response) => {
            return response.json()
        })
        .catch((error) => {
            console.error(error);
        });
    }
}
export default Resource;  