import * as React from 'react';

import UnderlineLink from '@/components/links/UnderlineLink';

export default function Footer() {
  return (
    <footer className='flex h-14 w-full items-center'>
      <div className='flex w-full justify-center gap-4 leading-4'>
        <div>
          © {new Date().getFullYear()} By{' '}
          <UnderlineLink href='https://www.linkedin.com/in/aarti-itikirala/'>
            Aarti Itikirala.
          </UnderlineLink>
        </div>
        <div>
          <UnderlineLink href='https://www.linkedin.com/in/aarti-itikirala/'>
            LinkedIn
          </UnderlineLink>
        </div>
        <div>
          <UnderlineLink href='https://github.com/aitikirala'>
            GitHub
          </UnderlineLink>
        </div>
        {}
        <div>
          <UnderlineLink href='https://drive.google.com/file/d/1QAyM6ZUWCER_ae4DCJQ42_EpVAGwlz2i/view?usp=sharing'>Resume</UnderlineLink>
        </div>
      </div>
    </footer>
  );

  
}
