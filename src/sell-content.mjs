// Copy for the selling-your-business service page at /sell-your-business/.
// Targets owners searching for help selling a business in Akron, the west side of Cleveland,
// Lorain County, and the rest of Northeast Ohio. Same house rules: no prices, no promised
// sale prices or multiples, no deal counts or client names, no testimonials.

export default function sellContent(site) {
  const name = site.siteName;
  const region = site.location.region;

  return {
    seed: 41,
    title: `Sell Your Business in Akron and Cleveland, Ohio | ${name}`,
    description: `Sell your business with a team that has built and sold one. Exit planning and full sale representation for owners in Akron, west side Cleveland, and ${region}.`,
    serviceType: 'Business sale advisory and representation',
    // Page-specific service area for structured data, weighted to Akron and the west side of Cleveland.
    areaServed: [
      'Akron', 'Cuyahoga Falls', 'Stow', 'Hudson', 'Fairlawn', 'Green', 'Kent', 'Medina',
      'Cleveland', 'Lakewood', 'Rocky River', 'Bay Village', 'Westlake', 'North Olmsted', 'Fairview Park',
      'Strongsville', 'Avon', 'Avon Lake', 'North Ridgeville', 'Elyria', 'Lorain',
    ],
    eyebrow: `Selling a business in ${region}`,
    headline: 'Sell your business on your terms, when it is ready.',
    lead:
      'Selling a company is usually the largest financial decision an owner ever makes, and most owners make it once. Josh Muller built and sold a company of his own. Matt LaFleur is a CPA who helps owners get their numbers ready for a buyer. We can help you prepare the business, advise you through a sale, or represent you from the first buyer conversation to the closing table, for owners in Akron, the west side of Cleveland, and across Northeast Ohio.',

    situationsHeading: 'Eight questions a buyer will ask you',
    situationsIntro: 'Every serious buyer and lender asks some version of these. The ones that are hard to answer today are the place to start.',
    situationsOrdered: true,
    situations: [
      'What does the business really earn once owner pay and one-time costs are adjusted out?',
      'Will your financial statements and tax returns hold up when a buyer goes through them line by line?',
      'How much of the business depends on you personally: customers, pricing, key decisions?',
      'Are your largest customers concentrated enough to make a buyer nervous?',
      'Who on your team will stay, and who could run the business after you step back?',
      'What will a buyer need to spend on equipment, facilities, or systems in the next few years?',
      'Are your contracts, leases, and licenses in a form that can transfer to a new owner?',
      'What do you want after the sale: a clean exit, a transition period, or a continuing role?',
    ],

    departmentsHeading: 'Who buys businesses like yours',
    departmentsIntro: 'Different buyers look for different things and pay in different ways. Knowing which kind fits your business shapes how you prepare and how you sell.',
    departments: [
      { name: 'Individual buyers', body: 'Experienced managers and entrepreneurs who want to own a business, often using lender financing that brings its own documentation requirements.' },
      { name: 'Competitors and strategic buyers', body: 'Companies in your industry or a related one that want your customers, people, location, or capabilities.' },
      { name: 'Investor and private equity groups', body: 'Buyers who look closely at earnings quality, the management team, and room to grow.' },
      { name: 'Your team or family', body: 'Managers, employees, or family members, where the plan often needs to cover financing and leadership development too.' },
    ],

    servicesHeading: 'Three ways we help you sell',
    servicesIntro:
      'Some owners are years away and want to build value first. Some already have a buyer or a broker and want an experienced adviser beside them. Some want us to run the sale. You can start with any of the three.',
    services: [
      {
        lane: 'Before the sale',
        title: 'Exit planning and sale readiness',
        body: 'For owners one to three years out who want the business to be worth more, and easier to sell, before it goes to market.',
        items: [
          'A realistic view of what the business may be worth today and what drives that number',
          'Clean, consistent financial statements and adjusted earnings a buyer can verify',
          'Reducing owner dependence: managers, roles, and decisions that do not run through you',
          'Customer concentration, recurring revenue, and margin improvements',
          'Documented processes, contracts, and systems that transfer with the business',
          'Your personal goals: timing, proceeds, and what you want to do next',
        ],
      },
      {
        lane: 'During the sale',
        title: 'Owner advisory through the sale',
        body: 'For owners who already have a buyer, a broker, or an offer and want someone experienced on their side of the table.',
        items: [
          'Reviewing offers and letters of intent, including terms beyond the headline price',
          'Preparing for financial due diligence and answering the buyer’s questions',
          'Working capital, earnouts, seller notes, and transition terms in plain language',
          'Coordinating with your attorney, tax adviser, lender, and broker',
          'Keeping the business running well while the deal is underway',
        ],
      },
      {
        lane: 'Josh and Matt together',
        title: 'Full sale representation',
        body: 'For owners who want us to run the sale from start to finish, confidentially.',
        items: [
          'Valuation analysis and an asking price grounded in what buyers will verify',
          'A confidential business profile and marketing materials',
          'Identifying and approaching buyers, with signed confidentiality agreements first',
          'Qualifying buyers and managing every conversation, visit, and offer',
          'Negotiating price and terms on your behalf',
          'Managing due diligence and coordinating attorneys, lenders, and tax advisers through closing',
          'Planning the transition so employees, customers, and vendors hear the news the right way',
        ],
        note: 'Deal structure and tax treatment are decided with your attorney and tax adviser. We do not prepare tax returns or provide legal advice.',
      },
    ],

    audiencesHeading: 'Where we help owners sell',
    audiencesIntro: 'We have offices in Cuyahoga Falls and Elyria, which puts us close to owners on both sides of the region. Meetings can happen at your business, at our offices, or remotely.',
    audiences: [
      { name: 'Akron and Summit County', body: 'Akron, Cuyahoga Falls, Stow, Hudson, Fairlawn, Green, and Kent.' },
      { name: 'West side of Cleveland', body: 'Lakewood, Rocky River, Bay Village, Westlake, North Olmsted, Fairview Park, and Strongsville.' },
      { name: 'Lorain County', body: 'Elyria, Avon, Avon Lake, North Ridgeville, and Lorain.' },
      { name: 'Across Northeast Ohio', body: 'Cleveland, Medina, Canton, and communities throughout the region.' },
    ],

    valuesHeading: 'Why owners sell with us',
    valuesIntro:
      'A sale is more than a transaction. We pay attention to the deal, to the business, and to the owner on the other side of it.',
    values: [
      { title: 'We have been on your side of the table', body: 'Josh built and sold a company. We know what it feels like to hand over something you spent years building.' },
      { title: 'The numbers come first', body: 'A CPA prepares the financial story before a buyer sees it, so diligence confirms what you said instead of reopening the price.' },
      { title: 'Value is built before it is sold', body: 'Because we also coach owners and leadership teams, we can help raise what the business is worth, not just find a buyer for it today.' },
      { title: 'Straight talk on value', body: 'We tell you what we think buyers will pay and why, even when it is not the number you hoped for, and what it would take to change it.' },
    ],

    stepsHeading: 'How a sale comes together',
    steps: [
      { title: 'A confidential conversation', body: 'Your goals, your timing, and where the business stands today. Nothing goes beyond the room.' },
      { title: 'Value and readiness', body: 'A realistic value range and a list of what would raise it or put it at risk.' },
      { title: 'Prepare', body: 'Fix what a buyer will find: financials, owner dependence, contracts, and the team.' },
      { title: 'Go to market quietly', body: 'Approach the right buyers under confidentiality agreements, without telling your employees or customers.' },
      { title: 'Offers and diligence', body: 'Compare offers on all their terms, negotiate, and work through the buyer’s due diligence.' },
      { title: 'Close and hand off', body: 'Sign, fund, and lead the transition so the business you built keeps running well.' },
    ],

    peopleHeading: 'Who you would work with',
    people: {
      josh:
        'Josh built and sold a construction company before he started coaching owners and leadership teams. He works on the owner and people side of a sale: readiness, the team that stays, and the decisions an owner faces on the way out.',
      matt:
        'Matt is a CPA and entrepreneur with more than 14 years in accounting, financial reporting, and advisory work. He leads the financial side of a sale: clean statements, adjusted earnings, valuation analysis, and the buyer’s financial due diligence.',
    },

    faq: [
      {
        q: 'How do I sell my business in Northeast Ohio?',
        a: 'Most sales follow the same path: understand what the business is worth, prepare the financials and the team, approach qualified buyers confidentially, negotiate offers, work through due diligence, and close. We can help with any part of that or run the whole process, for owners in Akron, the west side of Cleveland, Lorain County, and across Northeast Ohio.',
      },
      {
        q: 'How much is my business worth?',
        a: 'Value depends mostly on earnings a buyer can verify, and on risk: how much the business depends on you, how concentrated your customers are, the strength of your team, and your industry. The terms of a deal matter as much as the price. We start with a realistic value range and show you what drives it.',
      },
      {
        q: 'How long does it take to sell a business?',
        a: 'Once a business is ready and on the market, a sale often takes six months to a year, depending on the business, the buyers, and financing. Preparation is best started one to three years before you want to sell, because the changes that raise value take time to show up in the numbers.',
      },
      {
        q: 'Can I sell my business confidentially?',
        a: 'Yes. Buyers sign a confidentiality agreement before they learn which business is for sale, early materials do not name the company, and we decide together when to tell employees, customers, and vendors.',
      },
      {
        q: 'Do you act as a business broker?',
        a: 'We can. We can represent you through the full sale, advise you alongside a broker or investment banker you already work with, or help you prepare before any of that begins.',
      },
      {
        q: 'Do I still need an attorney and a tax adviser?',
        a: `Yes. Deal structure, legal documents, and tax planning should involve your own attorney and tax adviser. We coordinate with them throughout. ${name} is not a registered CPA firm and does not prepare tax returns, provide legal advice, or provide attest services.`,
      },
      {
        q: 'What if I am not ready to sell yet?',
        a: 'That is the best time to call. Owners who start early have more choices about timing, buyers, and terms. Exit planning can also make the business stronger to keep, even if you decide not to sell.',
      },
      {
        q: 'Do you help owners in Akron and on the west side of Cleveland?',
        a: 'Yes. Our offices are in Cuyahoga Falls and Elyria. We work with owners in Akron and Summit County, on the west side of Cleveland from Lakewood to Westlake and Strongsville, in Lorain County, and across Northeast Ohio, in person and remotely.',
      },
    ],

    closingHeading: 'Thinking about selling? Start with a confidential conversation.',
    closingBody:
      'Tell us about the business, your timing, and what you want next. We will tell you honestly where you stand and what we would do first.',
  };
}
