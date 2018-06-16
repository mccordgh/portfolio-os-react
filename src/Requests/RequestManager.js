import DataTransformer from '../Transformers/DataTransformer';

import API_KEY from '../json/key';

const API_URL = 'https://itch.io/api/1/key'

export default class RequestManager {
    static fetchGames(appList) {
        return new Promise((resolve, reject) => {
            this.makeGamesRequest()
                .then(response => response.json())
                .then((response) => {
                    resolve(DataTransformer.parseGamesResponse(appList, response));
                })
                .catch((error) => { console.error(error); });
        });
    }

    static makeGamesRequest() {
        return fetch(`${API_URL}/my-games`, {
            method: 'get',
            headers: new Headers({
            'Authorization': `Bearer ${API_KEY.key}`,
            }),
        });
    }
}