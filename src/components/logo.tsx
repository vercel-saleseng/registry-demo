import Image from "next/image";

export function Logo() {
  return (
    <div className="flex items-center gap-2">
      <Image
        height={32}
        width={239}
        src="https://9xunyj9nbtcqjdrd.public.blob.vercel-storage.com/lumon-bnmDHU0WvLZp4fEIo7pYFRxdNkWHNi.png"
        alt="Logo"
        className="px-2 py-4"
      />
    </div>
  );
}
