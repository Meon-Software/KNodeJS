import React from 'react';

export interface NavItem {
  label: string;
  path: string;
}

export interface Article {
  id: string;
  title: string;
  summary: string;
  tags: string[];
  content?: string; // Adicionado campo para conteúdo completo do artigo
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  icon: React.ReactElement<{ className?: string }>;
}
