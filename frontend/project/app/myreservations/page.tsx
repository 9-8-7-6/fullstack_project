import Image from "next/image";

const MyreservationsPage = () => {
    return (
        <main className="max-w-[1500px] mx-auto px-6 pb-6">
            <h1 className="mt-6 mb-2 text-2xl">My reservations</h1>
            
            <div>
                <div className="p-5 mt-4 grid grid-cols-4 gap-4 shadow-md border border-gray-300 rounded-xl">
                    <div className="col-span-1">
                        <div className="relative overflow-hidden aspect-square rounded-xl">
                            <Image
                                fill
                                src="/101.jpg"
                                className="hover:scale-110 object-cover transition h-full w-full"
                                alt="101"
                                />
                        </div>
                    </div>

                    <div className="col-span-3 md:col-span-3">
                        <h2 className="mb-4 text-xl">Property Name</h2>

                        <p className="mb-2"><strong>Check in date:</strong> 18/3/2024</p>
                        <p className="mb-2"><strong>Check out date:</strong> 20/3/2024</p>

                        <p className="mb-2"><strong>Number of nights:</strong> 2</p>
                        <p className="mb-2"><strong>Total price</strong> $200</p>

                        <div className="mt-6 inline-block cursor-pointer py-4 px-6 bg-project text-white rounded-xl">
                            Go to property
                        </div>
                    </div>
                </div>

                <div className="p-5 mt-4 grid grid-cols-4 gap-4 shadow-md border border-gray-300 rounded-xl">
                    <div className="col-span-1">
                        <div className="relative overflow-hidden aspect-square rounded-xl">
                            <Image
                                fill
                                src="/101.jpg"
                                className="hover:scale-110 object-cover transition h-full w-full"
                                alt="101"
                                />
                        </div>
                    </div>

                    <div className="col-span-3 md:col-span-3">
                        <h2 className="mb-4 text-xl">Property Name</h2>

                        <p className="mb-2"><strong>Check in date:</strong> 18/3/2024</p>
                        <p className="mb-2"><strong>Check out date:</strong> 20/3/2024</p>

                        <p className="mb-2"><strong>Number of nights:</strong> 2</p>
                        <p className="mb-2"><strong>Total price</strong> $200</p>

                        <div className="mt-6 inline-block cursor-pointer py-4 px-6 bg-project text-white rounded-xl">
                            Go to property
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
export default MyreservationsPage;