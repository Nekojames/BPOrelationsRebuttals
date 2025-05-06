const data = [
  {
    objection: "How did you get my information?",
    rebuttal: "As a licensed lender, we lawfully access data through secure, verified credit bureaus..."
  },
  {
    objection: "Hesitant to Provide SSN",
    rebuttal: "Your security matters—and that’s why we use bank-level encryption to protect your SSN at every step. We don’t ask for information we don’t need. This allows us to verify your identity and secure the best offers on your behalf—without affecting your credit or exposing your data. It’s the safest way to move forward with full confidence.
"
  },
  {
    objection: "What company is this?",
    rebuttal: "We’re Loan Assistance Center—trusted partners of top-tier lenders across the country. Our job is to simplify your process, cut through the noise, and connect you with real, affordable options. We’re not here to sell—we’re here to solve, and we do it with professionalism, speed, and purpose.
"
  }, {
    objection: "How did you get my information?",
    rebuttal: "As a licensed lender, we lawfully access data through secure, verified credit bureaus to identify individuals pre-qualified for exclusive financial solutions. Your privacy is safeguarded by federal compliance standards, and every step we take is with full accountability and integrity. This process was built to protect you while opening the door to real opportunities.
"
  },
 , {
    objection: "Don’t do a soft pull—I have bad credit.",
    rebuttal: "Bad credit doesn’t stop us—it just gives us more to work with. Our lenders evaluate your full profile, not just a number. And because this is a soft pull, your score stays completely untouched. It’s your shot at a smarter financial path—without risk or penalty.

"
  },
  {
    objection:". Wrong SSN or Info",
    rebuttal:  "To proceed, our system needs verified, accurate information to match you with the right lender. A single mismatch could delay or block your approval. Correcting it now ensures your eligibility and keeps the process seamless from here.
"
  }
  ,
  {
    objection:,
    rebuttal:  
  }
  ,
  {
    objection: "I’m not interested” / Not looking for a loan”",
    rebuttal:  "Completely understand—but what we’re offering isn’t just a loan—it’s a financial reset. Whether you’re facing high-interest debt, unexpected expenses, or just want flexibility, this solution puts control back in your hands. When real options are on the table, walking away means walking away from relief.
"
  }
,
  {
    objection:"“What’s your exact location?”",
    rebuttal:  "We’re based in Irvine, California, and we work exclusively with a national network of vetted lenders. Once you’re pre-qualified, you’ll get full transparency about the lender, terms, and next steps. Every piece of this process is built on trust, clarity, and compliance.
"
  }
,
  {
    objection:"I don’t have time.”
    ,rebuttal: "That’s exactly why we streamlined this process to take just minutes. What you do today could impact your financial freedom for years. And this limited-time offer doesn’t wait. We’re ready when you are."
  }
  ,
  {
    objection: "Why unlock my account for a soft pull?",
    ,rebuttal:  "Your account needs to be unlocked so we can complete a risk-free soft inquiry—which has zero effect on your credit score. It’s quick, secure, and the only way we can present accurate, personalized loan terms. It keeps you in control, without compromise.
"
  }
  ,
  {
    objection:" “What’s your website or address?",
    rebuttal:"Happy to provide all official info—but to protect your identity, we only send sensitive credentials through secure email. That ensures you’re getting verified information directly from underwriting—accurately, safely, and without delay.
"  
  }
  ,
  {
    objection: "Why don’t you have my information?”
    ,rebuttal:  "We pull data from multiple sources, but to prevent errors or mismatches, we verify directly with you. This ensures that what we send is accurate, tailored, and fully aligned with what you qualify for. No wasted time. No missed opportunity."
  }
  ,
  {
    objection:" “How are you different from other lenders?",
    rebuttal:  "Unlike traditional lenders, we fight for your best terms. You get access to low fixed rates starting at 5.99%, no collateral required, and real approvals based on your overall financial story—not just your credit score. Add in faster funding and airtight security, and this becomes the smarter, safer way to borrow.
"
  }
  ,
  {
    objection:" “Soft Pull vs. Hard Pull?”",
    rebuttal:  "A soft pull lets us check your pre-approval status without touching your credit score. It’s invisible to other lenders and leaves zero impact. Hard pulls come later, only with your full consent—but right now, all we’re doing is exploring your best options safely and smartly."
  }
  ,
  {
    objection:"“Why do you need my email?",
    rebuttal:  "Your email is the direct line for critical documents, updates, and approvals. It ensures you receive everything in real time—securely and without any delays. This keeps your process smooth, accurate, and fully protected from start to finish.
"
  }
  ,
  {
    objection:"“I want info via email first.",
    rebuttal:  "Absolutely—we respect that. First, we need to confirm key details to make sure the offer we send is real and accurate. Once that’s done, your personalized loan options will be delivered straight to your inbox—secure, tailored, and ready for review….
"
  }
  ,
  {
    objection:"“I don’t have an email.",
    rebuttal:  "No problem at all. If a trusted friend or family member has one we can use temporarily for your paperwork, great. If not, we’ll use a secure placeholder to keep your application moving forward with zero delay.
"
  }
  ,
  {
    objection:"“Why do you need my email?",
    rebuttal:  "That’s completely understandable. But what you’re missing isn’t a sales pitch—it’s a real conversation that could lead to a better rate, faster approval, or bigger savings. It’s free, fast, and handled by experts who are here to help—not pressure. When people hear what’s actually available to them, they’re glad they took the call.
"
  }
  ,
  {
    objection:"“Doesn’t Want to Talk to Loan Specialist",
    rebuttal:  "That’s completely understandable. But what you’re missing isn’t a sales pitch—it’s a real conversation that could lead to a better rate, faster approval, or bigger savings. It’s free, fast, and handled by experts who are here to help—not pressure. When people hear what’s actually available to them, they’re glad they took the call.
"
  },
    {
    objection:"Handled by Closer",
    rebuttal:  "I see here that you spoke with our Senior Loan Advisor and he/she was assisting you with the program. In order for us to provide you the best assistance, I will connect you with that Senior Advisor. His/her name is (SA NAME). Please stay on the line while I connect you
"
  }
];

const searchInput = document.getElementById("searchInput");
const results = document.getElementById("results");

searchInput.addEventListener("input", () => {
  const searchTerm = searchInput.value.toLowerCase();
  results.innerHTML = "";
  const filtered = data.filter(item =>
    item.objection.toLowerCase().includes(searchTerm) ||
    item.rebuttal.toLowerCase().includes(searchTerm)
  );
  filtered.forEach(item => {
    const div = document.createElement("div");
    div.classList.add("rebuttal");
    div.innerHTML = `<strong>${item.objection}</strong><p>${item.rebuttal}</p>`;
    results.appendChild(div);
  });
});
