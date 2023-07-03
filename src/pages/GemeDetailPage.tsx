import {useParams} from "react-router-dom"
import useGame from "../hooks/useGame"
import {GridItem, Heading, SimpleGrid, Spinner} from "@chakra-ui/react"
import ExpandableText from "../components/ExpandableText"
import GameAttributes from "../components/GemaAttributes"
import GameTrailer from "../components/GameTrailer"
import GameScreenshot from "../components/GameScreenshot"

const GameDetailPage = () => {

  const { slug } = useParams()
  const { data: game, isLoading, error } = useGame(slug!)

  if(isLoading) return <Spinner/>

  if(error || !game) throw error

  return (
    <SimpleGrid columns={ { base: 1, md: 2} } spacing={5}>
      <GridItem>
        <Heading>{ game.name }</Heading>
        <ExpandableText>{game.description_raw}</ExpandableText>
        <GameAttributes game={game}/>
      </GridItem>
      <GridItem>
        <GameTrailer gameId={game.id}/>
        <GameScreenshot gameId={game.id}/>
      </GridItem>
    </SimpleGrid>
  )
}
export default GameDetailPage