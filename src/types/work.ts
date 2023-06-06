export type AIWorks = {
  page: {
    total_pages: number;
    current_page: number;
    has_pre: boolean;
    has_next: boolean;
  };
  data: Work[];
};

export type Work = {
  create_time: number;
  description: string;
  discordId: string;
  id: string;
  imageUrl: string;
  link: string;
  model: string;
  title: string;
  type: string;
  userId: string;
};
