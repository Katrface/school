const MOBILE = "MOBILE";
const DESKTOP = "DESKTOP";

function getMode() {
    if (window.innerWidth < 1000) {
        return MOBILE;
    } else {
        return DESKTOP;
    }
}

export default {
    MOBILE,
    DESKTOP,
    getMode
};
