"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";

interface ProjectCardProps {
  year: string;
  title: string;
  description: string;
  role: string;
  deliverables: string;
  company: string;
  link: string;
  images: { src: string; alt: string }[];
}

const ProjectCard = ({
  year,
  title,
  description,
  role,
  deliverables,
  company,
  link,
  images,
}: ProjectCardProps) => (
  <div className="flex flex-col">
    <div className="md:sticky md:top-0 md:w-1/2 py-8">
      <div className="flex flex-col space-y-4 md:pr-8">
        <Badge className="w-fit" variant="secondary">
          {year}
        </Badge>
        <div className="scroll-m-20 text-2xl font-semibold tracking-tight">
          {title}
        </div>
        <div className="leading-relaxed text-muted-foreground">
          {description}
        </div>
        <div className="details flex flex-col space-y-2 divide-y">
          <div className="flex justify-between py-2">
            <span className="text-muted-foreground">Role</span>
            <span className="">{role}</span>
          </div>
          <div className="flex justify-between py-2">
            <span className="text-muted-foreground">Deliverables</span>
            <span className="">{deliverables}</span>
          </div>
          <div className="flex justify-between py-2">
            <span className="text-muted-foreground">Company</span>
            <span className="">{company}</span>
          </div>
          <div className="flex justify-between py-2">
            <span className="text-muted-foreground">Visit Site</span>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500"
            >
              -&gt;
            </a>
          </div>
        </div>
      </div>
    </div>
    <div className="flex flex-col gap-4 md:w-1/2 ml-auto h-fit justify-start md:mt-[-470px]">
      {images.map((img, index) => (
        <div key={index}>
          <Image
            className="rounded-lg"
            src={img.src}
            alt={img.alt}
            width={500}
            height={300}
          />
        </div>
      ))}
    </div>
  </div>
);

export default function RecentProjects() {
  const projects = [
    {
      year: "2024",
      title: "Evoke - Premium Agency/SaaS Website Template",
      description: `Evoke is a Framer Template made for digital marketing agencies and SaaS businesses. It features multiple pages, and tons of unique sections to help build your new website. 
                    It's built to help you showcase your business's services or products, your past work, and gives your users an easy way to get in touch with you through the Calendly embed.`,
      role: "Web Designer",
      deliverables: "Web Design, Branding",
      company: "Wize Templates",
      link: "https://evoketemplate.framer.website",
      images: [
        {
          src: "https://framerusercontent.com/images/1mmewAvBFU9a5XFIcaDMfJ9bL4.webp",
          alt: "Project Image 1",
        },
        {
          src: "https://framerusercontent.com/images/nAEM9eJRPH1xUisqOVQNgp0L1HE.webp",
          alt: "Project Image 2",
        },
        {
          src: "https://framerusercontent.com/images/DCKbREeG6b8J6GP4d0puSmwgJ4.webp",
          alt: "Project Image 3",
        },
      ],
    },
    {
      year: "2024",
      title: "Evoke - Premium Agency/SaaS Website Template",
      description: `Evoke is a Framer Template made for digital marketing agencies and SaaS businesses. It features multiple pages, and tons of unique sections to help build your new website. 
                    It's built to help you showcase your business's services or products, your past work, and gives your users an easy way to get in touch with you through the Calendly embed.`,
      role: "Web Designer",
      deliverables: "Web Design, Branding",
      company: "Wize Templates",
      link: "https://evoketemplate.framer.website",
      images: [
        {
          src: "https://framerusercontent.com/images/1mmewAvBFU9a5XFIcaDMfJ9bL4.webp",
          alt: "Project Image 1",
        },
        {
          src: "https://framerusercontent.com/images/nAEM9eJRPH1xUisqOVQNgp0L1HE.webp",
          alt: "Project Image 2",
        },
        {
          src: "https://framerusercontent.com/images/DCKbREeG6b8J6GP4d0puSmwgJ4.webp",
          alt: "Project Image 3",
        },
      ],
    },
    {
      year: "2024",
      title: "Evoke - Premium Agency/SaaS Website Template",
      description: `Evoke is a Framer Template made for digital marketing agencies and SaaS businesses. It features multiple pages, and tons of unique sections to help build your new website. 
                    It's built to help you showcase your business's services or products, your past work, and gives your users an easy way to get in touch with you through the Calendly embed.`,
      role: "Web Designer",
      deliverables: "Web Design, Branding",
      company: "Wize Templates",
      link: "https://evoketemplate.framer.website",
      images: [
        {
          src: "https://framerusercontent.com/images/1mmewAvBFU9a5XFIcaDMfJ9bL4.webp",
          alt: "Project Image 1",
        },
        {
          src: "https://framerusercontent.com/images/nAEM9eJRPH1xUisqOVQNgp0L1HE.webp",
          alt: "Project Image 2",
        },
        {
          src: "https://framerusercontent.com/images/DCKbREeG6b8J6GP4d0puSmwgJ4.webp",
          alt: "Project Image 3",
        },
      ],
    },
  ];

  return (
    <div>
      <div className="flex items-center space-x-4 py-8">
        <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          Recent projects
        </h2>
      </div>
      <div className="">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
}
