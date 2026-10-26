import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  MessageSquare,
  Clock,
  Phone,
  Copy,
  Check,
  Sparkles,
  Calendar,
  Users,
  ShieldCheck,
  MapPin,
  ExternalLink,
  Heart,
  ChevronRight,
  Send,
} from 'lucide-react';
import { WhatsAppIcon } from '../components/WhatsAppIcon';
import { BUSINESS_INFO, GOOGLE_MAPS_DIRECTIONS_URL } from '../data/business';
import { SPA_SERVICES } from '../data/services';

export const WhatsAppPage: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [guestName, setGuestName] = useState('');
  const [selectedService, setSelectedService] = useState('Deep Tissue Muscle Therapy');
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredTime, setPreferredTime] = useState('02:00 PM - 04:00 PM');
  const [guestCount, setGuestCount] = useState('1 Person');
  const [specialRequest, setSpecialRequest] = useState('');

  const preConfiguredTemplates = [
    {
      title: "Today's Immediate Slot",
      subtitle: 'Check therapist availability right away',
      msg: `Hi Spa Soul, I am looking for an available massage slot today. Could you share what appointment times are open?`,
    },
    {
      title: 'Couple Sanctuary Package',
      subtitle: 'Private couple suite with floral bath',
      msg: `Hello Spa Soul, I would like to inquire about the Couple Sanctuary package, private suite amenities, and pricing for this week.`,
    },
    {
      title: 'Deep Tissue / Stress Relief',
      subtitle: 'Targeted muscle knot release & herbal oil',
      msg: `Namaste Spa Soul, I am suffering from neck and lower back stiffness. Could you recommend an intensive deep tissue or herbal therapy slot?`,
    },
    {
      title: 'Gift Voucher & Packages',
      subtitle: 'Celebrate anniversary, birthday or pamper a loved one',
      msg: `Hello Spa Soul, I want to arrange a luxury spa gift voucher or custom wellness package. Please share the details.`,
    },
  ];

  // Build the live formatted WhatsApp message
  const constructedMessage = `*Spa Soul Appointment Inquiry*
Name: ${guestName.trim() || 'Guest'}
Service: ${selectedService}
Preferred Date: ${preferredDate || 'Earliest Available'}
Preferred Time: ${preferredTime}
Guests: ${guestCount}
${specialRequest.trim() ? `Notes: ${specialRequest.trim()}\n` : ''}
Hello, please let me know if this slot can be confirmed. Thank you!`;

  const handleCopyNumber = () => {
    navigator.clipboard.writeText(BUSINESS_INFO.whatsappDisplay);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const openWhatsApp = (customText?: string) => {
    const text = customText || constructedMessage;
    const encoded = encodeURIComponent(text);
    const url = `https://wa.me/${BUSINESS_INFO.whatsapp}?text=${encoded}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="bg-[#FAF7F2] min-h-screen pb-20">
      {/* Hero Header */}
      <section className="relative bg-[#1A0E1C] text-white pt-20 pb-24 overflow-hidden border-b border-[#3D2542]">
        <div className="absolute inset-0 opacity-25 pointer-events-none overflow-hidden">
          <video
            src="https://videos.pexels.com/video-files/6628456/6628456-uhd_4096_2160_25fps.mp4"
            poster="https://images.pexels.com/videos/6628456/pexels-photo-6628456.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=630&w=1200"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A0E1C]/90 via-[#1A0E1C]/95 to-[#1A0E1C]" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#25D366]/15 border border-[#25D366]/30 text-white text-xs font-semibold">
            <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
            <span>Official WhatsApp Wellness Desk · Instant Response</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#F4ECE1] tracking-tight leading-tight">
            Connect with Spa Soul on WhatsApp
          </h1>

          <p className="text-sm sm:text-base text-[#D4C3DB] max-w-2xl mx-auto leading-relaxed">
            Reserve appointments with zero wait time, consult our certified therapists, receive real-time package brochures, and receive discreet directions directly to your chat.
          </p>

          {/* Quick Stats Bar */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs text-[#E1D3E6]">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#C29B4F]" />
              <span>Available 10:00 AM – 09:30 PM (Daily)</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#25D366]" />
              <span>Average response: &lt; 5 minutes</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#C29B4F]" />
              <span>Confidential &amp; Verified</span>
            </div>
          </div>

          {/* Instant CTA buttons */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => openWhatsApp()}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-[#25D366] hover:bg-[#20be5b] text-white font-bold text-sm tracking-wide transition-all shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]"
            >
              <WhatsAppIcon className="w-6 h-6" color="#FFFFFF" />
              <span>Start WhatsApp Chat Now</span>
            </button>

            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white/10 hover:bg-white/15 text-white border border-white/20 font-semibold text-sm transition-all"
            >
              <Phone className="w-4 h-4 text-[#C29B4F]" />
              <span>Call: {BUSINESS_INFO.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Interactive Booking & Message Builder (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Template Selector Cards */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#E8DFD1]">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-serif text-lg font-bold text-[#1F1424] flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-[#25D366]" />
                  Quick Inquiry Templates
                </h2>
                <span className="text-[11px] font-medium text-[#7A6480]">Click to chat instantly</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {preConfiguredTemplates.map((item, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => openWhatsApp(item.msg)}
                    className="p-3.5 rounded-xl text-left border border-[#E5DDD0] bg-[#FAF8F5] hover:bg-[#F3EDE3] hover:border-[#25D366] transition-all group flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <h3 className="font-bold text-xs text-[#1F1424] group-hover:text-[#075E54] transition-colors">
                          {item.title}
                        </h3>
                        <WhatsAppIcon className="w-4 h-4 text-[#25D366] shrink-0" />
                      </div>
                      <p className="text-[11px] text-[#6E5974] mt-1 leading-snug">
                        {item.subtitle}
                      </p>
                    </div>
                    <div className="mt-3 pt-2 border-t border-[#E8DFD1] flex items-center gap-1 text-[11px] font-semibold text-[#075E54]">
                      <span>Open in WhatsApp</span>
                      <ChevronRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Custom Interactive Appointment Form */}
            <div className="bg-white rounded-2xl p-6 sm:p-7 shadow-sm border border-[#E8DFD1] space-y-5">
              <div>
                <h2 className="font-serif text-lg font-bold text-[#1F1424] flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-[#8C6830]" />
                  Customize Your Appointment Message
                </h2>
                <p className="text-xs text-[#6B5A70] mt-1">
                  Fill in your details below to generate a formatted WhatsApp message ready to send with one tap.
                </p>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#38162B] mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      value={guestName}
                      onChange={(e) => setGuestName(e.target.value)}
                      placeholder="e.g. Rahul Sharma"
                      className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-[#D5C7B5] focus:outline-hidden focus:border-[#075E54] focus:ring-1 focus:ring-[#075E54] bg-[#FAF8F5]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#38162B] mb-1">
                      Number of Guests
                    </label>
                    <select
                      value={guestCount}
                      onChange={(e) => setGuestCount(e.target.value)}
                      className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-[#D5C7B5] focus:outline-hidden focus:border-[#075E54] focus:ring-1 focus:ring-[#075E54] bg-[#FAF8F5]"
                    >
                      <option value="1 Person (Solo Wellness)">1 Person (Solo Wellness)</option>
                      <option value="2 Persons (Couple Suite)">2 Persons (Couple Suite)</option>
                      <option value="3+ Persons (Group / Friends)">3+ Persons (Group / Friends)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#38162B] mb-1">
                    Select Preferred Treatment
                  </label>
                  <select
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                    className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-[#D5C7B5] focus:outline-hidden focus:border-[#075E54] focus:ring-1 focus:ring-[#075E54] bg-[#FAF8F5]"
                  >
                    {SPA_SERVICES.map((s) => (
                      <option key={s.id} value={s.name}>
                        {s.name} ({s.category})
                      </option>
                    ))}
                    <option value="Couple Sanctuary Package (2h)">Couple Sanctuary Package (2h)</option>
                    <option value="Not sure - Recommend based on consultation">Not sure - Recommend based on consultation</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#38162B] mb-1">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      value={preferredDate}
                      onChange={(e) => setPreferredDate(e.target.value)}
                      className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-[#D5C7B5] focus:outline-hidden focus:border-[#075E54] focus:ring-1 focus:ring-[#075E54] bg-[#FAF8F5]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#38162B] mb-1">
                      Preferred Time Window
                    </label>
                    <select
                      value={preferredTime}
                      onChange={(e) => setPreferredTime(e.target.value)}
                      className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-[#D5C7B5] focus:outline-hidden focus:border-[#075E54] focus:ring-1 focus:ring-[#075E54] bg-[#FAF8F5]"
                    >
                      <option value="Morning (10:30 AM - 01:00 PM)">Morning (10:30 AM - 01:00 PM)</option>
                      <option value="Afternoon (01:00 PM - 04:30 PM)">Afternoon (01:00 PM - 04:30 PM)</option>
                      <option value="Evening (04:30 PM - 07:30 PM)">Evening (04:30 PM - 07:30 PM)</option>
                      <option value="Night (07:30 PM - 09:30 PM)">Night (07:30 PM - 09:30 PM)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#38162B] mb-1">
                    Special Focus or Request (Optional)
                  </label>
                  <textarea
                    rows={2}
                    value={specialRequest}
                    onChange={(e) => setSpecialRequest(e.target.value)}
                    placeholder="e.g. Focus on shoulder knots, prefer female therapist, soft pressure..."
                    className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-[#D5C7B5] focus:outline-hidden focus:border-[#075E54] focus:ring-1 focus:ring-[#075E54] bg-[#FAF8F5]"
                  />
                </div>

                {/* Live Message Preview */}
                <div className="pt-2">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[11px] font-semibold text-[#6E5974] uppercase tracking-wider">
                      Message Preview:
                    </span>
                    <span className="text-[10px] text-[#25D366] font-bold">WhatsApp Ready</span>
                  </div>
                  <div className="bg-[#EFEAE2] p-3.5 rounded-xl border border-[#D8CFBF] text-xs font-mono text-[#1F1424] whitespace-pre-wrap leading-relaxed shadow-inner">
                    {constructedMessage}
                  </div>
                </div>

                {/* Send Button */}
                <button
                  type="button"
                  onClick={() => openWhatsApp()}
                  className="w-full py-3.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm tracking-wide transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 group active:scale-[0.99]"
                >
                  <WhatsAppIcon className="w-5 h-5" color="#FFFFFF" />
                  <span>Send This Booking Message on WhatsApp</span>
                  <Send className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

          </div>

          {/* Right Column: QR Code, Direct Number & Verified Info (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Desktop QR Scan Card */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#E8DFD1] text-center space-y-4">
              <div className="inline-flex p-3 rounded-2xl bg-[#075E54] text-white">
                <WhatsAppIcon className="w-8 h-8" color="#FFFFFF" />
              </div>

              <div>
                <h3 className="font-serif text-lg font-bold text-[#1F1424]">
                  Scan to Chat on Mobile
                </h3>
                <p className="text-xs text-[#6B5A70] mt-1">
                  Point your smartphone camera or WhatsApp scanner to initiate chat immediately.
                </p>
              </div>

              {/* QR Code Graphic Box */}
              <div className="inline-block p-4 bg-white rounded-2xl border-2 border-dashed border-[#D5C7B5] shadow-inner">
                {/* Visual SVG QR Code simulation with authentic WhatsApp badge */}
                <div className="relative w-48 h-48 mx-auto flex items-center justify-center bg-white p-2">
                  <svg
                    viewBox="0 0 100 100"
                    className="w-full h-full"
                    shapeRendering="crispEdges"
                  >
                    {/* Corner Squares */}
                    <rect x="0" y="0" width="28" height="28" fill="#1F1424" />
                    <rect x="4" y="4" width="20" height="20" fill="#FFFFFF" />
                    <rect x="8" y="8" width="12" height="12" fill="#075E54" />

                    <rect x="72" y="0" width="28" height="28" fill="#1F1424" />
                    <rect x="76" y="4" width="20" height="20" fill="#FFFFFF" />
                    <rect x="80" y="8" width="12" height="12" fill="#075E54" />

                    <rect x="0" y="72" width="28" height="28" fill="#1F1424" />
                    <rect x="4" y="76" width="20" height="20" fill="#FFFFFF" />
                    <rect x="8" y="80" width="12" height="12" fill="#075E54" />

                    {/* QR Code Data Pattern Blocks */}
                    <rect x="36" y="4" width="8" height="8" fill="#1F1424" />
                    <rect x="52" y="4" width="12" height="4" fill="#1F1424" />
                    <rect x="36" y="16" width="4" height="12" fill="#1F1424" />
                    <rect x="44" y="20" width="8" height="8" fill="#1F1424" />
                    <rect x="56" y="16" width="8" height="12" fill="#1F1424" />

                    <rect x="4" y="36" width="12" height="8" fill="#1F1424" />
                    <rect x="20" y="36" width="8" height="8" fill="#1F1424" />
                    <rect x="4" y="52" width="8" height="12" fill="#1F1424" />
                    <rect x="16" y="52" width="12" height="8" fill="#1F1424" />

                    <rect x="76" y="36" width="8" height="8" fill="#1F1424" />
                    <rect x="88" y="40" width="8" height="12" fill="#1F1424" />
                    <rect x="72" y="52" width="12" height="8" fill="#1F1424" />
                    <rect x="88" y="56" width="8" height="8" fill="#1F1424" />

                    <rect x="36" y="76" width="12" height="8" fill="#1F1424" />
                    <rect x="52" y="72" width="8" height="12" fill="#1F1424" />
                    <rect x="36" y="88" width="8" height="8" fill="#1F1424" />
                    <rect x="48" y="88" width="12" height="8" fill="#1F1424" />
                    <rect x="72" y="80" width="8" height="8" fill="#1F1424" />
                    <rect x="84" y="76" width="12" height="8" fill="#1F1424" />
                    <rect x="76" y="88" width="16" height="8" fill="#1F1424" />

                    {/* Central Brand Badge Shield */}
                    <circle cx="50" cy="50" r="14" fill="#FFFFFF" />
                    <circle cx="50" cy="50" r="11" fill="#25D366" />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <WhatsAppIcon className="w-5 h-5" color="#FFFFFF" />
                  </div>
                </div>
              </div>

              <div className="bg-[#FAF8F5] p-3 rounded-xl border border-[#E8DFD1] text-xs">
                <p className="font-semibold text-[#1F1424]">WhatsApp Business Contact:</p>
                <div className="flex items-center justify-center gap-2 mt-1">
                  <span className="font-mono font-bold text-sm text-[#075E54]">
                    {BUSINESS_INFO.whatsappDisplay}
                  </span>
                  <button
                    type="button"
                    onClick={handleCopyNumber}
                    className="p-1.5 rounded-md hover:bg-white text-[#7A6480] hover:text-[#1F1424] transition-colors border border-transparent hover:border-[#D5C7B5]"
                    title="Copy WhatsApp Number"
                  >
                    {copied ? (
                      <Check className="w-3.5 h-3.5 text-green-600" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>
                {copied && (
                  <p className="text-[10px] text-green-700 font-semibold mt-1">Number copied to clipboard!</p>
                )}
              </div>
            </div>

            {/* Why WhatsApp Us Card */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#E8DFD1] space-y-4">
              <h3 className="font-serif text-base font-bold text-[#1F1424]">
                Why Connect with Us via WhatsApp?
              </h3>

              <div className="space-y-3 text-xs text-[#3E2D44]">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#EBF7F0] text-[#25D366] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1F1424]">Immediate Confirmation</h4>
                    <p className="text-[#6B5A70] leading-relaxed">
                      Confirm therapist slots in real time without email delays or automated bot frustration.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#FAF5ED] text-[#8C6830] flex items-center justify-center shrink-0 mt-0.5">
                    <Heart className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1F1424]">Discreet Couple &amp; Special Requests</h4>
                    <p className="text-[#6B5A70] leading-relaxed">
                      Share romantic couple package setups, floral aromatherapy preferences, or health contraindications confidentially.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#FAF5ED] text-[#8C6830] flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1F1424]">Google Maps Pin &amp; Parking Guide</h4>
                    <p className="text-[#6B5A70] leading-relaxed">
                      Receive our exact parking entry at Safal Square, University Road, Vesu directly on your phone.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-[#E8DFD1]">
                <a
                  href={GOOGLE_MAPS_DIRECTIONS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#8C6830] hover:underline"
                >
                  <MapPin className="w-3.5 h-3.5" />
                  <span>View Spa Location in Surat on Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Direct Telephone fallback */}
            <div className="bg-[#FAF8F5] rounded-2xl p-5 border border-[#DECDBB] flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-bold text-[#1F1424]">Prefer Voice Calling?</p>
                <p className="text-[11px] text-[#6B5A70]">Speak directly with the on-duty wellness manager</p>
              </div>
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="shrink-0 px-4 py-2 text-xs font-bold rounded-lg bg-[#38162B] text-white hover:bg-[#522144] transition-colors shadow-xs"
              >
                Call Now
              </a>
            </div>

          </div>

        </div>
      </section>
    </div>
  );
};
