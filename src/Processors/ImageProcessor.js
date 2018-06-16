const IMAGE_PATH = '/res';

export default class ImageProcessor {
    static getCoverImageForApp(coverImageUrl) {
        return coverImageUrl.indexOf('://') >= 0
            ? coverImageUrl
            : `${IMAGE_PATH}/${coverImageUrl}`
   }
}