import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Palette, Trash2 } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SEO } from "@/components/SEO";
import { useStore } from "@/store/useStore";
import { initialWorks } from "@/data/initialData";

const categories = ["全部", "设计", "摄影", "视频", "其他"];

function WorkDetailModal({
  work,
  onClose,
}: {
  work: (typeof initialWorks)[0];
  onClose: () => void;
}) {
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
            src={work.cover}
            alt={work.title}
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
          <span className="inline-block px-3.5 py-1.5 bg-secondary/[0.08] text-secondary text-sm font-medium rounded-full mb-4">
            {work.category}
          </span>
          <h2 className="font-display text-2xl font-bold text-textPrimary mb-3 tracking-tight">
            {work.title}
          </h2>
          <p className="text-textSecondary leading-relaxed mb-6">
            {work.description}
          </p>
          <div className="flex items-center justify-between text-sm text-textMuted border-t border-white/[0.04] pt-5">
            <span>创作者：{work.author}</span>
            <span>{work.date}</span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function WorksPage() {
  const { works, removeWork } = useStore();
  const [activeCategory, setActiveCategory] = useState("全部");
  const [selectedWork, setSelectedWork] = useState<(typeof works)[0] | null>(null);

  const filteredWorks =
    activeCategory === "全部"
      ? works
      : works.filter((w) => w.category === activeCategory);

  return (
    <div className="min-h-screen">
      <SEO
        title="作品集 — Dream of Youth"
        description="浏览 Dream of Youth 精选的设计与开发项目，发现创意与技术的完美融合。"
        keywords="Dream of Youth, 作品集, 设计, 开发, 项目展示"
        canonical="/works"
      />
      <section className="pt-28 md:pt-36 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-20">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/[0.06] text-secondary text-sm font-medium mb-6 border border-secondary/[0.1]">
              <Palette className="w-4 h-4" />
              创意展示
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-textPrimary mb-4 tracking-tight">
              我们的 <span className="gradient-text-static">作品集</span>
            </h1>
            <p className="text-textSecondary max-w-xl mx-auto text-balance">
              每一件作品都承载着我们的热情与创意
            </p>
          </AnimatedSection>

          <AnimatedSection className="flex flex-wrap justify-center gap-2.5 mb-14">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-gradient-to-r from-primary to-secondary text-white shadow-lg shadow-primary/15"
                    : "bg-white/[0.03] border border-white/[0.05] text-textSecondary hover:bg-white/[0.06] hover:text-textPrimary"
                }`}
              >
                {category}
              </button>
            ))}
          </AnimatedSection>

          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            <AnimatePresence mode="popLayout">
              {filteredWorks.map((work, index) => (
                <motion.div
                  key={work.id}
                  layout
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.92 }}
                  transition={{ duration: 0.3, delay: index * 0.04 }}
                >
                  <div className="glass-card rounded-2xl overflow-hidden group gradient-border-hover transition-all duration-500 hover:-translate-y-1">
                    <div
                      className="aspect-[4/3] overflow-hidden cursor-pointer relative"
                      onClick={() => setSelectedWork(work)}
                    >
                      <img
                        src={work.cover}
                        alt={work.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <div className="p-5">
                      <div className="flex items-start justify-between mb-2">
                        <span className="text-xs font-semibold text-secondary bg-secondary/[0.08] px-2.5 py-1 rounded-full uppercase tracking-wide">
                          {work.category}
                        </span>
                        <button
                          onClick={() => removeWork(work.id)}
                          className="p-1.5 text-textMuted hover:text-red-400 opacity-0 group-hover:opacity-100 transition-all hover:bg-red-400/[0.08] rounded-lg"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <h3
                        className="font-semibold text-textPrimary mb-2 cursor-pointer hover:text-primary transition-colors duration-300"
                        onClick={() => setSelectedWork(work)}
                      >
                        {work.title}
                      </h3>
                      <p className="text-textSecondary text-sm line-clamp-2 leading-relaxed">
                        {work.description}
                      </p>
                      <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/[0.04] text-xs text-textMuted">
                        <span>{work.author}</span>
                        <span>{work.date}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredWorks.length === 0 && (
            <AnimatedSection className="text-center py-24">
              <Palette className="w-16 h-16 text-textMuted mx-auto mb-4 opacity-40" />
              <p className="text-textSecondary">该分类下暂无作品</p>
            </AnimatedSection>
          )}
        </div>
      </section>

      <AnimatePresence>
        {selectedWork && (
          <WorkDetailModal
            work={selectedWork}
            onClose={() => setSelectedWork(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
