import { Hero } from '@/components/sections/Hero';
import { SystemStatus } from '@/components/sections/SystemStatus';
import { SelectedBuilds } from '@/components/sections/SelectedBuilds';
import { BuildLab } from '@/components/sections/BuildLab';
import { CurrentCuriosity } from '@/components/sections/CurrentCuriosity';
import { BuildLogs } from '@/components/sections/BuildLogs';
import { HowIThink } from '@/components/sections/HowIThink';
import { Timeline } from '@/components/sections/Timeline';
import { Contact } from '@/components/sections/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <SystemStatus />
      <SelectedBuilds />
      <BuildLab />
      <CurrentCuriosity />
      <BuildLogs />
      <HowIThink />
      <Timeline />
      <Contact />
    </>
  );
}
