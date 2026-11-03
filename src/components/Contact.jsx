import { forwardRef } from 'react';
import { designs } from '../data/designs';
import { contactConfig } from '../config/contact';
import { createWhatsAppUrl } from '../utils/enquiry';
import ArrowIcon from './ArrowIcon';

const Contact = forwardRef(function Contact({ selectedDesign, onDesignChange, onDemoContact }, ref) {
  return (
    <section id="contact" className="container-page py-12 sm:py-14" aria-labelledby="contact-heading">
      <div className="grid gap-7 md:grid-cols-2 md:gap-16">
        <div>
          <h2 id="contact-heading" className="text-3xl leading-tight font-bold tracking-tight">Let's build your wedding website.</h2>
          <p className="mt-4 max-w-lg text-lg leading-relaxed text-muted">Tell us which design you like and when you're getting married. We'll help with customisation, pricing and next steps.</p>
        </div>
        <div className="md:pl-8">
          <label htmlFor="design-choice" className="mb-2 block text-base font-semibold">Which design do you have in mind?</label>
          <select ref={ref} id="design-choice" value={selectedDesign} onChange={event => onDesignChange(event.target.value)} className="mb-3 min-h-12 w-full rounded-md border border-slate-300 bg-white px-3 py-3 text-base">
            <option value="">Help me choose</option>{designs.map(design => <option key={design.name} value={design.name}>{design.name}</option>)}
          </select>
          <a href={createWhatsAppUrl(contactConfig.whatsappNumber, selectedDesign)} target="_blank" rel="noopener noreferrer" className="button-primary w-full" onClick={event => { if (contactConfig.isDemo) { event.preventDefault(); onDemoContact(); } }}>Contact on WhatsApp <ArrowIcon /></a>
          <p className="mt-3 text-sm text-muted">{contactConfig.isDemo ? `Demo number: ${contactConfig.displayNumber}. Enquiries will open when the business number is added.` : `Chat directly with Codeshor: ${contactConfig.displayNumber}`}</p>
        </div>
      </div>
    </section>
  );
});
export default Contact;
