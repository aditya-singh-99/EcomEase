import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Send, CheckCircle2, Sparkles, Loader2 } from "lucide-react";

export default function Form() {
  const sheetdbAPIkey = String(import.meta.env.VITE_SHEETDB_API_KEY || '');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      if (sheetdbAPIkey && sheetdbAPIkey !== 'undefined') {
        await fetch(`https://sheetdb.io/api/v1/${sheetdbAPIkey}`, {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ data: [data] })
        });
      } else {
        // Fallback simulation for local dev
        await new Promise((res) => setTimeout(res, 800));
      }
      setSubmitted(true);
      reset();
    } catch (e) {
      console.error(e);
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full">
      {submitted ? (
        <div className="p-8 text-center rounded-2xl bg-emerald-950/40 border border-emerald-500/40 space-y-4 animate-in fade-in duration-300">
          <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-bold text-white">Inquiry Received!</h3>
          <p className="text-sm text-slate-300 max-w-sm mx-auto">
            Our eCommerce director will analyze your brand profile and get in touch within 2 to 4 business hours.
          </p>
          <button
            type="button"
            onClick={() => setSubmitted(false)}
            className="px-6 py-2 rounded-xl text-xs font-semibold bg-slate-800 text-slate-300 hover:text-white transition-colors"
          >
            Send Another Message
          </button>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-slate-700/80 shadow-2xl space-y-5"
        >
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
              Full Name *
            </label>
            <input
              id="name"
              type="text"
              placeholder="e.g. Suryansh Garg"
              {...register('name', {
                required: 'Full name is required',
                pattern: {
                  value: /^[A-Za-z\s]+$/,
                  message: 'Name can only contain letters and spaces',
                },
              })}
              className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 transition-colors"
            />
            {errors.name && (
              <p className="text-xs text-rose-400 mt-1">* {errors.name.message}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
              Work Email *
            </label>
            <input
              id="email"
              type="email"
              placeholder="suryansh@company.com"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: 'Please provide a valid email address',
                },
              })}
              className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 transition-colors"
            />
            {errors.email && (
              <p className="text-xs text-rose-400 mt-1">* {errors.email.message}</p>
            )}
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
              Phone / WhatsApp Number *
            </label>
            <input
              id="phone"
              type="tel"
              placeholder="e.g. 9876543210"
              {...register('phone', {
                required: 'Phone number is required',
                pattern: {
                  value: /^\d{10}$/,
                  message: 'Please enter a valid 10-digit phone number',
                },
              })}
              className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 transition-colors"
            />
            {errors.phone && (
              <p className="text-xs text-rose-400 mt-1">* {errors.phone.message}</p>
            )}
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
              Tell us about your brand & requirements *
            </label>
            <textarea
              id="message"
              placeholder="Which marketplaces are you on? What are your current monthly sales and key challenges?"
              {...register('message', {
                required: 'Message is required',
                maxLength: {
                  value: 1000,
                  message: 'Message cannot exceed 1000 characters',
                },
              })}
              rows={3}
              className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 transition-colors"
            />
            {errors.message && (
              <p className="text-xs text-rose-400 mt-1">* {errors.message.message}</p>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 text-white font-bold text-sm shadow-xl shadow-blue-500/25 hover:shadow-cyan-500/35 hover:scale-[1.01] transition-all flex items-center justify-center gap-2 disabled:opacity-50"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Submitting Request...</span>
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4 text-cyan-200" />
                <span>Submit & Get Callback Today</span>
                <Send className="w-4 h-4" />
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}