export function createEnquiry(design) {
  const preference = design ? `I'm interested in the ${design} design.` : 'Please help me choose between Bandhan, Milan and Vivah.';
  return `Hi Codeshor! I'd like a wedding website. ${preference} Can we discuss customisation, pricing and availability?`;
}

export function createWhatsAppUrl(number, design) {
  return `https://wa.me/${number}?text=${encodeURIComponent(createEnquiry(design))}`;
}
