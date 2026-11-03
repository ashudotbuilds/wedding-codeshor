// VITE_ values are public browser configuration, not secrets.
const whatsappNumber = (import.meta.env.VITE_WHATSAPP_NUMBER || '').replace(/\D/g, '');
export const contactConfig = {
  whatsappNumber,
  displayNumber: whatsappNumber.startsWith('91') && whatsappNumber.length === 12
    ? `+91 ${whatsappNumber.slice(2, 7)} ${whatsappNumber.slice(7)}`
    : whatsappNumber,
  email: import.meta.env.VITE_CONTACT_EMAIL || '',
  isDemo: !/^\d{10,15}$/.test(whatsappNumber),
};
