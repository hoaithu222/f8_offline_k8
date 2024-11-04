import Image from "next/image";

export default function HomePage() {
  return (
    <div className="p-14 text-center bg-purple-200 ">
      <div className="flex flex-col items-center">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-semibold">
            Học tập hiệu quả với bản đồ tư duy
          </h1>
          <button className="px-8 py-4 text-white bg-blue-500 rounded-full mt-8 text-lg">
            Sử dụng miễn phí
          </button>
        </div>
        <div className="flex items-center justify-center mt-8">
          <Image
            src="/so-do-tu-duy.webp"
            alt=""
            width={1200}
            height={630}
            className="w-5/4"
          />
        </div>
      </div>
      <div className="flex justify-between items-center mt-12">
        <div className="w-1/3 p-4">
          <h2 className="text-2xl uppercase font-semibold relative mb-4">
            Dễ sử dụng
          </h2>
          <p className="text-lg text-gray-100">
            FWR blocks bring in an air of fresh design with their creative
            layouts and blocks, which are easily customizable.
          </p>
        </div>
        <div className="w-1/3 p-4">
          <h2 className="text-2xl uppercase font-semibold relative mb-4">
            Không giới hạn
          </h2>
          <p className="text-lg text-gray-100">
            FWR blocks are the cleanest pieces of HTML blocks, which are built
            with utmost care to quality and usability.
          </p>
        </div>
        <div className="w-1/3 p-4">
          <h2 className="text-2xl uppercase font-semibold relative mb-4">
            Quản lý và chia sẻ
          </h2>
          <p className="text-lg text-gray-100">
            FWR blocks is a perfect tool for designers, developers and agencies
            looking to create stunning websites in no time.
          </p>
        </div>
      </div>
    </div>
  );
}
