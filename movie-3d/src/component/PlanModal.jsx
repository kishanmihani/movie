export default function PlanModal({ plan, onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">

      {/* MODAL BOX */}
      <div className="relative w-[95%] max-w-lg rounded-2xl bg-[#0a1a4a] p-6 md:p-8 text-white shadow-xl">

        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="absolute top-4 right-5 text-3xl text-gray-300 hover:text-white"
        >
          ×
        </button>

        {/* HEADER */}
        <div className="mb-6">
          <h2 className="text-2xl md:text-3xl font-bold">{plan.name} Plan</h2>
          <p className="mt-2 text-xl text-blue-400 font-semibold">
            {plan.price}
          </p>
        </div>

        {/* FEATURES */}
        <div className="space-y-3 mb-8">
          {plan.features.map((feature, index) => (
            <div
              key={index}
              className="flex items-start gap-3 text-sm md:text-base"
            >
              <span className="text-green-400 text-lg">✔</span>
              <span className="text-gray-200">{feature}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <button
          className="w-full rounded-lg bg-blue-600 hover:bg-blue-700 py-3 text-lg font-semibold transition"
          onClick={() => console.log("Proceed to payment:", plan.id)}
        >
          Proceed to Payment
        </button>

        {/* FOOTER NOTE */}
        <p className="mt-4 text-xs text-gray-400 text-center">
          Cancel anytime. No hidden charges.
        </p>
      </div>
    </div>
  );
}
