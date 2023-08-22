import PopOver from './PopOver';

document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('#ComponentContainer');
  const widget = new PopOver(container, {
    title: 'Какой-то заголовок',
    text: 'Будьте добры, прочитайте этот текст. Этот текст очень важен для вас.'
  });
  widget.bindToDOM();
  // eslint-disable-next-line no-console
  console.log('Component started!');
});
