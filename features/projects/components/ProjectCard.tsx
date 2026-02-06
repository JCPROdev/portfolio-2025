"use client";

import { Project } from "../data";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

import proy1 from "@/images/image1.png";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  if (!project) return null;
  return (
    <Card className="overflow-hidden h-full">
      <div className="relative aspect-video bg-gray-200 overflow-hidden">
        <Image
          src={project?.image ?? proy1}
          alt={project?.title ?? "Project image"}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="flex space-x-4">
            <Button size="sm" className="bg-white hover:bg-gray-100">
              <ExternalLink className="w-4 h-4" />
              Ver Demo
            </Button>

            <Button
              size="sm"
              variant="outline"
              className="bg-transparent border-white hover:bg-white hover:text-gray-900"
            >
              <Github className="w-4 h-4 mr-2" />
              Código
            </Button>
          </div>
        </div>

        <div className="absolute top-4 left-4">
          <Badge className="bg-indigo-700 text-white">Destacado</Badge>
        </div>

        <div className="absolute top-4 right-4">
          <Badge variant={"secondary"}>{project.category}</Badge>
        </div>
      </div>

      <CardContent className="p-6">
        <h2 className="font-bold text-xl mb-3 group-hover:text-indigo-600 transition-colors">
          {project.title}
        </h2>
        <p className="text-gray-600 mb-4 leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          <Badge variant="outline" className="text-sm">
            Next.js
          </Badge>
          <Badge variant="outline" className="text-sm">
            React
          </Badge>
          <Badge variant="outline" className="text-sm">
            Tailwind CSS
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
