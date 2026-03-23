const ChatSection = () => {
  return (
    <section className="py-24 px-4 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display text-4xl md:text-5xl text-gold glow-gold text-center mb-16 tracking-wider">
          CHAT EN VIVO
        </h2>

        <div
          className="mx-auto overflow-hidden"
          style={{ maxWidth: '700px', border: '1px solid #C9A84C', borderRadius: '8px' }}
        >
          <iframe
            src="https://www6.cbox.ws/box/?boxid=843352&boxtag=vhkHya&sec=main"
            width="100%"
            height="450"
            frameBorder="0"
            scrolling="auto"
            title="Chat en Vivo"
          />
        </div>
      </div>
    </section>
  );
};

export default ChatSection;
