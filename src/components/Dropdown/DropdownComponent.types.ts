export type DropdownProps = {
    title: string
    items: DropdownItem[]
    multSelect?: boolean
    selectedItem: DropdownItem
    setSelectedItem: any
}

export type DropdownItem={
    id: number
    value: string
}
