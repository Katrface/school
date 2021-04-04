import { useState, useEffect } from "react";
import AdaptiveDesign from "../service/adaptiveDisign";

export default function useAdaptiveDesignMode(
    initialMode = AdaptiveDesign.DESKTOP
) {
    const [mode, setMode] = useState(initialMode);

    const handleSubscribe = () => {
        setMode(AdaptiveDesign.getMode());
    };

    const onSubscribe = () => {
        window.addEventListener("resize", handleSubscribe);
    };

    const offSubscribe = () =>
        window.removeEventListener("resize", handleSubscribe);

    useEffect(() => {
        onSubscribe();
        return () => offSubscribe();
    }, []);

    return {
        mode
    };
}
