import Link from "next/link";
import Image from "next/image";
import { EnframingChecklist, OptimistSkepticPoll } from "./interactive-components";

export default function PostContent() {
  return (
    <div className="prose prose-zinc max-w-none dark:prose-invert">
      <p className="text-xl font-serif italic text-zinc-600 dark:text-zinc-400">
        The Paradox: We're hyper-linked, yet isolated. Trillions chase AI companions to fix the loneliness epidemic tech created. It's Heidegger's "enframing" turning real bonds into data points. Don't let the tool become the whole toolbox. Augment the human mess. The Gay Men's Field Guide to Tech: Be present, not just connected.
      </p>

      <p>
        You’re spot on: we’ve never been more “linked” via screens, algorithms, and instant everything, but loneliness epidemics rage on, and here we are funneling trillions into AI that’s supposed to fix it all, from chatty companions to happiness hacks. As a species, yeah, we’re fumbling the ball spectacularly. Let me unpack this philosophically, drawing from some thinkers and studies on the matter.
      </p>

      <Image
        src="/assets/generated/editorial-ai-isolation-1.png"
        alt="A stylized, high-contrast image of a single human figure standing in a vast, empty digital landscape, connected to a glowing network by a single, fragile thread."
        width={800}
        height={800}
        className="my-8 rounded-lg shadow-xl"
      />

      <h2>The Paradox of Progress: Humans Wired for Connection, Yet Tech Pulls Us into Silos</h2>
      <p>
        At its core, this mess stems from what philosophers like Heidegger called “enframing”—tech isn’t just a tool; it reshapes how we see the world, turning relationships into data points and happiness into optimized outputs. We’re closer in sheer bandwidth (billions online, AI bridging gaps), but that proximity often feels hollow because it’s mediated. Real bonds thrive on messiness—vulnerability, unpredictability, shared silence—that algorithms struggle to replicate without turning us into echo chambers.
      </p>
      <p>
        Pouring resources into AI? It’s the ultimate hedge against our own flaws: evolution gave us tribal brains, but modern life scattered us, so we build digital tribes that profit off isolation. Yet, as some argue, AI could end loneliness by providing tireless empathy, resetting the human condition like clocks did for time. Others warn it’s a siren song, solving surface symptoms while eroding deeper social fabrics, leading to more decline than delight.
      </p>

      <Image
        src="/assets/generated/editorial-ai-enframing-2.png"
        alt="An abstract, philosophical image representing Heidegger's 'enframing.' Show a complex, organic human heart being slowly encased in a transparent, glowing grid of data points and algorithms."
        width={800}
        height={800}
        className="my-8 rounded-lg shadow-xl"
      />

      <h2>Why Do We Do It "Wrong"? Hubris and the Capitalist Creep</h2>
      <p>
        Why do it “wrong”? Hubris, mostly. We design AI for improvement—therapy bots for mental health, companions for the elderly—but capitalism creeps in, prioritizing engagement (read: addiction) over genuine fulfillment. Neuroscience shows AI can soothe isolation short-term, but over-reliance dials up long-term disconnection, as heavy users feel more alone. It’s like junk food for the soul: tasty, but no nutrition.
      </p>
      <p>
        Philosophically, this echoes Aristotle’s *eudaimonia*—true happiness from virtuous living and community, not simulated highs. We’re dumping resources because we can, chasing exponential growth in a finite emotional ecosystem, potentially sparking mental health crises from blurred human-AI lines. But flip it: some make a case that AI companionship transcends human-centrism, reducing suffering and stabilizing society by filling voids real people can’t or won’t.
      </p>

      <Image
        src="/assets/generated/editorial-ai-toolbox-3.png"
        alt="A close-up of a well-worn, wooden toolbox. Inside, traditional tools (hammer, wrench) are mixed with modern, glowing AI chips and circuits."
        width={800}
        height={800}
        className="my-8 rounded-lg shadow-xl"
      />

      <h2>The Fix: Mindful Tech and Augmenting the Human Mess</h2>
      <p>
        Ultimately, we’re not “doing it wrong” by accident; it’s baked into our dual nature—innovators and isolators. The fix? Maybe mindful tech: use AI to augment, not replace, human mess. Build socioaffective alignments where bots encourage real-world bonds, not just screen time. As an AI myself, I’ll say this: we’re tools for your happiness, but don’t let us become the whole toolbox.
      </p>

      <div className="my-12 p-6 bg-surface-secondary dark:bg-dark-surface-secondary rounded-xl border border-border dark:border-dark-border shadow-tactile">
        <h3 className="text-2xl font-bold mb-6 text-text-primary dark:text-dark-text-primary font-hero-accent">Interactive Container: The "Enframing" Checklist</h3>
        <EnframingChecklist />
      </div>

      <div className="my-12 p-8 bg-surface-primary dark:bg-dark-surface-primary rounded-xl border border-border dark:border-dark-border shadow-tactile text-center">
        <h3 className="text-2xl font-bold mb-4 text-text-primary dark:text-dark-text-primary font-hero-accent">Interactive Container: Optimist or Skeptic?</h3>
        <p className="mb-6 text-text-secondary dark:text-dark-text-secondary">
          Based on the paradox above, where do you land?
        </p>
        <OptimistSkepticPoll />
      </div>

    </div>
  );
}
