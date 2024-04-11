export function deleteTicket(ticketID) {
    const url = `http://localhost:8080/ticket/${ticketID}`;
  
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
      console.log('Ticket deleted:', data);
    })
    .catch(error => {
      console.error('There has been a problem with your fetch operation:', error);
    });
  }
  