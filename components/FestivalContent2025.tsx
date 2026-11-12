import Image from "next/image";
import Heading from "@/components/ui/Heading";

const FestivalContent2025 = () => {
  return (
    <div className="space-y-4">
      <Heading level={2}>Festivalen 2025</Heading>
      <p>Mer info kommer snart!</p>
      <div className="flex justify-center pt-2">
        <Image
          className="rounded-2xl shadow-card"
          src="/festival24/new-cat-festival.jpg"
          alt="Gott snack festival"
          width={400}
          height={225}
        />
      </div>
    </div>
  );
};

export default FestivalContent2025;
