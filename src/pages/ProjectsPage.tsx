import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, FolderGit2, Trash2, Users } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SEO } from "@/components/SEO";
import { useStore } from "@/store/useStore";
import { useTranslation } from "@/hooks/useTranslation";
import type { Project } from "@/data/initialData";

import { formatText } from "@/i18n";

function ProjectDetailModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.92, opacity: 0, y: 30 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.92, opacity: 0, y: 30 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="bg-surface border border-white/[0.08] rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-2xl"
      >
        <div className="relative aspect-video">
          <img
            src={project.cover}
            alt={project.title}
            className="w-full h-full object-cover rounded-t-2xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-t-2xl" />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2.5 bg-black/50 backdrop-blur-sm rounded-full text-white hover:bg-black/70 transition-all"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="p-8">
          <h2 className="font-display text-2xl font-bold text-textPrimary mb-3 tracking-tight">
            {project.title}
          </h2>
          <p className="text-textSecondary leading-relaxed mb-7">
            {project.description}
          </p>

          <div className="mb-7">
            <h3 className="text-sm font-semibold text-textPrimary mb-3 uppercase tracking-wider opacity-70">{t.projects.techStack}</h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3.5 py-1.5 bg-primary/[0.08] text-primary text-sm rounded-lg font-medium border border-primary/[0.1]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-sm font-semibold text-textPrimary mb-3 uppercase tracking-wider opacity-70 flex items-center gap-2">
              <Users className="w-4 h-4" />
              {t.projects.members}
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.members.map((member) => (
                <span
                  key={member}
                  className="px-3.5 py-1.5 bg-white/[0.04] text-textSecondary text-sm rounded-lg border border-white/[0.04]"
                >
                  {member}
                </span>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between border-t border-white/[0.04] pt-5">
            <span className="text-textMuted text-sm">{project.date}</span>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-primary to-secondary rounded-xl text-white text-sm font-semibold hover:shadow-lg hover:shadow-primary/20 transition-all"
            >
              <ExternalLink className="w-4 h-4" />
              {t.projects.viewProject}
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function ProjectsPage() {
  const { projects, removeProject } = useStore();
  const { t } = useTranslation();
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null);

  return (
    <div className="min-h-screen">
      <SEO
        title={t.seo.projects.title}
        description={t.seo.projects.description}
        keywords={t.seo.projects.keywords}
        canonical="/projects"
      />
      <section className="pt-28 md:pt-36 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-20">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/[0.06] text-accent text-sm font-medium mb-6 border border-accent/[0.1]">
              <FolderGit2 className="w-4 h-4" />
              {t.projects.badge}
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-textPrimary mb-4 tracking-tight">
              {t.projects.title}{" "}
              <span className="gradient-text-static">{t.projects.titleHighlight}</span>
            </h1>
            <p className="text-textSecondary max-w-xl mx-auto text-balance">
              {t.projects.subtitle}
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects.map((project, index) => (
              <AnimatedSection key={project.id} delay={index * 0.08}>
                <div className="glass-card rounded-2xl overflow-hidden group gradient-border-hover transition-all duration-500 hover:-translate-y-1 h-full flex flex-col">
                  <div
                    className="aspect-video overflow-hidden cursor-pointer relative"
                    onClick={() => setSelectedProject(project)}
                  >
                    <img
                      src={project.cover}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-5 flex-1 flex flex-col">
                    <div className="flex items-start justify-between mb-2">
                      <h3
                        className="font-semibold text-textPrimary text-lg cursor-pointer hover:text-primary transition-colors duration-300 tracking-tight"
                        onClick={() => setSelectedProject(project)}
                      >
                        {project.title}
                      </h3>
                      <button
                        onClick={() => removeProject(project.id)}
                        className="p-1.5 text-textMuted hover:text-red-400 opacity-0 group-hover:opacity-100 transition-all hover:bg-red-400/[0.08] rounded-lg"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                    <p className="text-textSecondary text-sm line-clamp-2 mb-4 flex-1 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.techStack.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="text-xs bg-primary/[0.06] text-primary px-2.5 py-1 rounded-lg border border-primary/[0.08]"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.techStack.length > 3 && (
                        <span className="text-xs text-textMuted px-2 py-1">
                          +{project.techStack.length - 3}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center justify-between pt-4 border-t border-white/[0.04]">
                      <div className="flex items-center gap-1.5 text-xs text-textMuted">
                        <Users className="w-3 h-3" />
                        {formatText(t.projects.participatedCount, { count: project.members.length })}
                      </div>
                      <span className="text-textMuted text-xs">{project.date}</span>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {projects.length === 0 && (
            <AnimatedSection className="text-center py-24">
              <FolderGit2 className="w-16 h-16 text-textMuted mx-auto mb-4 opacity-40" />
              <p className="text-textSecondary">{t.projects.empty}</p>
            </AnimatedSection>
          )}
        </div>
      </section>

      <AnimatePresence>
        {selectedProject && (
          <ProjectDetailModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
