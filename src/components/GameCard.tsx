import { Card, CardBody, Heading, HStack, Image, Text } from '@chakra-ui/react'
import { Game } from '../hooks/useGames'
import PlatformIconList from './PlatformIconList'
import CriticScore from './CriticScore'
import getCroppedImageURL from '../services/image-url'

interface Props {
    game: Game
}

const GameCard = ({ game }: Props) => {
  return (
    <Card>
        <Image src={getCroppedImageURL(game.background_image)} />
        <CardBody>
            <HStack justifyContent='space-between' marginBottom={3}>
             <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)}/>
             <CriticScore score={game.metacritic} />
            </HStack>
            <Heading fontSize='2x'>{game.name}</Heading>
        </CardBody>
    </Card>
  )
}

export default GameCard