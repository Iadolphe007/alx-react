import {getFooterCopy, getFullYear, getLatestNotification} from './utils.js'

test('getFullYear function retrun the correct year', () => {
    expect(getFullYear()).toBe(2024)
});

test('getFooterCopy returns correct string', () => {
    expect(getFooterCopy(true)).toBe('Holberton School');
    expect(getFooterCopy(false)).toBe('Holberton School main dashboard');
});

test('notification return string', () => {
    expect(getLatestNotification()).toBe('<strong>Urgent Requirement</strong> - complete by EOD')
});