import { useState } from "react"
import { MenuContext as Menu } from "./Context"

export default function MenuSide({children}) {
    const [menu, setMenu] = useState(true)
    return(
        <Menu.Provider value={{menu, setMenu}}>{children}</Menu.Provider>
    )
}
