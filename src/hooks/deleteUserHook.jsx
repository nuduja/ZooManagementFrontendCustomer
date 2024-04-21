export function deleteUser(loggedUserId) {
    const url = `http://localhost:8080/api/v1/user/${loggedUserId}`;
  
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
      console.log('User deleted:', data);
    })
    .catch(error => {
      console.error('There has been a problem with your fetch operation:', error);
    });
  }
  