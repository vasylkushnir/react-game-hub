import {Button, Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react"
import {BsChevronDown} from "react-icons/bs"
import usePlatforms from "../hooks/usePlatforms"
import usePlatform from "../hooks/usePlatform"
import useGameQueryStore from "../store"

export interface Genre {
  id: number
  name: string
  image_background: string
}

const PlatformSelector = () => {
  const { data, error } = usePlatforms()

  const setSeletedPlatformId = useGameQueryStore(s => s.setPlatformId)
  const selectedPlatformId = useGameQueryStore(s => s.gameQuery.platformId)
  const selectedPlatform = usePlatform(selectedPlatformId)

  if(error) return null

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown/>}>
        {selectedPlatform?.name || 'Platform'}
      </MenuButton>
      <MenuList>
        { data?.results.map(platform =>
          <MenuItem
            key ={platform.id}
            onClick={() => setSeletedPlatformId(platform.id)}
          >{platform.name}</MenuItem>)}
      </MenuList>
    </Menu>
  )
}

export default PlatformSelector