const addDomElem = (tag, att, name, content) => {
  const domElem = document.createElement(tag);
  if (content) domElem.textContent = content;
  if (att == 'id') {
      domElem.id = name;
  } else if (att == 'class') {
    let newName = name.split(' ').forEach( n => {
      domElem.classList.add(n);
    });
  };

  return domElem;
}

const setAttributes = (el, attrs) =>{
  for (let key in attrs) {
    el.setAttribute(key, attrs[key])
  }
}

export {addDomElem, setAttributes};