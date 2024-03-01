export function deleteEvent(eventID) {
    const url = `http://localhost:8080/event/${eventID}`;
  
    fetch(url, {
      method: 'DELETE',
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.text();
    })
    .then(data => {
      console.log('Event deleted:', data);
    })
    .catch(error => {
      console.error('There has been a problem with your fetch operation:', error);
    });
}
