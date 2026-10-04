"use client"

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbx9CtZrlGCl0eZyTyFG2hsVo1RFsBP4LPtQkPxBEMOpSV6D3QxJ2ke4v9OdLa6cTWJSvQ/exec";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="mx-auto my-[36px] max-w-[1440px] px-[20px] sm:px-[40px]">
      <Header />
      <HeroMobileFirst onOpenModal={() => setIsModalOpen(true)} />
      <PromoSectionNew onOpenModal={() => setIsModalOpen(true)} />
      <FaqSection />
      <GetStartedNowSecond onOpenModal={() => setIsModalOpen(true)} />
      <Footer />

      <BetaModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}

export function HeroSection() {
  return (
    <div className="flex flex-col gap-[24px] items-center justify-center bg-[url('/promo.webp')] text-center py-[148px] px-[176px] rounded-2xl bg-cover bg-center bg-no-repeat">
      <p>Built for Creators</p>
      <h1 className="text-white text-[60px] leading-[1.2] wrap-balance font-bold">All Essential Reddit Traffic Metrics In a One Clear View</h1>
      <p className="max-w-[620px] text-[16px] font-medium leading-[1.4] text-center mx-auto">Track your Reddit traffic metrics in one place. Get insights into your Reddit traffic and optimize your content for maximum engagement</p>
      <button className="mt-[24px] cursor-pointer hover:scale-95 transition-transform duration-200 text-center bg-[#ffffff] text-[14px] font-semibold leading-[24px] text-[#070B19] px-[24px] py-[12px] rounded-full">Start Tracking for Free</button>
    </div>
  );
}

export function PromoSection({ onOpenModal,
}: {
  onOpenModal: () => void;
}) {
  return (
    <div className="my-[40px] sm:my-[124px] text-center" id="whats-x">
      <h2 className="bg-gradient-to-r from-yellow-100 to-white bg-clip-text text-[24px] sm:text-[36px] leading-[1.2] font-bold text-transparent">
        Tracking on Reddit Made Easy and Insightful
      </h2>

      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">

        <div className="rounded-xl bg-[#2f2b2c] grid sm:grid-cols-2 gap-[54px]">
          <div className="pl-[30px] pr-[30px] sm:pr-[0px] pt-[30px] pb-[30px] text-left">
            <div className="text-[24px] mb-[8px] font-semibold">Subreddit & Competitor Spy</div>
            <div className="text-[#ffffff]/60 text-[15px]">Stop guessing what niches want. Instantly search subreddits to view verification rules, posting limits, and karma thresholds. Track top creators in your niche to copy their posting schedules, title patterns, and winning strategies.</div>
          </div>
          <div>
            22
          </div>
        </div>

        <div className="rounded-xl bg-[#2f2b2c] grid sm:grid-cols-2 gap-[54px]">
          <div className="pl-[30px] pt-[30px] pb-[30px] text-left">
            <div className="text-[24px] mb-[8px] font-semibold">Karma Bootstrapper</div>
            <div className="text-[#ffffff]/60 text-[15px]">Warm up new accounts safely without getting blocked. Get a curated list of high-traffic, low-restriction SFW subreddits. Use our tailored AI to generate organic post ideas and comments that build your karma fast.</div>
          </div>
          <div>
            22
          </div>
        </div>

        <div className="rounded-xl bg-[#2f2b2c] grid sm:grid-cols-2 gap-[54px]">
          <div className="pl-[30px] pr-[30px] sm:pr-[0px] pt-[30px] pb-[30px] text-left">
            <div className="text-[24px] mb-[8px] font-semibold">Closed-Loop Analytics</div>
            <div className="text-[#ffffff]/60 text-[15px]">See the full lifecycle of your promotion. Connect via secure Reddit OAuth to chart upvotes, comments, and account health over time. Know exactly which subreddits and posts drive actual traffic to your link hub.</div>
          </div>
          <div>
            22
          </div>
        </div>

        <div className="rounded-xl bg-gradient-to-br from-[#7438b7] to-[#bd3ada] grid sm:grid-cols-2 gap-[54px]">
          <div className="pl-[30px] pr-[30px] sm:pr-[0px] pt-[30px] pb-[30px] text-left">
            <div className="text-[24px] mb-[8px] font-semibold">Health Monitor & Digest</div>
            <div className="text-[15px]">Never waste time posting into the void. Get daily, automated alerts on your shadowban status before you start your day. Plus, view a clean daily summary of algorithm updates, meta shifts, and creator warnings mined from advice forums.</div>
          </div>
          <div>
            22
          </div>
        </div>
      </div>

      <GetStartedNow onOpenModal={onOpenModal} />
    </div>
  )
}

export function HeroMobileFirst({ onOpenModal,
}: {
  onOpenModal: () => void;
}) {
  return (
    <div
      className="
        flex flex-col items-center justify-center
        gap-6
        rounded-2xl
        bg-[url('/promo.webp')]
        bg-cover bg-left bg-no-repeat
        px-5 py-32
        text-center

        sm:px-8 sm:py-24
        md:px-12 md:py-28
        lg:px-24 lg:py-32
        xl:px-44 xl:py-36
      "
    >
      <p />
      <p>Built for Creators</p>
      <h1
        className="
          max-w-5xl
          text-3xl font-bold leading-[1.2] text-white
          wrap-balance

          sm:text-4xl
          md:text-5xl
          lg:text-[56px]
          xl:text-[60px]
        "
      >
        All Essential Reddit Traffic Metrics In a One Clear View
      </h1>

      <p
        className="
          mx-auto
          max-w-[620px]
          text-sm font-medium leading-[1.4] text-white
          sm:text-base
        "
      >
        Track your Reddit traffic metrics in one place. Get insights into your
        Reddit traffic and optimize your content for maximum engagement
      </p>

      <button
        onClick={onOpenModal}
        className="
          mt-2
          cursor-pointer
          rounded-full
          bg-white
          px-6 py-3
          text-center
          text-sm font-semibold leading-6 text-[#070B19]
          hover:scale-95 transition-transform duration-200
          sm:mt-4
        "
      >
        Start Tracking for Free
      </button>
    </div>
  );
}

function GetStartedNow({ onOpenModal,
}: {
  onOpenModal: () => void;
}) {
  return (
    <div className="rounded-xl bg-[#2f2b2c] p-[40px] my-[24px] xl:flex xl:justify-between items-center">
      <div className="font-bold sm:text-[24px] text-left text-[20px] wrap-balance max-w-[860px]">
        Supercharge your Reddit promotion with intelligent data analysis and actionable insights!
      </div>
      <button onClick={onOpenModal} className="cursor-pointer mt-[32px] transition-transform duration-200 hover:scale-95 flex justify-left xl:mt-[0px] bg-gradient-to-r from-yellow-200 to-yellow-100 text-center bg-[#ffffff] text-[16px] font-semibold leading-[24px] text-[#070B19] px-[24px] py-[12px] rounded-full">Get Started Now</button>
    </div >
  )
}

function GetStartedNowSecond({ onOpenModal,
}: {
  onOpenModal: () => void;
}) {
  return (
    <div className="rounded-xl bg-[#2f2b2c] p-[40px] mt-[86px] sm:mt-0 xl:flex xl:justify-between items-center mb-[128px]">
      <div className="font-bold sm:text-[24px] text-left text-[20px] wrap-balance max-w-[860px]">
        Optimize your Reddit engagement, maximize conversions, and drive revenue growth with our stealth traffic analytics solution!
      </div>
      <button onClick={onOpenModal} className="cursor-pointer mt-[32px] transition-transform duration-200 hover:scale-95 flex justify-left xl:mt-[0px] bg-gradient-to-r from-yellow-200 to-yellow-100 text-center bg-[#ffffff] text-[16px] font-semibold leading-[24px] text-[#070B19] px-[24px] py-[12px] rounded-full">Sign Up for a Demo</button>
    </div >
  )
}

export function FaqSection() {
  return (
    <div className="my-[40px] text-center sm:my-[124px]" id="faq">
      <h2 className="bg-gradient-to-r from-yellow-100 to-white bg-clip-text text-[24px] leading-[1.2] font-bold text-transparent sm:text-[36px]">
        Essential FAQs about Reddit Promo Analytics
      </h2>

      <div className="mt-12 grid grid-cols-1 gap-6">
        {/* First row */}
        <div className="rounded-xl bg-[#2f2b2c] p-6 text-left sm:p-8">
          <h3 className="mb-3 text-[20px] font-semibold">
            Is this safe for my Reddit account?
          </h3>

          <p className="text-[15px] leading-[1.5] text-white/60">
            Yes, 100%. We do not offer any automated or bot posting features,
            which are the main cause of account bans. Your data tracking runs
            securely via official Reddit OAuth and unauthenticated scraping.
          </p>
        </div>

        {/* Second row */}
        <div className="rounded-xl bg-[#2f2b2c] p-6 text-left sm:p-8">
          <h3 className="mb-3 text-[20px] font-semibold">
            How does the Competitor Spy feature work?
          </h3>

          <p className="text-[15px] leading-[1.5] text-white/60">
            You input a subreddit or creator username, and our engine pulls
            their public top-performing metrics. You can instantly see their
            peak posting hours, most upvoted titles, and active subreddits
            without them ever knowing.
          </p>
        </div>

        {/* Third row */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="rounded-xl bg-[#2f2b2c] p-6 text-left sm:p-8">
            <h3 className="mb-3 text-[20px] font-semibold">
              Can it detect if I am shadowbanned?
            </h3>

            <p className="text-[15px] leading-[1.5] text-white/60">
              Yes. Every morning, our system runs an unauthenticated check on
              your profile—simulating what a public user sees. If your profile
              returns a hidden error, we notify you immediately so you dont
              waste time posting into the void.
            </p>
          </div>

          <div className="rounded-xl bg-[#2f2b2c] p-6 text-left sm:p-8">
            <h3 className="mb-3 text-[20px] font-semibold">
              Do you store my Reddit password?
            </h3>

            <p className="text-[15px] leading-[1.5] text-white/60">
              Never. We use official Reddit OAuth for account syncs. This means
              you log in directly on Reddits secure portal, and they simply
              grant us read-only access to view your post analytics.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}


export function Footer() {
  return (
    <footer className="border-t border-[#21242f] py-10 sm:py-12">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
        <div>
          <h3 className="mb-4 text-[16px] font-semibold text-white">Company</h3>

          <div className="flex flex-col gap-2 text-[14px] text-white/60">
            <a
              href="/cookies-policy"
              className="transition-colors hover:text-white"
            >
              Cookies Policy
            </a>
            <a
              href="/privacy-policy"
              className="transition-colors hover:text-white"
            >
              Privacy Policy
            </a>
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-[16px] font-semibold text-white">Support</h3>

          <div className="flex flex-col gap-2 text-[14px] text-white/60">
            <a href="#whats-x" className="transition-colors hover:text-white">
              What is X
            </a>
            <a href="#faq" className="transition-colors hover:text-white">
              FAQ
            </a>
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-[16px] font-semibold text-white">
            Contacts
          </h3>

          <a
            href="mailto:support@example.com"
            className="text-[14px] text-white/60 transition-colors hover:text-white"
          >
            support@example.com
          </a>
        </div>
      </div>
    </footer>
  );
}

export function Header() {
  return (
    <header className="border-b border-[#21242f]">
      <div className="flex items-center justify-between pb-[32px]">
        <Link href="/" className="flex items-center gap-2.5">
          <span className="bg-gradient-to-r from-yellow-100 to-white bg-clip-text sm:text-[24px] leading-[1.2] font-bold text-transparent">
            REDDIT WIZARD
          </span>
        </Link>

        <nav className="flex items-center gap-6 sm:text-xl font-medium text-white/70 sm:gap-8">
          <Link
            href="#whats-x"
            className="transition-colors hover:text-white"
          >
            What is Reddit Wizard?
          </Link>

          <Link
            href="#faq"
            className="transition-colors hover:text-white"
          >
            FAQ
          </Link>
        </nav>
      </div>
    </header>
  );
}

export function PromoSectionNew({ onOpenModal,
}: {
  onOpenModal: () => void;
}) {
  return (
    <div className="my-[40px] sm:my-[124px] text-center" id="whats-x">
      <h2 className="bg-gradient-to-r from-yellow-100 to-white bg-clip-text text-[24px] sm:text-[36px] leading-[1.2] font-bold text-transparent">
        Tracking on Reddit Made Easy and Insightful
      </h2>

      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="rounded-xl bg-[#2f2b2c]">
          <div className="pl-[30px] pr-[30px] pt-[30px] pb-[30px] text-left">
            <div className="text-[24px] mb-[8px] font-semibold">
              Subreddit & Competitor Spy
            </div>
            <div className="text-[#ffffff]/60 text-[15px]">
              Stop guessing what niches want. Instantly search subreddits to
              view verification rules, posting limits, and karma thresholds.
              Track top creators in your niche to copy their posting schedules,
              title patterns, and winning strategies.
            </div>
          </div>
        </div>

        <div className="rounded-xl bg-[#2f2b2c]">
          <div className="pl-[30px] pt-[30px] pb-[30px] text-left">
            <div className="text-[24px] mb-[8px] font-semibold">
              Karma Bootstrapper
            </div>
            <div className="text-[#ffffff]/60 text-[15px]">
              Warm up new accounts safely without getting blocked. Get a
              curated list of high-traffic, low-restriction SFW subreddits.
              Use our tailored AI to generate organic post ideas and comments
              that build your karma fast.
            </div>
          </div>
        </div>

        <div className="rounded-xl bg-[#2f2b2c]">
          <div className="pl-[30px] pr-[30px] pt-[30px] pb-[30px] text-left">
            <div className="text-[24px] mb-[8px] font-semibold">
              Closed-Loop Analytics
            </div>
            <div className="text-[#ffffff]/60 text-[15px]">
              See the full lifecycle of your promotion. Connect via secure
              Reddit OAuth to chart upvotes, comments, and account health over
              time. Know exactly which subreddits and posts drive actual
              traffic to your link hub.
            </div>
          </div>
        </div>

        <div className="rounded-xl bg-gradient-to-br from-[#7438b7] to-[#bd3ada]">
          <div className="pl-[30px] pr-[30px] pt-[30px] pb-[30px] text-left">
            <div className="text-[24px] mb-[8px] font-semibold">
              Health Monitor & Digest
            </div>
            <div className="text-[15px]">
              Never waste time posting into the void. Get daily, automated
              alerts on your shadowban status before you start your day. Plus,
              view a clean daily summary of algorithm updates, meta shifts, and
              creator warnings mined from advice forums.
            </div>
          </div>
        </div>
      </div>

      <GetStartedNow onOpenModal={onOpenModal} />
    </div>
  )
}

function BetaModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const email = formData.get("email");

    setIsSubmitting(true);

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        body: JSON.stringify({ email }),
      });

      form.reset();
      setIsSubmitted(true);
    } catch (error) {
      console.error("Failed to submit email:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-5 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-[520px] rounded-2xl bg-[#2f2b2c] p-6 text-left sm:p-10"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-5 top-5 cursor-pointer text-2xl text-white/50 transition-colors hover:text-white"
          aria-label="Close modal"
        >
          ×
        </button>

        {!isSubmitted ? (
          <>
            <div className="mb-8">
              <div className="mb-3 text-sm font-semibold uppercase tracking-wider text-yellow-200">
                Reddit Wizard Beta
              </div>

              <h2 className="mb-4 text-2xl font-bold leading-tight text-white sm:text-3xl">
                We&apos;re looking for Reddit creators
              </h2>

              <p className="text-[15px] leading-[1.6] text-white/60">
                We&apos;re actively looking for creators to join our beta
                testing program and help us build Reddit Wizard.
              </p>

              <p className="mt-4 text-[15px] leading-[1.6] text-white/60">
                As a thank you, everyone who helps us during the beta will
                receive{" "}
                <span className="font-semibold text-white">
                  lifelong free access
                </span>{" "}
                to Reddit Wizard.
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-3"
            >
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                required
                disabled={isSubmitting}
                className="w-full rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-white outline-none placeholder:text-white/30 focus:border-yellow-200 disabled:cursor-not-allowed disabled:opacity-50"
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className="flex cursor-pointer items-center justify-center rounded-full bg-gradient-to-r from-yellow-200 to-yellow-100 px-6 py-3 text-sm font-semibold text-[#070B19] transition-transform duration-200 hover:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:scale-100"
              >
                {isSubmitting ? (
                  <>
                    <span className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-[#070B19]/30 border-t-[#070B19]" />
                    Joining...
                  </>
                ) : (
                  "Join the Beta"
                )}
              </button>
            </form>

            <p className="mt-4 text-center text-xs text-white/30">
              No spam. We&apos;ll only contact you about the beta.
            </p>
          </>
        ) : (
          <div className="py-8 text-center">
            <div className="mb-5 text-4xl">🎉</div>

            <h2 className="mb-4 text-2xl font-bold text-white sm:text-3xl">
              You&apos;re on the list!
            </h2>

            <p className="text-[15px] leading-[1.6] text-white/60">
              Thank you for joining the Reddit Wizard beta.
            </p>

            <p className="mt-4 text-[15px] leading-[1.6] text-white/60">
              We&apos;ll send you an email when we&apos;re ready to invite you
              to test the product.
            </p>

            <p className="mt-4 text-[15px] leading-[1.6] text-white/60">
              And as promised, beta creators who help us test and improve
              Reddit Wizard will receive{" "}
              <span className="font-semibold text-white">
                lifelong free access.
              </span>
            </p>

            <button
              type="button"
              onClick={onClose}
              className="mt-8 cursor-pointer rounded-full bg-gradient-to-r from-yellow-200 to-yellow-100 px-6 py-3 text-sm font-semibold text-[#070B19] transition-transform duration-200 hover:scale-[0.98]"
            >
              Sounds good
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

