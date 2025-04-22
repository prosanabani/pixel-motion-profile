
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

interface Skill {
  name: string;
  level: number;
  category: "Frontend" | "Backend" | "Mobile" | "Tools";
}

const skills: Skill[] = [
  { name: "React", level: 90, category: "Frontend" },
  { name: "TypeScript", level: 85, category: "Frontend" },
  { name: "JavaScript", level: 95, category: "Frontend" },
  { name: "HTML/CSS", level: 90, category: "Frontend" },
  { name: "Node.js", level: 80, category: "Backend" },
  { name: "MongoDB", level: 75, category: "Backend" },
  { name: "PostgreSQL", level: 80, category: "Backend" },
  { name: "Express", level: 85, category: "Backend" },
  { name: "React Native", level: 70, category: "Mobile" },
  { name: "Git", level: 85, category: "Tools" },
  { name: "Docker", level: 70, category: "Tools" },
  { name: "AWS", level: 75, category: "Tools" },
];

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-background relative">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Profile Image */}
          <motion.div 
            className="lg:col-span-2 flex flex-col items-center lg:items-start"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative w-64 h-64 rounded-full overflow-hidden mb-6 border-4 border-primary/20">
              <div className="w-full h-full bg-gradient-to-br from-primary to-secondary opacity-20 absolute"></div>
              <div className="absolute inset-0 flex items-center justify-center text-5xl font-bold text-primary">MY</div>
            </div>
            <div className="space-y-2 text-center lg:text-left">
              <h3 className="text-xl font-bold">Mohammed Youssef</h3>
              <p className="text-muted-foreground">Software Developer</p>
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                <Badge variant="outline" className="bg-primary/10 text-primary">Available for hire</Badge>
                <Badge variant="outline" className="bg-secondary/10 text-secondary">Remote</Badge>
              </div>
            </div>
          </motion.div>

          {/* Bio and Skills */}
          <motion.div 
            className="lg:col-span-3 space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Biography</h3>
              <p className="text-muted-foreground">
                I am a passionate software developer with expertise in web development using modern JavaScript frameworks.
                With a strong foundation in both frontend and backend technologies, I create scalable solutions that deliver
                exceptional user experiences. I am constantly learning and adapting to new technologies to stay at the
                forefront of the ever-evolving tech landscape.
              </p>
              <p className="text-muted-foreground">
                Outside of coding, I enjoy contributing to open-source projects, writing technical articles, and mentoring
                aspiring developers. My approach combines technical expertise with a focus on business needs and user-centered design.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4">Skills</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                {skills.map((skill, idx) => (
                  <motion.div 
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: idx * 0.1 }}
                    className="space-y-2"
                  >
                    <div className="flex justify-between">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.category}</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div 
                        className="h-full bg-gradient-to-r from-primary to-secondary"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4">Education</h3>
              <div className="space-y-3">
                <div className="p-4 rounded-lg border bg-card hover:shadow-md transition-shadow">
                  <div className="flex justify-between">
                    <h4 className="font-bold">Bachelor of Computer Science</h4>
                    <span className="text-muted-foreground text-sm">2016 - 2020</span>
                  </div>
                  <p className="text-muted-foreground">University of Technology</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
