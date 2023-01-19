export interface Pokemon {
    abilities: Abilities[];
    base_experience: number;
    forms: Forms[];
    game_indices: GameIndices[];
    height: number;
    held_items: HeldItems[];
    id: number;
    is_default: boolean;
    location_area_encounters: string;
    moves: Moves[];
    name: string;
    order: number;
    past_types: PastTypes[];
    species: Species;
    sprites: Sprites;
    stats: Stats[];
    types: Types[];
    weight: number;
}

interface Abilities {
    ability: {
        name: string;
        url: string;
    };
    is_hidden: boolean;
    slot: number;
}

interface Forms {
    name: string;
    url: string;
}

interface GameIndices {
    game_index: number;
    version: {
        name: string;
        url: string;
    };
}

interface HeldItems {
    item: {
        name: string;
        url: string;
    };
    version_details: VersionDetails[];
}

interface Moves {
    move: {
        name: string;
        url: string;
    };
    version_group_details: VersionGroupDetails[];
}

interface PastTypes {
    generation: {
        name: string;
        url: string;
    };
    types: Types[];
}

interface Species {
    name: string;
    url: string;
}

interface Sprites {
    back_default: string;
    back_female: string;
    back_shiny: string;
    back_shiny_female: string;
    front_default: string;
    front_female: string;
    front_shiny: string;
    front_shiny_female: string;
    other: {
        dream_world: {
            front_default: string;
            front_female: string;
        };
        home: {
            front_default: string;
            front_female: string;
            front_shiny: string;
            front_shiny_female: string;
        };
        official_artwork: {
            front_default: string;
        };
    };
    versions: {
        "generation-i": {
            "red-blue": {
                back_default: string;
                back_gray: string;
                back_transparent: string;
                front_default: string;
                front_gray: string;
                front_transparent: string;
            };
            yellow: {
                back_default: string;
                back_gray: string;
                back_transparent: string;
                front_default: string;
                front_gray: string;
                front_transparent: string;
            };
        };
        "generation-ii": {
            crystal: {
                back_default: string;
                back_shiny: string;
                back_shiny_transparent: string;
                back_transparent: string;
                front_default: string;
                front_shiny: string;
                front_shiny_transparent: string;
                front_transparent: string;
            };
            gold: {
                back_default: string;
                back_shiny: string;
                front_default: string;
                front_shiny: string;
                front_transparent: string;
            };
            silver: {
                back_default: string;
                back_shiny: string;
                front_default: string;
                front_shiny: string;
                front_transparent: string;
            };
        };
        "generation-iii": {
            emerald: {
                front_default: string;
                front_shiny: string;
            };
            "firered-leafgreen": {
                back_default: string;
                back_shiny: string;
                front_default: string;
                front_shiny: string;
            };
            "ruby-sapphire": {
                back_default: string;
                back_shiny: string;
                front_default: string;
                front_shiny: string;
            };
        };
        "generation-iv": {
            "diamond-pearl": {
                back_default: string;
                back_female: string;
                back_shiny: string;
                back_shiny_female: string;
                front_default: string;
                front_female: string;
                front_shiny: string;
                front_shiny_female: string;
            };
        };
        "generation-v": {
            "black-white": {
                animated: {
                    back_default: string;
                    back_female: string;
                    back_shiny: string;
                    back_shiny_female: string;
                    front_default: string;
                    front_female: string;
                    front_shiny: string;
                    front_shiny_female: string;
                };
                back_default: string;
                back_female: string;
                back_shiny: string;
                back_shiny_female: string;
                front_default: string;
                front_female: string;
                front_shiny: string;
                front_shiny_female: string;
            };
        };
        generation_vi: {
            omegaruby_alphasapphire: {
                front_default: string;
                front_female: string;
                front_shiny: string;
                front_shiny_female: string;
            };
            x_y: {
                front_default: string;
                front_female: string;
                front_shiny: string;
                front_shiny_female: string;
            };
        };
        "generation-vii": {
            icons: {
                front_default: string;
                front_female: string;
            };
            "ultra-sun-ultra-moon": {
                front_default: string;
                front_female: string;
                front_shiny: string;
                front_shiny_female: string;
            };
        };
        "generation-viii": {
            icons: {
                front_default: string;
                front_female: string;
            };
        };
    };
}

interface Stats {
    base_stat: number;
    effort: number;
    stat: {
        name: string;
        url: string;
    };
}

interface Types {
    slot: number;
    type: {
        name: string;
        url: string;
    };
}

interface VersionDetails {
    rarity: number;
    version: {
        name: string;
        url: string;
    };
}

interface VersionGroupDetails {
    level_learned_at: number;
    move_learn_method: {
        name: string;
        url: string;
    };
    version_group: {
        name: string;
        url: string;
    };
}
