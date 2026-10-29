const config = window.SITE_CONFIG;
const choice = document.querySelector('#design-choice');
const whatsappLink = document.querySelector('#whatsapp-link');
const dialog = document.querySelector('#demo-dialog');
const message = () => `Hi Codeshor! I'd love a wedding website. ${choice.value === 'Not sure yet' ? 'Please help me choose between Bandhan, Milan and Vivah.' : `I'm interested in the ${choice.value} design.`} Can we discuss personalisation, pricing and availability?`;

function updateContact() {
  whatsappLink.href = `https://wa.me/${config.whatsappNumber}?text=${encodeURIComponent(message())}`;
  document.querySelector('#contact-note').textContent = config.isDemoContact
    ? `Demo contact: ${config.displayNumber}. Replace with your business number before running ads.`
    : `Chat directly with Codeshor · ${config.displayNumber}`;
}

choice.addEventListener('change', updateContact);
document.querySelectorAll('.design-enquiry').forEach(button => {
  button.addEventListener('click', () => {
    choice.value = button.dataset.design;
    updateContact();
    document.querySelector('#contact').scrollIntoView({behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth'});
    choice.focus({preventScroll:true});
  });
});

whatsappLink.addEventListener('click', event => {
  if (!config.isDemoContact) return;
  event.preventDefault();
  document.querySelector('#enquiry-summary').textContent = `Your choice: ${choice.value === 'Not sure yet' ? 'Help choosing a design' : choice.value}`;
  document.querySelector('#copy-status').textContent = '';
  dialog.showModal();
});
document.querySelector('#close-dialog').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => {
  const rect = dialog.getBoundingClientRect();
  if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
});
document.querySelector('#copy-enquiry').addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(message());
    document.querySelector('#copy-status').textContent = 'Enquiry copied. Keep it ready for when contact opens.';
  } catch {
    document.querySelector('#copy-status').textContent = message();
  }
});
document.querySelector('#year').textContent = new Date().getFullYear();
updateContact();
