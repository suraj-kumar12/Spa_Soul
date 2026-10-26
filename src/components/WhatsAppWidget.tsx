import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { X, Send, Clock, CheckCheck, Sparkles, ExternalLink } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { BUSINESS_INFO } from '../data/business';

export const WhatsAppWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [customMessage, setCustomMessage] = useState('');

  const quickPrompts = [
    'Hi Spa Soul, I would like to book a massage slot today.',
    'Hello, can you share couple package details and pricing?',
    'Namaste, what are your best therapies for back and neck pain?',
    'Hi, I want to book an appointment for this weekend.',
  ];

  const handleSend = (textToSend?: string) => {
    const text = (textToSend || customMessage || 'Hello Spa Soul, I would like to inquire about your wellness services.').trim();
    const encoded = encodeURIComponent(text);
    const url = `https://wa.me/${BUSINESS_INFO.whatsapp}?text=${encoded}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Popover Chat Card */}
      {isOpen && (
        <div
          role="dialog"
          aria-label="WhatsApp quick chat with Spa Soul"
          className="mb-4 w-[340px] sm:w-[380px] bg-white rounded-2xl shadow-2xl border border-[#E8DFD1] overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-200"
        >
          {/* Card Header with WhatsApp branding */}
          <div className="bg-[#075E54] text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center p-2 border border-white/20">
                  <WhatsAppIcon className="w-6 h-6" color="#FFFFFF" />
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-[#25D366] rounded-full border-2 border-[#075E54]" />
              </div>
              <div>
                <h3 className="font-bold text-sm text-white flex items-center gap-1.5">
                  Spa Soul Concierge
                  <span className="inline-block text-[10px] uppercase font-semibold tracking-wider bg-white/20 px-1.5 py-0.5 rounded text-white/90">
                    Verified
                  </span>
                </h3>
                <p className="text-[11px] text-white/80 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
                  Online | Usually replies in &lt; 5 mins
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Close WhatsApp chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Chat Body (WhatsApp styled chat background) */}
          <div className="p-4 bg-[#ECE5DD]/40 max-h-[360px] overflow-y-auto space-y-3">
            {/* Timestamp Notice */}
            <div className="text-center">
              <span className="text-[10px] uppercase tracking-wider bg-white/80 text-[#6B5A70] px-2 py-0.5 rounded-full border border-[#E2D8CC] font-medium">
                Official Spa WhatsApp Assistance
              </span>
            </div>

            {/* Inbound greeting message bubble */}
            <div className="flex items-start gap-2">
              <div className="bg-white rounded-2xl rounded-tl-none p-3 shadow-xs border border-[#E5DDD0] text-xs text-[#1F1424] max-w-[88%] space-y-1.5">
                <p className="font-semibold text-[#38162B] flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-[#B88E3E]" /> Welcome to Spa Soul!
                </p>
                <p className="text-[#3E2D44] leading-relaxed">
                  Namaste 🙏 How can we assist your rejuvenation journey today? You can inquire about therapy slots, couple suites, or get instant assistance.
                </p>
                <div className="flex items-center justify-end gap-1 text-[10px] text-[#8C7A92] pt-0.5">
                  <Clock className="w-3 h-3" />
                  <span>{BUSINESS_INFO.openingHours.hours}</span>
                  <CheckCheck className="w-3.5 h-3.5 text-[#34B7F1]" />
                </div>
              </div>
            </div>

            {/* Quick Prompts Chips */}
            <div className="pt-1">
              <p className="text-[11px] font-semibold text-[#5A455F] mb-1.5">Quick Inquiries:</p>
              <div className="flex flex-col gap-1.5">
                {quickPrompts.map((prompt, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => {
                      setCustomMessage(prompt);
                      handleSend(prompt);
                    }}
                    className="text-left text-xs bg-white hover:bg-[#F7F2EA] text-[#2C1832] py-2 px-3 rounded-lg border border-[#DECDBB] transition-all flex items-center justify-between group active:scale-[0.99]"
                  >
                    <span className="truncate pr-2 font-medium">{prompt}</span>
                    <WhatsAppIcon className="w-3.5 h-3.5 text-[#25D366] shrink-0 opacity-70 group-hover:opacity-100" />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Input Area */}
          <div className="p-3 bg-white border-t border-[#E8DFD1] space-y-2">
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={customMessage}
                onChange={(e) => setCustomMessage(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    handleSend();
                  }
                }}
                placeholder="Type your massage inquiry..."
                className="grow text-xs px-3 py-2.5 rounded-lg border border-[#D5C7B5] focus:outline-hidden focus:border-[#075E54] focus:ring-1 focus:ring-[#075E54] text-[#1F1424] placeholder:text-[#8C7A92]"
              />
              <button
                type="button"
                onClick={() => handleSend()}
                className="shrink-0 p-2.5 rounded-lg bg-[#25D366] hover:bg-[#1EBE5D] text-white transition-all shadow-xs active:scale-95 flex items-center justify-center"
                aria-label="Send message on WhatsApp"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>

            <div className="flex items-center justify-between text-[11px] text-[#6B5A70] pt-1 px-1">
              <span className="text-[#38162B] font-mono font-medium">{BUSINESS_INFO.whatsappDisplay}</span>
              <Link
                to="/whatsapp"
                onClick={() => setIsOpen(false)}
                className="text-[#075E54] hover:text-[#128C7E] font-semibold flex items-center gap-1 hover:underline"
              >
                Full WhatsApp Page <ExternalLink className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Floating Action Trigger Button */}
      <div className="flex items-center gap-3">
        {!isOpen && (
          <div className="hidden sm:flex items-center gap-2 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-lg border border-[#E8DFD1] text-xs font-semibold text-[#1F1424] animate-in fade-in slide-in-from-right-3">
            <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
            <span>Chat on WhatsApp</span>
          </div>
        )}

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="relative group p-3.5 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center justify-center focus:outline-hidden focus:ring-4 focus:ring-[#25D366]/40"
          aria-label={isOpen ? 'Close WhatsApp chat' : 'Open WhatsApp chat'}
        >
          {isOpen ? (
            <X className="w-7 h-7 text-white" />
          ) : (
            <>
              <WhatsAppIcon className="w-7 h-7" color="#FFFFFF" />
              <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-red-500 rounded-full border-2 border-white animate-pulse" />
            </>
          )}
        </button>
      </div>
    </div>
  );
};
