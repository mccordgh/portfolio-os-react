import extraGameData from '../json/games.json';

const THIRD_POSITION = 2;

export default class DataTransformer {
    static parseGamesResponse(appList, response) {
        const gamesList = response.games.map((game) => {
            // console.log(game);
            return Object.assign({}, {
                bgColor: 'green',
                headerImage: game.cover_url,
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

        appList.splice(THIRD_POSITION, 0, {
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