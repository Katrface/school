import { useState, useEffect } from "react";
import AdaptiveDesign from "../services/adaptiveDisign";

export default function useAdaptiveDesignMode(
    initialMode = AdaptiveDesign.getMode()
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
    }, [window.innerWidth]);

    return {
        mode
    };
}
