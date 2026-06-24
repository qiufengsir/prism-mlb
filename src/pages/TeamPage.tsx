import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Plus,
  X,
  Github,
  Mail,
  Globe,
  Trash2,
  User,
  Briefcase,
  FileText,
  Tag,
  Users,
  Sparkles,
} from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SEO } from "@/components/SEO";
import { useStore } from "@/store/useStore";
import { BRAND } from "@/data/brand";
import type { TeamMember } from "@/data/initialData";

function TeamCard({ member, onDelete }: { member: TeamMember; onDelete: (id: string) => void }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      layout
      className="glass-card rounded-2xl overflow-hidden gradient-border-hover transition-all duration-500 group"
    >
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="relative">
            <div className="w-20 h-20 rounded-2xl overflow-hidden ring-2 ring-white/[0.06] relative">
              {member.avatar ? (
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-primary/30 to-secondary/30 flex items-center justify-center">
                  <User className="w-8 h-8 text-white/40" />
                </div>
              )}
            </div>
            <div className="absolute -bottom-1 -right-1 w-7 h-7 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center ring-2 ring-background">
              <Sparkles className="w-3 h-3 text-white" />
            </div>
          </div>
          <button
            onClick={() => onDelete(member.id)}
            className="p-2 text-textMuted hover:text-red-400 opacity-0 group-hover:opacity-100 transition-all duration-200 hover:bg-red-400/[0.08] rounded-lg"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>

        <h3 className="font-display font-bold text-lg text-textPrimary mb-1 tracking-tight">
          {member.name}
        </h3>
        <p className="text-primary text-sm font-medium mb-3 bg-primary/[0.06] inline-block px-2.5 py-0.5 rounded-full">
          {member.role}
        </p>

        <p className="text-textSecondary text-sm leading-relaxed mb-4 line-clamp-2">
          {member.bio}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {member.skills.slice(0, 3).map((skill) => (
            <span
              key={skill}
              className="text-xs bg-white/[0.04] border border-white/[0.04] text-textSecondary px-2.5 py-1 rounded-lg"
            >
              {skill}
            </span>
          ))}
          {member.skills.length > 3 && (
            <span className="text-xs text-textMuted px-2 py-1">
              +{member.skills.length - 3}
            </span>
          )}
        </div>

        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-primary text-sm font-medium hover:underline underline-offset-4 transition-all"
        >
          {isExpanded ? "收起详情" : "查看详情"}
        </button>
      </div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 border-t border-white/[0.04] pt-5">
              <div className="flex flex-wrap gap-3">
                {member.social.github && (
                  <a
                    href={member.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-textSecondary hover:text-primary transition-colors text-sm bg-white/[0.03] px-3 py-1.5 rounded-lg"
                  >
                    <Github className="w-4 h-4" />
                    GitHub
                  </a>
                )}
                {member.social.email && (
                  <a
                    href={`mailto:${member.social.email}`}
                    className="flex items-center gap-2 text-textSecondary hover:text-primary transition-colors text-sm bg-white/[0.03] px-3 py-1.5 rounded-lg"
                  >
                    <Mail className="w-4 h-4" />
                    邮箱
                  </a>
                )}
                {member.social.website && (
                  <a
                    href={member.social.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-textSecondary hover:text-primary transition-colors text-sm bg-white/[0.03] px-3 py-1.5 rounded-lg"
                  >
                    <Globe className="w-4 h-4" />
                    网站
                  </a>
                )}
              </div>
              <p className="text-textMuted text-xs mt-5">
                加入时间：{member.joinDate}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function AddMemberModal({
  isOpen,
  onClose,
  onAdd,
}: {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (member: Omit<TeamMember, "id">) => void;
}) {
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    avatar: "",
    bio: "",
    skills: "",
    github: "",
    email: "",
    website: "",
    joinDate: new Date().toISOString().split("T")[0],
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAdd({
      name: formData.name,
      role: formData.role,
      avatar:
        formData.avatar ||
        `https://ui-avatars.com/api/?name=${encodeURIComponent(formData.name)}&background=6366F1&color=fff&size=128`,
      bio: formData.bio,
      skills: formData.skills
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean),
      social: {
        github: formData.github || undefined,
        email: formData.email || undefined,
        website: formData.website || undefined,
      },
      joinDate: formData.joinDate,
    });
    setFormData({
      name: "",
      role: "",
      avatar: "",
      bio: "",
      skills: "",
      github: "",
      email: "",
      website: "",
      joinDate: new Date().toISOString().split("T")[0],
    });
    onClose();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: 20 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="glass-card-elevated rounded-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto"
      >
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                <Plus className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-display font-bold text-lg text-textPrimary">
                  添加成员
                </h3>
                <p className="text-textMuted text-xs">填写成员信息</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-textMuted hover:text-textPrimary transition-colors rounded-lg hover:bg-white/[0.04]"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-textSecondary mb-2">
                  <User className="w-4 h-4" />
                  姓名 *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-white/[0.03] border border-white/[0.08] rounded-xl text-textPrimary placeholder-textMuted focus:outline-none focus:border-primary/40 focus:bg-white/[0.05] transition-all text-sm"
                  placeholder="成员姓名"
                />
              </div>
              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-textSecondary mb-2">
                  <Briefcase className="w-4 h-4" />
                  角色 *
                </label>
                <input
                  type="text"
                  required
                  value={formData.role}
                  onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                  className="w-full px-4 py-3 bg-white/[0.03] border border-white/[0.08] rounded-xl text-textPrimary placeholder-textMuted focus:outline-none focus:border-primary/40 focus:bg-white/[0.05] transition-all text-sm"
                  placeholder="例如：设计师"
                />
              </div>
            </div>

            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-textSecondary mb-2">
                <FileText className="w-4 h-4" />
                个人简介 *
              </label>
              <textarea
                required
                rows={3}
                value={formData.bio}
                onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                className="w-full px-4 py-3 bg-white/[0.03] border border-white/[0.08] rounded-xl text-textPrimary placeholder-textMuted focus:outline-none focus:border-primary/40 focus:bg-white/[0.05] transition-all text-sm resize-none"
                placeholder="请输入个人简介"
              />
            </div>

            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-textSecondary mb-2">
                <Tag className="w-4 h-4" />
                技能标签（用逗号分隔）
              </label>
              <input
                type="text"
                value={formData.skills}
                onChange={(e) => setFormData({ ...formData, skills: e.target.value })}
                className="w-full px-4 py-3 bg-white/[0.03] border border-white/[0.08] rounded-xl text-textPrimary placeholder-textMuted focus:outline-none focus:border-primary/40 focus:bg-white/[0.05] transition-all text-sm"
                placeholder="React, TypeScript, UI设计"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-textSecondary mb-2 block">
                  GitHub（可选）
                </label>
                <input
                  type="url"
                  value={formData.github}
                  onChange={(e) => setFormData({ ...formData, github: e.target.value })}
                  className="w-full px-4 py-3 bg-white/[0.03] border border-white/[0.08] rounded-xl text-textPrimary placeholder-textMuted focus:outline-none focus:border-primary/40 transition-all text-sm"
                  placeholder="https://github.com/..."
                />
              </div>
              <div>
                <label className="text-sm font-medium text-textSecondary mb-2 block">
                  邮箱（可选）
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-white/[0.03] border border-white/[0.08] rounded-xl text-textPrimary placeholder-textMuted focus:outline-none focus:border-primary/40 transition-all text-sm"
                  placeholder="example@email.com"
                />
              </div>
            </div>

            <div className="pt-2 flex gap-3">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 px-4 py-3 border border-white/[0.08] rounded-xl text-textSecondary hover:bg-white/[0.03] transition-all text-sm font-medium"
              >
                取消
              </button>
              <button
                type="submit"
                className="flex-1 px-4 py-3 bg-gradient-to-r from-primary to-secondary rounded-xl text-white font-semibold hover:shadow-lg hover:shadow-primary/20 transition-all text-sm"
              >
                添加成员
              </button>
            </div>
          </form>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function TeamPage() {
  const { teamMembers, addTeamMember, removeTeamMember } = useStore();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <SEO
        title={`团队介绍 — ${BRAND.name}`}
        description={`认识 ${BRAND.name} 核心成员：AI Agent 驱动开发、全栈落地、视觉设计与产品顾问，从校园到职场的私人创意团队。`}
        keywords={`${BRAND.name}, Prism, 团队介绍, AI Agent, 成员`}
        canonical="/team"
      />
      <section className="pt-28 md:pt-36 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-20">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/[0.06] text-primary text-sm font-medium mb-6 border border-primary/[0.1]">
              <Users className="w-4 h-4" />
              我们的团队
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-textPrimary mb-4 tracking-tight">
              认识 <span className="gradient-text-static">{BRAND.name}</span>
            </h1>
            <p className="text-textSecondary max-w-2xl mx-auto text-balance mb-2">
              {BRAND.subtitle} — 每个人都是一束光，合在一起才能折射更多可能。
            </p>
            <p className="text-textMuted max-w-2xl mx-auto text-sm text-balance">
              我们从校园出发，在工作里继续以业余团队的方式创造。用 AI 提升效率，用作品证明能力，用真诚对待每一次合作。
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {teamMembers.map((member, index) => (
              <AnimatedSection key={member.id} delay={index * 0.08}>
                <TeamCard member={member} onDelete={removeTeamMember} />
              </AnimatedSection>
            ))}
          </div>

          {teamMembers.length === 0 && (
            <AnimatedSection className="text-center py-20">
              <Users className="w-16 h-16 text-textMuted mx-auto mb-4 opacity-50" />
              <p className="text-textSecondary">暂无团队成员</p>
            </AnimatedSection>
          )}
        </div>
      </section>

      <motion.button
        onClick={() => setIsModalOpen(true)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-r from-primary to-secondary rounded-2xl flex items-center justify-center shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all z-30"
      >
        <Plus className="w-6 h-6 text-white" />
      </motion.button>

      <AnimatePresence>
        {isModalOpen && (
          <AddMemberModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            onAdd={addTeamMember}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
