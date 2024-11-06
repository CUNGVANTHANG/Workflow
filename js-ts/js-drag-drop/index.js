var boxes = document.querySelectorAll('.box');
var targetList = document.querySelectorAll('.target');

var currentTarget = null;

targetList.forEach(target => {
    target.addEventListener('dragstart', function() {
        this.classList.add('dragging');
        currentTarget = this;
    });
    
    target.addEventListener('dragend', function() {
        this.classList.remove('dragging');
    });
})

boxes.forEach(box => {
    box.addEventListener('dragover', function(e) {
        e.preventDefault();
    });

    box.addEventListener('drop', function() {
        if (!box.querySelector('.target')) {
            this.appendChild(currentTarget);
        }
    })
})