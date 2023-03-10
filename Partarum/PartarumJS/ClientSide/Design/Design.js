import {MediaBox} from "./MediaBox.js";
import {MediaBoxPicture} from "./MediaBox/MediaBoxPicture.js";

class Design {
    static MediaBox(template){ return MediaBox.create(template);}

    static MediaBoxPicture(config){ return MediaBoxPicture.init(config)};

    static STYLE_ORIGINAL = 2;

    static STYLE_MOVIE = 4;

    static HEADLINE_OVER_IMAGE = 8;

    static HEADLINE_UNDER_IMAGE = 16;
}

export {Design};