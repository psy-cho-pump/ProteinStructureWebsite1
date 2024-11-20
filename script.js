
// JavaScript to handle drag-and-drop functionality
document.addEventListener('DOMContentLoaded', () => {
  const draggables = document.querySelectorAll('.structure, .description');
  const dropzones = document.querySelectorAll('.dropzone');

  draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', () => {
      draggable.classList.add('dragging');
    });

    draggable.addEventListener('dragend', () => {
      draggable.classList.remove('dragging');
    });
  });

  dropzones.forEach(zone => {
    zone.addEventListener('dragover', (e) => {
      e.preventDefault();
      const draggable = document.querySelector('.dragging');
      zone.appendChild(draggable);
    });
  });
});

// Answer validation
function checkAnswers() {
  const answers = {
    'drop-primary': 'desc-primary',
    'drop-secondary': 'desc-secondary',
    'drop-tertiary': 'desc-tertiary',
    'drop-quaternary': 'desc-quaternary',
  };

  let correct = 0;

  for (const dropzone in answers) {
    const dropElement = document.getElementById(dropzone);
    const child = dropElement.querySelector('.description');
    if (child && child.id === answers[dropzone]) {
      dropElement.classList.add('matched');
      correct++;
    } else {
      dropElement.classList.remove('matched');
    }
  }

  const result = document.getElementById('result');
  if (correct === 4) {
    result.textContent = 'Well done! All answers are correct!';
    result.style.color = 'green';
  } else {
    result.textContent = `You got ${correct}/4 correct. Try again!`;
    result.style.color = 'red';
  }
}
