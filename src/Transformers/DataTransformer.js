import extraGameData from '../json/games.json';

export default class DataTransformer {
    static parseGamesResponse(appList, response) {
        const gamesList = response.games.map((game) => {
            return Object.assign({}, {
            name: game.title,
            iconImage: this.iconByGameName(game.title),
            description: this.descriptionByGameName(game.title),
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
        return (extraGameData[gameName] && extraGameData[gameName].icon)
        ? extraGameData[gameName].icon
        : 'temp3.png';
      }

    static descriptionByGameName(gameName) {
        return (extraGameData[gameName] && extraGameData[gameName].description)
        ? extraGameData[gameName].description :
        'No description...';
    }

}