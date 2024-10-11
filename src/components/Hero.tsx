import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

import Link from "next/link";

const Hero = () => {
  return (
    <div className="flex flex-col space-y-8 py-16">
      <div className="flex items-center space-x-4">
        <Avatar>
          <AvatarImage src="/prof.png" alt="Matt Biehl" />
        </Avatar>
        <div className="flex flex-col gap-1">
          <h3 className="font-bold">Matt Biehl</h3>
          <div className="flex items-center space-x-2">
            <div className="h-3 w-3 rounded-full bg-green-500"></div>
            <p className="text-sm text-gray-500">
              Available for freelance work
            </p>
          </div>
        </div>
      </div>
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Elevate your online presence with our customizable portfolio template
        tailored for freelancers.
      </h1>
      <div className="flex max-w-xl flex-col space-y-8">
        <p className="text-lg leading-relaxed text-muted-foreground">
          Present your skills, experience, and projects in a visually compelling
          way to captivate potential clients and stand out in your field.
        </p>
        <div className="flex space-x-4">
          <Link href="./get-started">
            <Button>Get Started</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
