export function validateNumber(evt) {
  const theEvent = evt || window.event;
  let key;
  if (theEvent.type === 'paste') {
    key = evt.clipboardData.getData('text/plain');
  } else {
    key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode(key);
  }
  const regex = /^\d*$/;
  if (!regex.test(key)) {
    theEvent.returnValue = false;
    if (theEvent.preventDefault) theEvent.preventDefault();
  }
}
