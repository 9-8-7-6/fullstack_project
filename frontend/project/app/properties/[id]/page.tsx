import Image from "next/image";
import ReservationSidebar from "@/app/components/properties/ReservatuibSidebar";

const PropertyDetailPage = () => {
    return (
        <main className="max-w-[1500px] mx-auto px-6 pb-6">
            <div className="w-full h-[64vh] mb-4 overflow-hidden rounded-xl relative">
                <Image
                    fill
                    src='/101.jpg'
                    className="object-cover w-full h-full"
                    alt='101'
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                <div className="py-6 pr-6 col-span-3">
                    <h1 className="mb-4 text-4xl">Property name</h1>

                    <span className="mb-6 block text-lg text-gray-600">
                        4 guests - 2 bedrooms - 1 bathroom 
                    </span>
                    
                    <hr />
                    
                    <div className="py-6 flex items-center space-x-4">
                        <Image 
                            src="/buyer1.jpg"
                            width={50}
                            height={50}
                            className="rounded-full"
                            alt="The User Name"
                        />
                        <p><strong>Vito Lin</strong> is your host</p>
                    </div>

                    <hr />

                    <p className="mt-6 text-lg">
                        sadjaijsiojsadjaijsiojsadjaijsiojsadjaijsiojsadjaijsiojsadjaijs
                        iojsadjaijsiojsadjaijsiojsadjaijsiojsadjaijsiojsadjaijsiojsadjai
                        jsiojsadjaijsiojsadjaijsiojsadjaijsioj
                    </p>
                </div>

                <ReservationSidebar/>
            </div>
        </main>
    )
}

export default PropertyDetailPage;