export const FinalCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-secondary to-primary text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Take Control of Your Business?
        </h2>
        {/* <p className="text-xl mb-4 text-gray-100">
					Start managing comments, tracking engagement, and boosting your
					sales—all in one place.
				</p> */}
        <p className="text-xl mb-4 text-gray-100">
          Start for <strong>Free</strong> Today – Try Before You Decide!
        </p>
        <p className="text-xl mb-8 text-gray-100">
          <strong>No credit card required</strong>, No commitment.{" "}
          <strong>Just results</strong>.
        </p>
        <a
          target="_blank"
          href="https://forms.gle/D3yJZJ8kHRkAyvus7"
          className="transition-colors bg-white text-secondary py-3 px-6 rounded hover:bg-gray-100 text-lg"
        >
          Signup for Free
        </a>
      </div>
    </section>
  );
};
