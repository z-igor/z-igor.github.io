import {
  gql
} from "@apollo/client";

export const GET_POKEMON_BY_NAME = gql `
  query pokemon($name: String!) {
    pokemon(name: $name) {
      id
      name
      abilities {
        ability {
          name
        }
        is_hidden
        slot
      }
      base_experience
      forms {
        url
        name
      }
      game_indices {
        game_index
        version {
          name
        }
      }
      weight
      height
      held_items {
        item {
          name
        }
        version_details {
          rarity
          version {
            name
          }
        }
      }
      is_default
      location_area_encounters
      moves {
        move {
          name
        }
      }
      order
      species {
        name
      }
      sprites {
        back_default
        back_shiny
        front_default
        front_shiny
      }
      stats {
        base_stat
        effort
        stat {
          name
        }
      }
      types {
        slot
        type {
          name
        }
      }
      status
    }
  }
`;