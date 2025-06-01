const parentDivs = document.querySelectorAll('.jhy-pf__Tab__brand');

parentDivs.forEach(parentDiv => {
    const childDiv = document.createElement('div');
    childDiv.className = 'circles';
    parentDiv.prepend(childDiv);
});

const elements = document.querySelectorAll('.circles');
elements.forEach(element => {

    const childDiv1 = document.createElement('div');
    const childDiv2 = document.createElement('div');
    const childDiv3 = document.createElement('div');

    childDiv1.className = 'circle c1';
    childDiv2.className = 'circle c2';
    childDiv3.className = 'circle c3';

    element.appendChild(childDiv1);
    element.appendChild(childDiv2);
    element.appendChild(childDiv3);
});
