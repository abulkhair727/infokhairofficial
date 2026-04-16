import CardSection from "./CardSection";

export default function AboutSection() {
  return (
    <CardSection id="about" icon="👤" title="About Me">
      <p className="text-sm leading-[1.9] text-muted-foreground">
        Hi! I'm <span className="font-semibold text-primary">Md. Abul Khair</span>, a passionate tech enthusiast from{" "}
        <span className="font-semibold text-primary">Bangladesh</span>. I love exploring the world of technology — from
        graphic design and web development to cybersecurity. My mission is to keep learning every day and turn that
        knowledge into meaningful projects. I believe that curiosity and consistency are the two pillars of any
        successful career in tech.
      </p>
      <p className="mt-4 text-center text-sm tracking-[8px] text-primary/55">...∞✧∞...</p>
      <p className="mt-4 text-sm leading-[1.9] text-muted-foreground">
        Whether it's crafting beautiful visuals, building responsive websites, or understanding how systems stay secure,
        I'm always eager to level up my skills and contribute positively to the digital world.
      </p>
    </CardSection>
  );
}
