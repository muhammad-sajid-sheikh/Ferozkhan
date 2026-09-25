"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";

type JoinUsDialogProps = {
  children: React.ReactNode;
};

export default function JoinUsDialog({ children }: JoinUsDialogProps) {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Backend/API integration will be added later.
    setSubmitted(true);
  };

  const handleOpenChange = (next: boolean) => {
    setOpen(next);
    if (!next) {
      setSubmitted(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger >{children}</DialogTrigger>

      <DialogContent className="sm:max-w-md">
        {submitted ? (
          <div className="flex flex-col items-center gap-3 py-6 text-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#01411C]/10 text-[#01411C]">
              ✓
            </div>
            <h3 className="font-serif text-lg font-bold text-[#14201A]">
              Thank you for joining!
            </h3>
            <p className="text-sm text-[#4B5D53]">
              Your request has been noted. We&apos;ll be in touch soon.
            </p>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="font-serif text-xl text-[#14201A]">
                Join Us
              </DialogTitle>
              <DialogDescription className="text-[#4B5D53]">
                Fill out the form below to become a part of our movement.
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="join-name" className="mb-1 block text-sm">
                  Full Name
                </Label>
                <input
                  id="join-name"
                  type="text"
                  required
                  placeholder="Your full name"
                  className="w-full rounded-sm border border-[#01411C]/20 px-3 py-2 text-sm focus:border-[#01411C] focus:outline-none focus:ring-1 focus:ring-[#01411C]"
                />
              </div>

              <div>
                <Label htmlFor="join-email" className="mb-1 block text-sm">
                  Email
                </Label>
                <input
                  id="join-email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="w-full rounded-sm border border-[#01411C]/20 px-3 py-2 text-sm focus:border-[#01411C] focus:outline-none focus:ring-1 focus:ring-[#01411C]"
                />
              </div>

              <div>
                <Label htmlFor="join-phone" className="mb-1 block text-sm">
                  Phone Number
                </Label>
                <input
                  id="join-phone"
                  type="tel"
                  required
                  placeholder="+1 (555) 123-4567"
                  className="w-full rounded-sm border border-[#01411C]/20 px-3 py-2 text-sm focus:border-[#01411C] focus:outline-none focus:ring-1 focus:ring-[#01411C]"
                />
              </div>

              <div>
                <Label htmlFor="join-city" className="mb-1 block text-sm">
                  City / Area
                </Label>
                <input
                  id="join-city"
                  type="text"
                  placeholder="Your city or area"
                  className="w-full rounded-sm border border-[#01411C]/20 px-3 py-2 text-sm focus:border-[#01411C] focus:outline-none focus:ring-1 focus:ring-[#01411C]"
                />
              </div>

                <div>
                <Label htmlFor="address" className="mb-1 block text-sm">
                  Address
                </Label>
                <input
                  id="address"
                  type="text"
                  placeholder="Your Address"
                  className="w-full rounded-sm border border-[#01411C]/20 px-3 py-2 text-sm focus:border-[#01411C] focus:outline-none focus:ring-1 focus:ring-[#01411C]"
                />
              </div>

              <div>
                <Label htmlFor="join-message" className="mb-1 block text-sm">
                  Message (Optional)
                </Label>
                <textarea
                  id="join-message"
                  rows={3}
                  placeholder="Why do you want to join?"
                  className="w-full rounded-sm border border-[#01411C]/20 px-3 py-2 text-sm focus:border-[#01411C] focus:outline-none focus:ring-1 focus:ring-[#01411C]"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-sm bg-[#C89B3C] px-5 py-2.5 text-sm font-semibold text-[#012A12] transition-colors hover:bg-[#dbb257]"
              >
                Submit
              </button>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}