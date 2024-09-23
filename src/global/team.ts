import { ASSET_TEAM_X, ASSET_TEAM_Y, ASSET_TEAM_Z, ASSET_TEAM_ANI, ASSET_TEAM_EUGE, ASSET_TEAM_FEDA, ASSET_TEAM_GONZA, ASSET_TEAM_LUCAS, ASSET_TEAM_VALEN } from "./constants";

export interface ITeammate {
    id: string;
    label: string;
    imageUrl: string;
    description: string;
}

export const teammates: ITeammate[] = [
    {
        description: 'Hace algo muy loco que desconozco',
        id: 'teammate-x',
        imageUrl: ASSET_TEAM_X,
        label: 'Lucas Valdes'
    },
    {
        description: 'Hace algo muy loco que desconozco',
        id: 'teammate-y',
        imageUrl: ASSET_TEAM_Y,
        label: 'Lucas Valdes'
    },
    {
        description: 'Hace algo muy loco que desconozco',
        id: 'teammate-z',
        imageUrl: ASSET_TEAM_Z,
        label: 'Lucas Valdes'
    },
    {
        description: 'Hace algo muy loco que desconozco',
        id: 'teammate-ani',
        imageUrl: ASSET_TEAM_ANI,
        label: 'Lucas Valdes'
    },
    {
        description: 'Hace algo muy loco que desconozco',
        id: 'teammate-euge',
        imageUrl: ASSET_TEAM_EUGE,
        label: 'Lucas Valdes'
    },
    {
        description: 'Hace algo muy loco que desconozco',
        id: 'teammate-feda',
        imageUrl: ASSET_TEAM_FEDA,
        label: 'Lucas Valdes'
    },
    {
        description: 'Hace algo muy loco que desconozco',
        id: 'teammate-gonza',
        imageUrl: ASSET_TEAM_GONZA,
        label: 'Lucas Valdes'
    },
    {
        description: 'Hace algo muy loco que desconozco',
        id: 'teammate-lucas',
        imageUrl: ASSET_TEAM_LUCAS,
        label: 'Lucas Valdes'
    },
    {
        description: 'Hace algo muy loco que desconozco',
        id: 'teammate-valen',
        imageUrl: ASSET_TEAM_VALEN,
        label: 'Lucas Valdes'
    },
    {
        description: 'Hace algo muy loco que desconozco',
        id: 'teammate-gonzah',
        imageUrl: ASSET_TEAM_LUCAS,
        label: 'Lucas Valdes'
    }
]