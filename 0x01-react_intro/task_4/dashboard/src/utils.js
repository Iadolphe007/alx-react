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

export default function getLatestNotification() {
    return '<strong>Urgent requirement</strong> - complete by EOD';
}