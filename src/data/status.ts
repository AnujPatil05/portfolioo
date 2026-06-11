export type StatusCard = {
  label: string;
  value: string;
  detail?: string;
  isActive?: boolean;
};

export const statusCards: StatusCard[] = [
  {
    label: 'Previous Role',
    value: 'SDE Intern @ Codologs',
    detail: 'Spring Boot microservices · production backend',
    isActive: false,
  },
  {
    label: 'Current Build',
    value: 'CodeEcoScan ',
    detail: 'Multi-language support, improved AST engine',
    isActive: false,
  },
  {
    label: 'Currently Exploring',
    value: 'AI evaluation + retrieval quality',
    detail: 'RAGAS, calibration research, LoRA ablations',
    isActive: false,
  },
  {
    label: 'Available From',
    value: 'Today...',
    detail: 'Backend · Platform · AI infra ·  Mumbai',
    isActive: false,
  },
];
