import { Map } from 'immutable';
import filterTypeSelected from '../selectors/filterTypeSelected';
import getNotifications from '../selectors/getNotifications';
import getUnreadNotifications from '../selectors/getUnreadNotifications';

// Mock state for testing
const mockState = {
  filter: 'DEFAULT',
  notifications: Map({
    1: { id: 1, isRead: false, type: "default", value: "New course available" },
    2: { id: 2, isRead: false, type: "urgent", value: "New resume available" },
    3: { id: 3, isRead: true, type: "urgent", value: "New data available" }
  })
};

describe('Selector Tests', () => {
  it('filterTypeSelected should return the selected filter type', () => {
    const selectedFilter = filterTypeSelected(mockState);
    expect(selectedFilter).toBe('DEFAULT');
  });

  it('getNotifications should return a list of notifications', () => {
    const notifications = getNotifications(mockState);
    expect(notifications.size).toBe(3); // Check if all notifications are returned
    expect(notifications.get(1)).toEqual({ id: 1, isRead: false, type: "default", value: "New course available" }); // Check if specific notification is returned
  });

  it('getUnreadNotifications should return a list of unread notifications', () => {
    const unreadNotifications = getUnreadNotifications(mockState);
    expect(unreadNotifications.size).toBe(2); // Check if only unread notifications are returned
    expect(unreadNotifications.get(1)).toEqual({ id: 1, isRead: false, type: "default", value: "New course available" }); // Check if specific unread notification is returned
    expect(unreadNotifications.get(3)).toEqual(undefined); // Check if read notification is not returned
  });
});
