import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function HideMenu(props) {
    const { pathname } = useLocation();
    const menuViewMode = props.menuViewMode;

    useEffect(() => {
        if (menuViewMode.isOpen) {
            menuViewMode.changeMode()
        }

    }, [pathname]);

    return null;
}