const parentDivs4 = document.querySelectorAll('.phone-frame');
parentDivs4.forEach(parentDiv4 => {
    const childDiv1 = document.createElement('div');
    const childDiv2 = document.createElement('div');

    childDiv1.className = 'phone-speaker';
    childDiv2.className = 'phone-button';

    parentDiv4.prepend(childDiv1);
    parentDiv4.appendChild(childDiv2);
});

const parentDivs5 = document.querySelectorAll('.holes');
parentDivs5.forEach(parentDiv5 => {
    const childDiv1 = document.createElement('div');
    const childDiv2 = document.createElement('div');
    const childDiv3 = document.createElement('div');

    childDiv1.className = 'hole1';
    childDiv2.className = 'hole2';
    childDiv3.className = 'hole3';

    parentDiv5.appendChild(childDiv1);
    parentDiv5.appendChild(childDiv2);
    parentDiv5.appendChild(childDiv3);
});
