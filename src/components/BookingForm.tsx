import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { CheckCircle2, Clock, Calendar, Phone, Mail, User, Sparkles, Loader2, AlertCircle } from 'lucide-react';
import { SPA_SERVICES } from '../data/services';
import { BUSINESS_INFO } from '../data/business';

const bookingSchema = z.object({
  fullName: z
    .string()
    .min(2, { message: 'Please enter your full name (at least 2 characters)' })
    .max(80, { message: 'Name too long' }),
  email: z
    .string()
    .email({ message: 'Please enter a valid email address' }),
  mobile: z
    .string()
    .regex(/^[6-9]\d{9}$/, { message: 'Please enter a valid 10-digit Indian mobile number' }),
  treatment: z
    .string()
    .min(1, { message: 'Please select a treatment' }),
  preferredDate: z
    .string()
    .min(1, { message: 'Please select your preferred date' }),
  preferredTime: z
    .string()
    .min(1, { message: 'Please select a preferred time slot' }),
  notes: z
    .string()
    .max(500, { message: 'Notes must be within 500 characters' })
    .optional(),
});

type BookingFormValues = z.infer<typeof bookingSchema>;

interface BookingFormProps {
  initialTreatment?: string;
  onSuccess?: () => void;
}

export const BookingForm: React.FC<BookingFormProps> = ({ initialTreatment }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState<BookingFormValues | null>(null);
  const [bookingRef, setBookingRef] = useState<string>('');

  const todayStr = new Date().toISOString().split('T')[0];

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<BookingFormValues>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      treatment: initialTreatment || '',
      preferredDate: todayStr,
      preferredTime: '11:00 AM',
      notes: '',
    },
  });

  const onSubmit = async (data: BookingFormValues) => {
    setIsSubmitting(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 800));
      const refId = `SOUL-${Date.now().toString().slice(-6)}`;
      setBookingRef(refId);
      setSubmissionSuccess(data);
    } catch {
      // In case of error
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setSubmissionSuccess(null);
    setBookingRef('');
    reset();
  };

  const timeSlots = [
    '10:30 AM',
    '11:30 AM',
    '12:30 PM',
    '02:00 PM',
    '03:30 PM',
    '05:00 PM',
    '06:30 PM',
    '08:00 PM',
  ];

  if (submissionSuccess) {
    return (
      <div className="bg-white border-2 border-[#E2C288] rounded-2xl p-8 text-center max-w-xl mx-auto shadow-md">
        <div className="w-16 h-16 bg-[#38162B] text-white rounded-full flex items-center justify-center mx-auto mb-5 shadow-sm border border-[#E2C288]">
          <CheckCircle2 className="w-9 h-9 text-[#E2C288]" />
        </div>

        <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1F1424]">
          Appointment Request Logged
        </h3>

        <div className="my-4 inline-block px-5 py-2 bg-[#FAF5ED] border border-[#E2C288] rounded-md">
          <span className="text-xs uppercase tracking-wider text-[#5C4863] font-bold">Booking Reference: </span>
          <span className="font-mono font-bold text-base text-[#1F1424]">{bookingRef}</span>
        </div>

        <p className="text-sm text-[#3B2A40] leading-relaxed max-w-md mx-auto mb-6">
          Thank you, <strong className="text-[#1F1424] font-bold">{submissionSuccess.fullName}</strong>. Your requested slot for{' '}
          <strong className="text-[#1F1424] font-bold">{submissionSuccess.treatment}</strong> on{' '}
          <strong className="text-[#1F1424] font-bold">{submissionSuccess.preferredDate}</strong> at{' '}
          <strong className="text-[#1F1424] font-bold">{submissionSuccess.preferredTime}</strong> has been recorded.
        </p>

        <div className="bg-[#FAF7F2] border-l-4 border-[#C29B4F] p-4 text-left rounded-r-md text-xs text-[#3B2A40] mb-6 space-y-1.5 shadow-2xs">
          <p className="font-bold text-[#1F1424] flex items-center gap-1.5 text-sm">
            <Sparkles className="w-4 h-4 text-[#8C6830]" />
            Next Step: Concierge Verification
          </p>
          <p className="leading-relaxed">
            To guarantee personalized therapist allocation and private suite preparation, our wellness concierge will call you on{' '}
            <strong className="text-[#1F1424] font-bold">{submissionSuccess.mobile}</strong> shortly to confirm your booking.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={`tel:${BUSINESS_INFO.phone}`}
            className="w-full sm:w-auto px-6 py-3 rounded-md bg-[#38162B] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#522144] transition-colors flex items-center justify-center gap-2 shadow-sm"
          >
            <Phone className="w-4 h-4" /> Call Reception: {BUSINESS_INFO.phoneDisplay}
          </a>
          <button
            type="button"
            onClick={handleReset}
            className="w-full sm:w-auto px-5 py-3 rounded-md border-2 border-[#1F1424] text-[#1F1424] text-xs font-bold hover:bg-[#FAF8F5] transition-colors cursor-pointer"
          >
            Request Another Session
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 text-left" noValidate>
      {/* Treatment Selection */}
      <div>
        <label htmlFor="treatment" className="block text-xs font-bold uppercase tracking-wider text-[#1F1424] mb-1.5">
          Select Spa Treatment <span className="text-[#7D4971]">*</span>
        </label>
        <select
          id="treatment"
          {...register('treatment')}
          className={`w-full px-4 py-3 bg-white border rounded-lg text-sm font-medium text-[#1F1424] focus:outline-none focus:ring-2 focus:ring-[#C29B4F] transition-colors ${
            errors.treatment ? 'border-red-400 bg-red-50/10' : 'border-[#D5C9B8]'
          }`}
        >
          <option value="">— Select a Spa Therapy —</option>
          <optgroup label="Signature Massages">
            <option value="Swedish Massage">Swedish Massage (60 / 90 mins)</option>
            <option value="Deep Tissue Massage">Deep Tissue Massage (60 / 90 mins)</option>
            <option value="Aromatherapy Massage">Aromatherapy Massage (60 / 90 mins)</option>
            <option value="Thai Massage">Traditional Thai Massage (60 / 90 / 120 mins)</option>
            <option value="Full Body Massage">Full Body Signature Massage (60 / 90 mins)</option>
            <option value="Relaxation Massage">Relaxation Calm Massage (60 / 90 mins)</option>
          </optgroup>
          <optgroup label="Specialty & Couple">
            <option value="Couple Spa Experience">VIP Couple Spa Suite Experience (90 / 120 mins)</option>
            <option value="Foot Reflexology">Foot Reflexology Therapy (45 / 60 mins)</option>
          </optgroup>
          <optgroup label="Body & Skin Rituals">
            <option value="Body Scrub">Exfoliating Mineral Body Scrub (45 / 60 mins)</option>
            <option value="Facial Treatments">Customized Botanical Facial (60 / 75 mins)</option>
            <option value="The Soul Rejuvenation Ritual">The Soul Rejuvenation Package (120 mins)</option>
            <option value="Imperial Couple Sanctuary">Imperial Couple Sanctuary Package (150 mins)</option>
          </optgroup>
        </select>
        {errors.treatment && (
          <p className="mt-1 text-xs text-red-600 font-semibold flex items-center gap-1">
            <AlertCircle className="w-3 h-3" /> {errors.treatment.message}
          </p>
        )}
      </div>

      {/* Date & Time Slot in 2 cols */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="preferredDate" className="block text-xs font-bold uppercase tracking-wider text-[#1F1424] mb-1.5 flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5 text-[#8C6830]" /> Preferred Date <span className="text-[#7D4971]">*</span>
          </label>
          <input
            id="preferredDate"
            type="date"
            min={todayStr}
            {...register('preferredDate')}
            className={`w-full px-4 py-3 bg-white border rounded-lg text-sm font-medium text-[#1F1424] focus:outline-none focus:ring-2 focus:ring-[#C29B4F] ${
              errors.preferredDate ? 'border-red-400 bg-red-50/10' : 'border-[#D5C9B8]'
            }`}
          />
          {errors.preferredDate && (
            <p className="mt-1 text-xs text-red-600 font-semibold flex items-center gap-1">
              <AlertCircle className="w-3 h-3" /> {errors.preferredDate.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="preferredTime" className="block text-xs font-bold uppercase tracking-wider text-[#1F1424] mb-1.5 flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-[#8C6830]" /> Preferred Time <span className="text-[#7D4971]">*</span>
          </label>
          <select
            id="preferredTime"
            {...register('preferredTime')}
            className={`w-full px-4 py-3 bg-white border rounded-lg text-sm font-medium text-[#1F1424] focus:outline-none focus:ring-2 focus:ring-[#C29B4F] ${
              errors.preferredTime ? 'border-red-400 bg-red-50/10' : 'border-[#D5C9B8]'
            }`}
          >
            {timeSlots.map((slot) => (
              <option key={slot} value={slot}>
                {slot}
              </option>
            ))}
          </select>
          {errors.preferredTime && (
            <p className="mt-1 text-xs text-red-600 font-semibold flex items-center gap-1">
              <AlertCircle className="w-3 h-3" /> {errors.preferredTime.message}
            </p>
          )}
        </div>
      </div>

      {/* Guest Full Name */}
      <div>
        <label htmlFor="fullName" className="block text-xs font-bold uppercase tracking-wider text-[#1F1424] mb-1.5 flex items-center gap-1">
          <User className="w-3.5 h-3.5 text-[#8C6830]" /> Full Name <span className="text-[#7D4971]">*</span>
        </label>
        <input
          id="fullName"
          type="text"
          placeholder="e.g. Rohini Sharma"
          {...register('fullName')}
          className={`w-full px-4 py-3 bg-white border rounded-lg text-sm font-medium text-[#1F1424] placeholder-[#5C4863]/60 focus:outline-none focus:ring-2 focus:ring-[#C29B4F] ${
            errors.fullName ? 'border-red-400 bg-red-50/10' : 'border-[#D5C9B8]'
          }`}
        />
        {errors.fullName && (
          <p className="mt-1 text-xs text-red-600 font-semibold flex items-center gap-1">
            <AlertCircle className="w-3 h-3" /> {errors.fullName.message}
          </p>
        )}
      </div>

      {/* Mobile Number & Email in 2 cols */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="mobile" className="block text-xs font-bold uppercase tracking-wider text-[#1F1424] mb-1.5 flex items-center gap-1">
            <Phone className="w-3.5 h-3.5 text-[#8C6830]" /> Mobile Number (10 Digits) <span className="text-[#7D4971]">*</span>
          </label>
          <div className="relative">
            <span className="absolute left-3.5 top-3 text-xs text-[#5C4863] font-mono font-bold select-none">+91</span>
            <input
              id="mobile"
              type="tel"
              placeholder="9876543210"
              maxLength={10}
              {...register('mobile')}
              className={`w-full pl-12 pr-4 py-3 bg-white border rounded-lg text-sm font-mono font-medium text-[#1F1424] placeholder-[#5C4863]/60 focus:outline-none focus:ring-2 focus:ring-[#C29B4F] ${
                errors.mobile ? 'border-red-400 bg-red-50/10' : 'border-[#D5C9B8]'
              }`}
            />
          </div>
          {errors.mobile && (
            <p className="mt-1 text-xs text-red-600 font-semibold flex items-center gap-1">
              <AlertCircle className="w-3 h-3" /> {errors.mobile.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-[#1F1424] mb-1.5 flex items-center gap-1">
            <Mail className="w-3.5 h-3.5 text-[#8C6830]" /> Email Address <span className="text-[#7D4971]">*</span>
          </label>
          <input
            id="email"
            type="email"
            placeholder="guest@example.com"
            {...register('email')}
            className={`w-full px-4 py-3 bg-white border rounded-lg text-sm font-medium text-[#1F1424] placeholder-[#5C4863]/60 focus:outline-none focus:ring-2 focus:ring-[#C29B4F] ${
              errors.email ? 'border-red-400 bg-red-50/10' : 'border-[#D5C9B8]'
            }`}
          />
          {errors.email && (
            <p className="mt-1 text-xs text-red-600 font-semibold flex items-center gap-1">
              <AlertCircle className="w-3 h-3" /> {errors.email.message}
            </p>
          )}
        </div>
      </div>

      {/* Special Preferences / Notes */}
      <div>
        <label htmlFor="notes" className="block text-xs font-bold uppercase tracking-wider text-[#1F1424] mb-1.5">
          Special Requests or Pressure Preference (Optional)
        </label>
        <textarea
          id="notes"
          rows={3}
          placeholder="E.g., specific shoulder tension, prefer medium pressure, couple anniversary request..."
          {...register('notes')}
          className="w-full px-4 py-3 bg-white border border-[#D5C9B8] rounded-lg text-sm font-medium text-[#1F1424] placeholder-[#5C4863]/60 focus:outline-none focus:ring-2 focus:ring-[#C29B4F]"
        />
        {errors.notes && (
          <p className="mt-1 text-xs text-red-600 font-semibold flex items-center gap-1">
            <AlertCircle className="w-3 h-3" /> {errors.notes.message}
          </p>
        )}
      </div>

      {/* Notice & Submit Button */}
      <div className="pt-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-4 px-6 rounded-lg bg-[#38162B] text-white text-xs font-bold uppercase tracking-widest hover:bg-[#522144] active:scale-[0.99] transition-all flex items-center justify-center gap-2 shadow-md cursor-pointer disabled:opacity-70 border border-[#B88E3E]/40"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin text-[#E2C288]" />
              Securing Slot Request...
            </>
          ) : (
            'Request Appointment Slot'
          )}
        </button>

        <p className="text-xs text-[#5C4863] text-center mt-3 leading-relaxed font-medium">
          Need immediate confirmation? Call concierge directly at{' '}
          <a href={`tel:${BUSINESS_INFO.phone}`} className="font-mono font-bold text-[#1F1424] underline hover:text-[#8C6830]">
            {BUSINESS_INFO.phoneDisplay}
          </a>
        </p>
      </div>
    </form>
  );
};
