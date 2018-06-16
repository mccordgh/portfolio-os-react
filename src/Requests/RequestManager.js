import API_KEY from '../json/key';
const API_URL = 'https://itch.io/api/1/key'

export default class RequestManager {
    static fetchGames(appList) {
        return new Promise((resolve, reject) => {
            this.makeGamesRequest()
                .then(response => response.json())
                .then((response) => {
                    resolve(this.parseGamesResponse(appList, response));
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

    static parseGamesResponse(appList, response) {
        const gamesList = response.games.map((game) => {
            return Object.assign({}, {
            name: game.title,
            iconImage: this.iconByGameName(game.title),
            description: this.detailsByGameName(game.title),
            shortText: game.short_text,
            coverImage: game.cover_url,
            releaseDate: game.published_at,
            type: game.type,
            links: [{ url: game.url, text: `Get more info and play ${game.title} on itch.io!` }],
            });
        });

        appList.unshift({
            name: 'Game Programming',
            list: gamesList,
        });

        return appList;
    }

    static iconByGameName(gameName) {
        return 'temp3.png';
      }

    static detailsByGameName(gameName) {
        return 'It is game. you like';
    }

}