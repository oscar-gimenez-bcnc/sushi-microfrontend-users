import MicroFrontendLoader from '@/ui/components/MicroFrontendLoader';
import React, { Suspense } from 'react';

const SushiMicroFrontendDetail = React.lazy(
  async () => await import('SushiMicroFrontendDetail/SushiMicroFrontendDetail')
);

const DetailPage: React.FC = () => {
  return (
    <Suspense fallback={<MicroFrontendLoader />}>
      <SushiMicroFrontendDetail />
    </Suspense>
  );
};

export default DetailPage;
