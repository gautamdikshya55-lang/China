import Image from "next/image";

export default function HeroBanner() {
  return (
    <section className="w-full">
      <div
        className="
          relative w-full
          h-[160px]
          sm:h-[200px]
          md:h-[233px]
          lg:h-[260px]
          overflow-hidden
        "
      >
        <Image
          src="/banner1.png"
          alt="Hero Banner"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </div>
    </section>
  );
}
