# Drag and Drop interface

## Using

Sử dụng attribute `draggable` để sử dụng được chức năng kéo

```html
<div class="box">
    <div class="target" draggable="true"></div>
</div>
```

Trường hợp sử dụng 1: Với 1 target


```html
<div class="box">
    <div class="target" draggable="true"></div>
</div>
<div class="box"></div>
<div class="box"></div>
<div class="box"></div>
<div class="box"></div>
```

```js
var boxes = document.querySelectorAll('.box');
var target = document.querySelector('.target');

target.addEventListener('dragstart', function() {
    this.classList.add('dragging');
});

target.addEventListener('dragend', function() {
    this.classList.remove('dragging');
});

boxes.forEach(box => {
    box.addEventListener('dragover', function(e) {
        e.preventDefault();
        this.appendChild(target);
    });

    box.addEventListener('drop', function() {
        this.appendChild(target);
    })
})
```

Trường hợp sử dụng 2: Với nhiều target

```html
<div class="box">
    <div class="target" draggable="true"></div>
</div>
<div class="box">
    <div class="target" draggable="true"></div>
</div>
<div class="box"></div>
<div class="box"></div>
<div class="box"></div>
```

```js
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
```