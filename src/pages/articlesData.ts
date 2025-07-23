export type Article = {
  slug: string
  title: string
  date: string
  category: string
  excerpt: string
  content: string
}

export const articles: Article[] = [
  {
    slug: "product-vision",
    title: "Shaping a Product Vision",
    date: "10 May 2024",
    category: "Product",
    excerpt:
      "Practical ways to craft a vision that guides your team and excites stakeholders.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod ullamcorper metus, ac ultricies justo auctor sed. Curabitur vel turpis in lorem mollis commodo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;",
  },
  {
    slug: "modern-stack",
    title: "Picking a Modern Tech Stack",
    date: "22 Apr 2024",
    category: "Tech",
    excerpt:
      "Choosing the right tools for scalability without overcomplicating things.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod ullamcorper metus, ac ultricies justo auctor sed. Curabitur vel turpis in lorem mollis commodo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;",
  },
  {
    slug: "career-growth",
    title: "Planning Your Career Growth",
    date: "01 Apr 2024",
    category: "Career",
    excerpt:
      "Strategies to map out your professional journey and stay motivated.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod ullamcorper metus, ac ultricies justo auctor sed. Curabitur vel turpis in lorem mollis commodo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;",
  },
  {
    slug: "work-life",
    title: "Balancing Work and Life",
    date: "15 Mar 2024",
    category: "Life",
    excerpt:
      "Keeping productivity high without sacrificing your well-being.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod ullamcorper metus, ac ultricies justo auctor sed. Curabitur vel turpis in lorem mollis commodo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;",
  },
]
