import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Play, ImageIcon, Film, Trash2 } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SEO } from "@/components/SEO";
import { useStore } from "@/store/useStore";
import { BRAND } from "@/data/brand";

function PhotoModal({
  photo,
  onClose,
}: {
  photo: { url: string; title: string };
  onClose: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-5xl max-h-[90vh]"
      >
        <img
          src={photo.url}
          alt={photo.title}
          className="max-w-full max-h-[85vh] object-contain rounded-xl"
        />
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 p-2 text-white/70 hover:text-white transition-colors"
        >
          <X className="w-6 h-6" />
        </button>
        <p className="text-center text-white/80 mt-4 text-lg font-medium">{photo.title}</p>
      </motion.div>
    </motion.div>
  );
}

function VideoModal({
  video,
  onClose,
}: {
  video: { url: string; title: string };
  onClose: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl"
      >
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 p-2 text-white/70 hover:text-white transition-colors"
        >
          <X className="w-6 h-6" />
        </button>
        <div className="aspect-video bg-black rounded-xl overflow-hidden ring-1 ring-white/[0.06]">
          <video
            src={video.url}
            controls
            autoPlay
            className="w-full h-full"
          />
        </div>
        <p className="text-center text-white/80 mt-4 text-lg font-medium">{video.title}</p>
      </motion.div>
    </motion.div>
  );
}

export function MediaPage() {
  const { media, removeMedia } = useStore();
  const [selectedPhoto, setSelectedPhoto] = useState<(typeof media)[0] | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<(typeof media)[0] | null>(null);

  const photos = media.filter((m) => m.type === "photo");
  const videos = media.filter((m) => m.type === "video");

  return (
    <div className="min-h-screen">
      <SEO
        title={`媒体库 — ${BRAND.name}`}
        description={`探索 ${BRAND.name} 的图片、视频与品牌资源。`}
        keywords={`${BRAND.name}, 媒体库, 图片, 视频`}
        canonical="/media"
      />
      <section className="pt-28 md:pt-36 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-20">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/[0.06] text-primary text-sm font-medium mb-6 border border-primary/[0.1]">
              <ImageIcon className="w-4 h-4" />
              媒体资源
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-textPrimary mb-4 tracking-tight">
              我们的 <span className="gradient-text-static">媒体库</span>
            </h1>
            <p className="text-textSecondary max-w-xl mx-auto text-balance">
              记录团队的美好瞬间，分享我们的故事
            </p>
          </AnimatedSection>

          {photos.length > 0 && (
            <div className="mb-20">
              <AnimatedSection className="flex items-center gap-3 mb-10">
                <div className="w-10 h-10 rounded-xl bg-primary/[0.08] flex items-center justify-center">
                  <ImageIcon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h2 className="font-display text-2xl font-bold text-textPrimary tracking-tight">
                    照片墙
                  </h2>
                  <span className="text-textMuted text-sm">共 {photos.length} 张</span>
                </div>
              </AnimatedSection>

              <div className="columns-2 sm:columns-3 lg:columns-4 gap-4 space-y-4">
                {photos.map((photo, index) => (
                  <motion.div
                    key={photo.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.03, duration: 0.5 }}
                    className="break-inside-avoid"
                  >
                    <div className="group relative rounded-2xl overflow-hidden cursor-pointer glass-card gradient-border-hover transition-all duration-500">
                      <img
                        src={photo.thumbnail}
                        alt={photo.title}
                        className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                        onClick={() => setSelectedPhoto(photo)}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                        <div className="p-4 w-full">
                          <p className="text-white text-sm font-medium truncate">
                            {photo.title}
                          </p>
                          <p className="text-white/60 text-xs mt-0.5">{photo.date}</p>
                        </div>
                      </div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          removeMedia(photo.id);
                        }}
                        className="absolute top-2.5 right-2.5 p-2 bg-black/50 backdrop-blur-sm rounded-lg text-white hover:text-red-400 opacity-0 group-hover:opacity-100 transition-all"
                      >
                        <Trash2 className="w-3 h-3" />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {videos.length > 0 && (
            <div>
              <AnimatedSection className="flex items-center gap-3 mb-10">
                <div className="w-10 h-10 rounded-xl bg-secondary/[0.08] flex items-center justify-center">
                  <Film className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <h2 className="font-display text-2xl font-bold text-textPrimary tracking-tight">
                    视频
                  </h2>
                  <span className="text-textMuted text-sm">共 {videos.length} 部</span>
                </div>
              </AnimatedSection>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {videos.map((video, index) => (
                  <AnimatedSection key={video.id} delay={index * 0.08}>
                    <div className="glass-card rounded-2xl overflow-hidden group gradient-border-hover transition-all duration-500 hover:-translate-y-1">
                      <div
                        className="aspect-video relative cursor-pointer overflow-hidden"
                        onClick={() => setSelectedVideo(video)}
                      >
                        <img
                          src={video.thumbnail}
                          alt={video.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                          <div className="w-16 h-16 rounded-full bg-white/15 backdrop-blur-md flex items-center justify-center group-hover:scale-110 group-hover:bg-white/25 transition-all duration-300 ring-1 ring-white/[0.1]">
                            <Play className="w-6 h-6 text-white ml-0.5 drop-shadow-lg" />
                          </div>
                        </div>
                      </div>
                      <div className="p-4 flex items-center justify-between">
                        <div>
                          <h3 className="text-textPrimary font-medium text-sm">
                            {video.title}
                          </h3>
                          <p className="text-textMuted text-xs mt-1">{video.date}</p>
                        </div>
                        <button
                          onClick={() => removeMedia(video.id)}
                          className="p-1.5 text-textMuted hover:text-red-400 opacity-0 group-hover:opacity-100 transition-all hover:bg-red-400/[0.08] rounded-lg"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          )}

          {media.length === 0 && (
            <AnimatedSection className="text-center py-24">
              <ImageIcon className="w-16 h-16 text-textMuted mx-auto mb-4 opacity-40" />
              <p className="text-textSecondary">暂无媒体内容</p>
            </AnimatedSection>
          )}
        </div>
      </section>

      <AnimatePresence>
        {selectedPhoto && (
          <PhotoModal
            photo={{ url: selectedPhoto.url, title: selectedPhoto.title }}
            onClose={() => setSelectedPhoto(null)}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {selectedVideo && (
          <VideoModal
            video={{ url: selectedVideo.url, title: selectedVideo.title }}
            onClose={() => setSelectedVideo(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
