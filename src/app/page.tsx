import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <MaxWidthWrapper>
        <div className="py-20 text-center flex flex-col items-center max-w-3xl">
          {/* Title */}
          <h1 className="text-4xl font-bold tracking-tight items-center max-w-3xl sm:text-6xl">
            Your market place for high quality{" "}
            <span className="text-blue-600">digital assets</span>.
          </h1>
          {/* Description */}
          <p className="mt-5 max-w-prose text-muted-foreground text-lg">
            Welcome to DigitalHippo. Every asset on our platform is verified by
            our team to ensure our highest quality standards.
          </p>

          {/* Browse Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 mt-5">
            <Link
              className={buttonVariants({ variant: "default" })}
              href={"/products"}
            >
              Browse Trending
            </Link>
            <Button variant="ghost">Our quality promise &rarr;</Button>
          </div>
        </div>

        {/* TODO: List Products */}
      </MaxWidthWrapper>
    </>
  );
}
