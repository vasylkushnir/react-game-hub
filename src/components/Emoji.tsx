import {Image} from "@chakra-ui/react"
import {emojiMap} from "../data/EmojiMap";

interface Props {
  rating: number
}

const Emoji = ({ rating }: Props) => {

  if (rating < 3) return null

  return (
    <Image { ...emojiMap[rating]} marginTop={1}/>
  )
}
export default Emoji
