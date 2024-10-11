document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('box');
    const outputDiv = document.createElement('div');
  
    form.addEventListener('submit', (event) => {
      event.preventDefault();
  
      const winner = document.querySelector('input[name="title"]:checked').value;
      const electionDate = document.getElementById('date').value;
      const duelCount = document.getElementById('name').value;
      const carColor = document.getElementById('color wheel').value;
      const ranch = document.getElementById('check').checked;
      const blueCheese = document.getElementById('check').checked;
      const transportation = document.getElementById('dropdown').value;
      const image = document.getElementById('image').files[0];
      const coolnessRating = document.getElementById('volume').value;
  
      let output = `
      <p>Winner: ${winner}</p>
      <p>Election Date: ${electionDate}</p>
      <p>Duel Count: ${duelCount}</p>
      <p>Car Color: ${carColor}</p>
      <p>Ranch: ${ranch ? 'Yes' : 'No'}</p>
      <p>Blue Cheese: ${blueCheese ? 'Yes' : 'No'}</p>
      <p>Transportation: ${transportation}</p>
      <p>Image: ${image ? image.name : 'No image uploaded'}</p>
      <p>Coolness Rating: ${coolnessRating}</p>`;
  
      outputDiv.innerHTML = output;
      form.appendChild(outputDiv);
    });
  });