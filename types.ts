
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
  // content?: string; // Optional full content for a detail page
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  icon: React.ReactElement<{ className?: string }>;
}