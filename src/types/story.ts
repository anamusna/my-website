export interface StoryChapter {
  id: string;
  title: string;
  subtitle?: string;
  content: string;
  image?: string;
  imageAlt?: string;
  readTime: number;
  order: number;
  tags: string[];
  summary: string;
  date: string;
  location?: string;
  keyMoments?: string[];
  lessons?: string[];
  author?: {
    name: string;
    avatar: string;
  };
}

export interface StoryMetadata {
  title: string;
  subtitle: string;
  description: string;
  coverImage: string;
  totalReadTime: number;
  chapterCount: number;
  author: {
    name: string;
    avatar: string;
    bio: string;
  };
  publishedDate: string;
  lastUpdated: string;
  tags: string[];
}

export interface Story {
  metadata: StoryMetadata;
  chapters: StoryChapter[];
}
