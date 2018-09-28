import IMAGE_PATH from '../constants/image_path';

export default class ImageProcessor {
    static formatImageUrl(imageUrl) {
        if (!imageUrl) {
            return '';
        }

        return imageUrl.indexOf('://') >= 0
            ? imageUrl
            : `${IMAGE_PATH}/${imageUrl}`
   }
}