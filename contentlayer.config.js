import { defineDocumentType, makeSource } from "contentlayer/source-files";
import remarkGfm from "remark-gfm";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

const fetch = require('node-fetch');
const fs = require('fs');
const path = require('path');

const fetchRepos = async () => {
  const response = await fetch('https://api.github.com/users/aitikirala/repos');
  const repos = await response.json();

  repos.forEach(repo => {
    const content = `---
title: "${repo.name}"
description: "${repo.description}"
url: "${repo.html_url}"
repository: "${repo.full_name}"
published: true
date: "${repo.created_at}"
---

# ${repo.name}

${repo.description}
`;

    fs.writeFileSync(path.join(__dirname, 'content/projects', `${repo.name}.mdx`), content);
  });
};

fetchRepos().catch(console.error);
