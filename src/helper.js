const addDomElem = (tag, att, name, content) => {
  const domElem = document.createElement(tag);
  if (content) domElem.textContent = content;
  if (att === 'id') {
    domElem.id = name;
  } else if (att === 'class') {
    name.split(' ').forEach(n => {
      domElem.classList.add(n);
    });
  }

  return domElem;
};

const setAttributes = (el, attrs) => {
  Object.entries(attrs).forEach(([key, value]) => {
    el.setAttribute(key, value);
  });
  // for (const key in attrs) {
  //   el.setAttribute(key, attrs[key]);
  // }
};

const createRadios = (val) => {
  const div = addDomElem('div', 'class', 'form-check', val);
  const input = addDomElem('input', 'class', 'form-check-input');
  setAttributes(input, { type: 'radio', name: 'choice', value: val });
  div.appendChild(input);
  return div;
};

const cleanContainer = (i) => {
  i.innerHTML = '';
  console.log('cleaned box');
};

const debugColor = (color) => { // delete this method as soon prj is ready
  if (color === 'r') {
    console.log(`%c +++ check point +++`,'color: red');
  } else if (color === 'b') {
    console.log(`%c +++ check point +++`,'color: blue');
  } else {
    console.log(`%c +++ check point +++`,'color: green');
  }
};

export {
  addDomElem, setAttributes, createRadios, cleanContainer, debugColor
};
