import { forwardRef, useState } from 'react';
import { createEnquiry } from '../utils/enquiry';

const ContactDialog = forwardRef(function ContactDialog({ selectedDesign }, ref) {
  const [status, setStatus] = useState('');
  async function copyEnquiry() {
    try { await navigator.clipboard.writeText(createEnquiry(selectedDesign)); setStatus('Enquiry copied.'); }
    catch { setStatus(createEnquiry(selectedDesign)); }
  }
  function closeOnBackdrop(event) {
    if (event.target !== event.currentTarget) return;
    const box = event.currentTarget.getBoundingClientRect();
    if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) ref.current.close();
  }
  return (
    <dialog ref={ref} aria-labelledby="contact-dialog-heading" className="fixed inset-0 m-auto max-h-[90dvh] w-[calc(100%_-_2.5rem)] max-w-lg overflow-y-auto rounded-lg border border-line bg-white p-6 text-ink shadow-xl sm:p-8" onClose={() => setStatus('')} onClick={closeOnBackdrop}>
      <div className="flex items-start justify-between gap-5"><h2 id="contact-dialog-heading" className="text-2xl font-bold">Contact preview</h2><button type="button" className="-mt-2 -mr-2 flex size-11 shrink-0 items-center justify-center rounded-md text-2xl hover:bg-surface" aria-label="Close contact preview" onClick={() => ref.current.close()}>×</button></div>
      <p className="mt-4 text-base text-muted">We're using a demo phone number for now. You can copy your enquiry; direct WhatsApp contact will be enabled when the business number is added.</p>
      <p className="my-5 rounded-md bg-surface p-4 text-base"><span className="font-semibold">Your choice:</span> {selectedDesign || 'Help me choose'}</p>
      <button type="button" onClick={copyEnquiry} className="button-primary w-full">Copy enquiry</button>
      <p role="status" aria-live="polite" className="mt-3 text-base text-muted">{status}</p>
    </dialog>
  );
});
export default ContactDialog;
