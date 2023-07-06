import {ImageProps} from "@chakra-ui/react";
import meh from "../assets/meh.webp";
import thumbsUp from "../assets/thumbs-up.webp";
import bullsEye from "../assets/bulls-eye.webp";

export const emojiMap: {[key: number]: ImageProps} = {
  3: { src: meh, alt: 'meh', boxSize: '25px'},
  4: { src: thumbsUp, alt: 'recomended', boxSize: '25px'},
  5: { src: bullsEye, alt: 'exceptional', boxSize: '35px'},
}
