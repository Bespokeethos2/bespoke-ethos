'use client';

import dynamic from 'next/dynamic';

const VoiceChatbot = dynamic(() => import('./VoiceChatbot').then(mod => mod.VoiceChatbot), {
  ssr: false,
});

export function ClientComponents() {
  return <VoiceChatbot />;
}
