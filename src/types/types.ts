export type TGlobalState = {
    data: TMusic,
    isEditFormVisible: boolean,
    selectedObject: TMusic
}

export type TMusic = {
    id?: string,
    title?: string,
    children: TMusic[]
}