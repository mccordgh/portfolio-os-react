import extraGameData from '../json/games.json';

export default class DataTransformer {
    static parseGamesResponse(appList, response) {
        const gamesList = response.games.map((game) => {
            console.log(game);
            return Object.assign({}, {
                bgColor: 'green',
                coverImage: game.cover_url,
                description: this.descriptionByGameName(game.title),
                iconImage: this.iconByGameName(game.title),
                language: this.languageByGameName(game.title),
                links: [{ url: game.url, text: `Get more info and play ${game.title} on itch.io!` }],
                name: game.title,
                releaseDate: game.published_at,
                shortText: game.short_text,
                type: game.type,
            });
        });

        appList.unshift({
            name: 'Game Programming',
            list: gamesList,
        });

        return appList;
    }

    static iconByGameName(gameName) {
        return (extraGameData[gameName] && extraGameData[gameName].iconImage)
            ? extraGameData[gameName].iconImage
            : 'temp2.png';
      }

    static descriptionByGameName(gameName) {
        return (extraGameData[gameName] && extraGameData[gameName].description)
            ? extraGameData[gameName].description :
            'No description...';
    }

    static languageByGameName(gameName) {
        return (extraGameData[gameName] && extraGameData[gameName].language)
            ? extraGameData[gameName].language
            : '';
    }

}