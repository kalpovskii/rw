import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="mx-auto max-w-[1440px] px-[20px] sm:px-[40px] my-[36px]">
      <Header />
      <HeroMobileFirst />
      <PromoSectionNew />
      <FaqSection />
      <GetStartedNowSecond />
      <Footer />
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

export function PromoSection() {
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

      <GetStartedNow />
    </div>
  )
}

export function HeroMobileFirst() {
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

function GetStartedNow() {
  return (
    <div className="rounded-xl bg-[#2f2b2c] p-[40px] my-[24px] xl:flex xl:justify-between items-center">
      <div className="font-bold sm:text-[24px] text-left text-[20px] wrap-balance max-w-[860px]">
        Supercharge your Reddit promotion with intelligent data analysis and actionable insights!
      </div>
      <button className="cursor-pointer mt-[32px] transition-transform duration-200 hover:scale-95 flex justify-left xl:mt-[0px] bg-gradient-to-r from-yellow-200 to-yellow-100 text-center bg-[#ffffff] text-[16px] font-semibold leading-[24px] text-[#070B19] px-[24px] py-[12px] rounded-full">Get Started Now</button>
    </div >
  )
}

function GetStartedNowSecond() {
  return (
    <div className="rounded-xl bg-[#2f2b2c] p-[40px] mt-[86px] sm:mt-0 xl:flex xl:justify-between items-center mb-[128px]">
      <div className="font-bold sm:text-[24px] text-left text-[20px] wrap-balance max-w-[860px]">
        Optimize your Reddit engagement, maximize conversions, and drive revenue growth with our stealth traffic analytics solution!
      </div>
      <button className="cursor-pointer mt-[32px] transition-transform duration-200 hover:scale-95 flex justify-left xl:mt-[0px] bg-gradient-to-r from-yellow-200 to-yellow-100 text-center bg-[#ffffff] text-[16px] font-semibold leading-[24px] text-[#070B19] px-[24px] py-[12px] rounded-full">Sign Up for a Demo</button>
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

export function PromoSectionNew() {
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

      <GetStartedNow />
    </div>
  )
}