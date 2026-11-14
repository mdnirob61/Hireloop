import {
    ArrowLeft,
    LockKeyhole,
    CreditCard,
    ChevronDown,
    Clock3,
} from "lucide-react";

const CheckoutPage = async ({ searchParams }: { searchParams: Promise<{ canceled?: string }> }) => {

    const { canceled } = await searchParams;

    if (canceled) {
        console.log(
            'Order canceled -- continue to shop around and check out when you\'re ready.'
        )
    }

    return (
        <div className="min-h-screen bg-[#09090b] text-white">

            <div className="mx-auto grid max-w-6xl gap-10 px-6 py-8 md:grid-cols-2 md:gap-16 lg:px-12">

                {/* Left Side */}
                <div>
                    <div className="mb-8 flex items-center gap-4">
                        <ArrowLeft size={18} className="text-gray-400" />
                        <div className="flex h-7 w-7 items-center justify-center rounded bg-[#252529]">
                            <LockKeyhole size={14} />
                        </div>
                    </div>

                    <p className="mb-3 text-[10px] font-semibold tracking-wider text-gray-500">
                        ORDER SUMMERY
                    </p>

                    <div className="my-6 border-t border-white/10" />

                    <div className="flex items-center justify-between">
                        <div>
                            <h2 className="text-sm font-medium">
                                Hireloop Pro Plan
                            </h2>
                            <p className="mt-1 text-[10px] text-gray-500">
                                Access to all features
                            </p>
                        </div>

                        <p className="text-xs font-semibold">
                            $20.00
                        </p>
                    </div>
                    <div className="my-6 border-t border-white/10" />
                    <div className="flex justify-between">
                        <h2 className="text-sm font-medium">Total</h2>
                        <p className="text-xs font-semibold">$20.00</p>
                    </div>
                </div>

                {/* Right Side */}
                <div>

                    {/* Link Payment */}
                    <button className="flex w-full items-center justify-center gap-2 rounded-md bg-[#00d47b] py-3 text-xs font-semibold text-black">
                        <span className="rounded-full bg-black px-1 text-[#00d47b]">
                            ↗
                        </span>
                        link
                        <span className="mx-2 h-4 border-l border-black/20" />
                        <span className="rounded bg-[#635bff] px-1.5 py-0.5 text-[9px] text-white">
                            VISA
                        </span>
                        <span>••4242</span>
                    </button>

                    {/* Divider */}
                    <div className="my-5 flex items-center gap-3">
                        <div className="h-px flex-1 bg-white/10" />
                        <span className="text-[10px] text-gray-500">OR</span>
                        <div className="h-px flex-1 bg-white/10" />
                    </div>

                    {/* Contact Information */}
                    <div className="mb-5">
                        <h3 className="mb-2 text-xs font-medium">
                            Contact information
                        </h3>

                        <label className="mb-1 block text-[10px] text-gray-500">
                            Email
                        </label>

                        <input
                            type="email"
                            placeholder="email@example.com"
                            className="w-full rounded-md border border-white/10 bg-[#19191d] px-3 py-2.5 text-xs outline-none placeholder:text-gray-600"
                        />
                    </div>

                    {/* Payment Method */}
                    <div>
                        <h3 className="mb-2 text-xs font-medium">
                            Payment method
                        </h3>

                        <div className="overflow-hidden rounded-md border border-white/10">

                            <div className="flex items-center gap-2 border-b border-white/10 bg-[#19191d] px-3 py-3 text-xs">
                                <CreditCard size={14} />
                                Card
                            </div>

                            <div className="space-y-3 p-3">

                                {/* Card Number */}
                                <div>
                                    <label className="mb-1 block text-[9px] text-gray-500">
                                        CARD INFORMATION
                                    </label>

                                    <div className="flex items-center rounded-md border border-white/10 bg-[#19191d] px-3">
                                        <input
                                            type="text"
                                            placeholder="1234 1234 1234 1234"
                                            className="w-full bg-transparent py-2.5 text-xs outline-none placeholder:text-gray-600"
                                        />
                                        <span className="text-[10px]">💳</span>
                                    </div>

                                    <div className="mt-1 grid grid-cols-2 gap-1">
                                        <input
                                            type="text"
                                            placeholder="MM / YY"
                                            className="rounded-md border border-white/10 bg-[#19191d] px-3 py-2.5 text-xs outline-none placeholder:text-gray-600"
                                        />

                                        <div className="flex items-center rounded-md border border-white/10 bg-[#19191d] px-3">
                                            <input
                                                type="text"
                                                placeholder="CVC"
                                                className="w-full bg-transparent text-xs outline-none placeholder:text-gray-600"
                                            />
                                            <Clock3 size={13} className="text-gray-500" />
                                        </div>
                                    </div>
                                </div>

                                {/* Cardholder Name */}
                                <div>
                                    <label className="mb-1 block text-[9px] text-gray-500">
                                        CARDHOLDER NAME
                                    </label>

                                    <input
                                        type="text"
                                        placeholder="Full name on card"
                                        className="w-full rounded-md border border-white/10 bg-[#19191d] px-3 py-2.5 text-xs outline-none placeholder:text-gray-600"
                                    />
                                </div>

                                {/* Country */}
                                <div>
                                    <label className="mb-1 block text-[9px] text-gray-500">
                                        COUNTRY OR REGION
                                    </label>

                                    <div className="relative">
                                        <select
                                            defaultValue="Bangladesh"
                                            className="w-full appearance-none rounded-md border border-white/10 bg-[#19191d] px-3 py-2.5 text-xs outline-none"
                                        >
                                            <option>Bangladesh</option>
                                            <option>United States</option>
                                            <option>United Kingdom</option>
                                            <option>India</option>
                                        </select>

                                        <ChevronDown
                                            size={14}
                                            className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Save Information */}
                    <div className="mt-3 flex gap-3 rounded-md border border-white/10 p-3">
                        <input type="checkbox" className="mt-0.5 accent-indigo-500" />

                        <div>
                            <p className="text-[10px] font-medium">
                                Save my information for faster checkout
                            </p>
                            <p className="mt-1 text-[9px] text-gray-500">
                                Pay securely on this site and everywhere Link is accepted.
                            </p>
                        </div>
                    </div>

                    {/* Pay Button */}
                    <form action="/api/checkout_sessions" method="POST">
                        <section>
                            <button type="submit" role="link"
                                className="mt-3 w-full rounded-md bg-[#0866df] py-3 text-xs font-semibold transition hover:bg-blue-600">
                                Checkout $20.00
                            </button>
                        </section>
                    </form>
                </div>
            </div>

            {/* Footer */}
            <footer className="mt-12 border-t border-white/10 py-8 text-center">
                <p className="text-[10px] text-gray-500">
                    Powered by Stripe
                </p>

                <div className="mt-3 flex justify-center gap-4 text-[9px] text-gray-500">
                    <span>Terms</span>
                    <span>Privacy</span>
                </div>
            </footer>
        </div>
    );
};

export default CheckoutPage;