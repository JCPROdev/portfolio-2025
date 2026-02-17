"use client";

import { Project } from "../data";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Card className="overflow-hidden h-full py-0 border-gray-200">
      <div className="relative aspect-video bg-gray-200 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          // Como optimizar el tamaño:
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="flex space-x-4">
            <Button
              size="sm"
              onClick={() => window.open(project.links.demo, "_blank")}
              className="bg-white hover:bg-gray-100 hover:cursor-pointer"
            >
              <ExternalLink className="w-4 h-4" />
              Ver Web
            </Button>

            <Button
              size="sm"
              variant="outline"
              onClick={() => window.open(project.links.github, "_blank")}
              className="bg-transparent border-white hover:bg-white hover:text-gray-900 hover:cursor-pointer"
              disabled={!project.links.github || project.links.github === "#"}
            >
              <Github className="w-4 h-4 mr-2" />
              Código
            </Button>
          </div>
        </div>

        {/* <div className="absolute top-4 left-4">
          <Badge className="bg-indigo-700 text-white">Destacado</Badge>
        </div> */}

        <div className="absolute top-4 right-4">
          <Badge className="bg-indigo-700 text-white">{project.category}</Badge>
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
          {project.tags.map((tag) => (
            <Badge
              key={tag}
              variant="outline"
              className="text-sm text-gray-600 border-gray-300 font-semibold"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
