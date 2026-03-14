import React from "react";

const testimonials = [
  {
    name: "Mr. ",
    company: "xyz",
    text: "Yugantar developers and their team is totally dedicated towards giving at most attention to our requirements and gave total satisfaction with transparent process of sales of genuine homes",
  },
  {
    name: "Mr. ",
    company: "xyz",
    text: 'We invested in Yugantar Developers because of the location advantage. We are proud to be associated with the "Yugantar Family" and their commitment towards project completion before the committed deadline.',
  },
];

const TestimonialSection = () => {
  return (
    <section className="bg-muted/30 py-16 px-6">
      <h2 className="text-center text-3xl md:text-4xl font-bold text-primary mb-12">Testimonials</h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        {testimonials.map(({ name, company, text }, i) => (
          <div
            key={i}
            className="bg-card rounded-lg shadow-lg relative p-8 text-foreground border border-border"
          >
            {/* Label */}
            <div className="absolute -top-8 left-0 bg-primary text-primary-foreground px-6 py-3 rounded-tr-3xl rounded-br-3xl font-semibold leading-snug max-w-[230px]">
              <p className="text-sm font-bold uppercase tracking-wider">{name}</p>
              <p className="text-xs mt-1 text-primary-foreground/80">{company}</p>
              {/* Triangle Pointer */}
              <div className="absolute -bottom-5 left-0 w-0 h-0 border-t-[20px] border-t-primary border-r-[20px] border-r-transparent"></div>
            </div>

            <p className="text-base leading-relaxed mt-4 italic font-body">"{text}"</p>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-14">
        <button className="bg-gradient-warm text-secondary-foreground font-bold rounded-md px-10 py-3 uppercase tracking-wider text-sm hover:opacity-90 transition-opacity">
          Read More
        </button>
      </div>
    </section>
  );
};

export default TestimonialSection;
