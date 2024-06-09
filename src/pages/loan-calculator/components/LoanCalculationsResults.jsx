export default function LoanCalculationsResults({ calculationsResult }) {
  const monthlyPayment = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "PKR",
  }).format(calculationsResult?.monthlyPayment);

  const totalInterest = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "PKR",
  }).format(calculationsResult?.totalInterest);

  const totalPayment = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "PKR",
  }).format(calculationsResult?.totalPayment);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3">
      <div className="border-e-0 border-b sm:border-b-0 sm:border-e border-gray-300 px-12 py-8 dark:border-zinc-800">
        <div className="flex flex-col items-center gap-2">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-badge-dollar-sign"
            >
              <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
              <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
              <path d="M12 18V6" />
            </svg>
          </span>
          <span className="font-semibold text-center whitespace-nowrap">Monthly Payment</span>
        </div>
        <div className="text-2xl text-center mt-5">{calculationsResult.monthlyPayment ? monthlyPayment : "---"}</div>
      </div>
      <div className="border-e-0 border-b sm:border-b-0 sm:border-e border-gray-300 px-12 py-8 dark:border-zinc-800">
        <div className="flex flex-col items-center gap-2">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-percent"
            >
              <line x1="19" x2="5" y1="5" y2="19" />
              <circle cx="6.5" cy="6.5" r="2.5" />
              <circle cx="17.5" cy="17.5" r="2.5" />
            </svg>
          </span>
          <span className="font-semibold text-center whitespace-nowrap">Total Interest</span>
        </div>
        <div className="text-2xl text-center mt-5">{calculationsResult.totalInterest ? totalInterest : "---"}</div>
      </div>
      <div className="px-12 py-8">
        <div className="flex flex-col items-center gap-2">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-credit-card"
            >
              <rect width="20" height="14" x="2" y="5" rx="2" />
              <line x1="2" x2="22" y1="10" y2="10" />
            </svg>
          </span>
          <span className="font-semibold text-center whitespace-nowrap">Total Payment</span>
        </div>
        <div className="text-2xl text-center mt-5">{calculationsResult.totalPayment ? totalPayment : "---"}</div>
      </div>
    </div>
  );
}
