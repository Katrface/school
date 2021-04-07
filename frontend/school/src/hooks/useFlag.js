import {useState} from "react";

export default function useFlag(initialFlag = false) {
    const [flag, setFlag] = useState(initialFlag);

    const changeFlag = () => {
        setFlag(!flag)
    }

    return {
        flag,
        changeFlag
    };
}
