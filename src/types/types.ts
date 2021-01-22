export type TGlobalState = {
    data: TMusic,
    isEditFormVisible: boolean
}

export type TMusic = {
    id?: string,
    title?: string,
    children: TMusic[]
}