// Function to create a new detail (h2, h3, etc.) and connect it to the previous element.
function addDetail(previousElement, text) {
    const detail = document.createElement('h2');
    detail.classList.add('detail');
    detail.textContent = text;
    document.getElementById('mindmap').appendChild(detail);
  
    if (previousElement) {
      const line = document.createElement('div');
      line.classList.add('line');
      line.style.left = `${previousElement.offsetLeft + previousElement.offsetWidth / 2}px`;
      line.style.top = `${previousElement.offsetTop + previousElement.offsetHeight}px`;
      document.getElementById('mindmap').appendChild(line);
    }
  
    return detail;
  }
  
  // Example usage:
  const title = document.getElementById('title');
  const h2_1 = addDetail(title, 'Detail 1');
  const h2_2 = addDetail(h2_1, 'Detail 2');
  const h3_1 = addDetail(h2_2, 'Detail 3');
  