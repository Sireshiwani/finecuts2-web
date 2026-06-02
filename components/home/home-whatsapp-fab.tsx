export default function HomeWhatsappFab() {
  return (
    <div className="fixed bottom-8 right-8 z-50 md:hidden">
      <a
        href="#booking"
        className="inline-flex animate-bounce rounded-full bg-green-600 p-4 shadow-2xl"
        aria-label="Book on WhatsApp"
      >
        <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5.1-1.3A10 10 0 1 0 12 2Zm5.3 13.6c-.2.6-1.1 1.1-1.5 1.1-.4.1-.9.1-1.5-.1-.4-.1-.9-.3-1.6-.6-2.7-1.2-4.4-4.1-4.5-4.3-.1-.2-1.1-1.5-1.1-2.8s.7-2 1-2.3c.3-.3.7-.4.9-.4h.7c.2 0 .5-.1.7.4.2.6.8 2 .8 2.2 0 .2 0 .4-.1.6-.1.2-.2.4-.4.6-.2.2-.4.4-.2.8.2.4 1 1.6 2.1 2.6 1.5 1.3 2.7 1.7 3.1 1.9.4.2.6.1.8-.1.2-.2 1-1.1 1.2-1.5.2-.4.5-.3.8-.2.3.1 1.8.8 2.1.9.3.2.5.3.5.5 0 .2-.1.9-.3 1.4Z" />
        </svg>
      </a>
    </div>
  );
}
