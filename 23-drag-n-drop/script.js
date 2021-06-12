const boxes = document.querySelectorAll('.empty');
const item = document.querySelector('.fill');

function dragStart() {
  this.className += ' hold';
  setTimeout(() => this.className = 'invisible', 0);
}

function dragEnd() {
  this.className = 'fill';
}

function dragOver(e) {
  e.preventDefault();
}

function dragEnter(e) {
  e.preventDefault();
  this.className += ' hovered';
}

function dragLeave() {
  this.className = 'empty';
}

function dragDrop() {
  this.className = 'empty';
  this.append(item);
}

item.addEventListener('dragstart', dragStart);
item.addEventListener('dragend', dragEnd);

for(const empty of boxes) {
  empty.addEventListener('dragover', dragOver);
  empty.addEventListener('dragenter', dragEnter);
  empty.addEventListener('dragleave', dragLeave);
  empty.addEventListener('drop', dragDrop);
}
