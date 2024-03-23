import Image from "next/image";

interface CategroiesProps {
    dataCategory: string;
    setCategory: (category:string) => void;
}

const Categories: React.FC<CategroiesProps> = ({
    dataCategory,
    setCategory
}) => {
    return (
        <>
            <div className="pt-3 cursor-pointer pb-6 flex items-center space-x-12">
                <div 
                    onClick={() => setCategory('Beach')}
                    className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${dataCategory == 'Beach' ? 'border-gray-800': 'border-white' } opacity-60 hover:border-gray-200 hover:opacity-100`}
                >
                    <Image
                        src="/icon_category_beach.jpg"
                        alt="Category - Beach"
                        width={20}
                        height={20}
                    />

                    <span className='text-xs'>Beach</span>
                </div>

                <div 
                    onClick={() => setCategory('Villas')}
                    className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${dataCategory == 'Villas' ? 'border-gray-800': 'border-white' } opacity-60 hover:border-gray-200 hover:opacity-100`}
                >
                    <Image
                        src="/icon_category_beach.jpg"
                        alt="Category - Beach"
                        width={20}
                        height={20}
                    />

                    <span className='text-xs'>Villas</span>
                </div>

                <div 
                    onClick={() => setCategory('Cabins')}
                    className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${dataCategory == 'Cabins' ? 'border-gray-800': 'border-white' } opacity-60 hover:border-gray-200 hover:opacity-100`}
                >
                    <Image
                        src="/icon_category_cabins.jpg"
                        alt="Category - Beach"
                        width={20}
                        height={20}
                    />

                    <span className='text-xs'>Cabins</span>
                </div>

                <div 
                    onClick={() => setCategory('Tiny homes')}
                    className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${dataCategory == 'Tiny homes' ? 'border-gray-800': 'border-white' } opacity-60 hover:border-gray-200 hover:opacity-100`}
                >
                    <Image
                        src="/icon_category_tiny.jpg"
                        alt="Category - Beach"
                        width={20}
                        height={20}
                    />

                    <span className='text-xs'>Tiny homes</span>
                </div>




            </div>
        </>
    )
}

export default Categories;