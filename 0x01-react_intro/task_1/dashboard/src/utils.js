export default function getFullYear() {
    const fullYear = new Date().getFullYear();
    return fullYear;
}

export default function getFooterCopy(isIndex) {
    if(isIndex) {
        return 'Holberton School';
    } else {
        return 'Holberton School main dashboard';
    }
}
