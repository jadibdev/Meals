const div = document.createElement('div');
div.id = 'content';
document.body.appendChild(div);
const content = document.getElementById('content');

const nav = `
<div class="container">something</div>`;

const renderNav = () => {
  content.innerHTML = nav;
};

test('content is injected successful', () => {
  const content = document.getElementById('content');
  renderNav();
  expect(content.innerHTML).toBe(nav);
});