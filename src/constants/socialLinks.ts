import { Github, Linkedin, BriefcaseBusiness  } from "lucide-react";

export interface SocialLink {
  name: string;
  url: string;
  icon: React.ElementType;
}

export const SOCIAL_LINKS: SocialLink[] = [
  { name: 'GitHub', url: 'https://github.com/ha-ayoub', icon: Github },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/ayoub-hafdi/', icon: Linkedin },
  { name: 'Portfolio', url: 'https://tonportfolio.com', icon: BriefcaseBusiness  },
];