import { create } from "zustand";
import { persist } from "zustand/middleware";
import {
  TeamMember,
  Work,
  Project,
  MediaItem,
  initialTeamMembers,
  initialWorks,
  initialProjects,
  initialMedia,
} from "@/data/initialData";

interface AppState {
  teamMembers: TeamMember[];
  works: Work[];
  projects: Project[];
  media: MediaItem[];
  addTeamMember: (member: Omit<TeamMember, "id">) => void;
  removeTeamMember: (id: string) => void;
  addWork: (work: Omit<Work, "id">) => void;
  removeWork: (id: string) => void;
  addProject: (project: Omit<Project, "id">) => void;
  removeProject: (id: string) => void;
  addMedia: (mediaItem: Omit<MediaItem, "id">) => void;
  removeMedia: (id: string) => void;
}

const generateId = () => Math.random().toString(36).substring(2, 9);

export const useStore = create<AppState>()(
  persist(
    (set) => ({
      teamMembers: initialTeamMembers,
      works: initialWorks,
      projects: initialProjects,
      media: initialMedia,

      addTeamMember: (member) =>
        set((state) => ({
          teamMembers: [...state.teamMembers, { ...member, id: generateId() }],
        })),

      removeTeamMember: (id) =>
        set((state) => ({
          teamMembers: state.teamMembers.filter((m) => m.id !== id),
        })),

      addWork: (work) =>
        set((state) => ({
          works: [...state.works, { ...work, id: generateId() }],
        })),

      removeWork: (id) =>
        set((state) => ({
          works: state.works.filter((w) => w.id !== id),
        })),

      addProject: (project) =>
        set((state) => ({
          projects: [...state.projects, { ...project, id: generateId() }],
        })),

      removeProject: (id) =>
        set((state) => ({
          projects: state.projects.filter((p) => p.id !== id),
        })),

      addMedia: (mediaItem) =>
        set((state) => ({
          media: [...state.media, { ...mediaItem, id: generateId() }],
        })),

      removeMedia: (id) =>
        set((state) => ({
          media: state.media.filter((m) => m.id !== id),
        })),
    }),
    {
      name: "dream-of-youth-storage",
    }
  )
);
