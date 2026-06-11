export type TimelineMilestone = {
  year: string;       // e.g. "2022", "Jan 2026"
  title: string;
  description: string;
  type: 'education' | 'project' | 'hackathon' | 'internship' | 'milestone';
};
