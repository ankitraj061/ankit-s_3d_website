import { CTA } from "@/components";
import Timeline from "@/components/Timeline";
import { education, skills, experience } from "@/constants";
import { BackgroundLines } from "@/components/ui/background-lines";
import { MapPinned, Music2, Trophy } from "lucide-react";

export const metadata = {
  title: "About | Ankit Raj",
};

const interests = [
  {
    title: "Cricket",
    description: "Playing and following cricket keeps me energized and focused.",
    theme: "btn-back-blue",
    Icon: Trophy,
  },
  {
    title: "Listening to Music",
    description: "Music helps me stay creative and productive while building projects.",
    theme: "btn-back-pink",
    Icon: Music2,
  },
  {
    title: "Exploring New Places",
    description: "I enjoy traveling and discovering new places, cultures, and food.",
    theme: "btn-back-green",
    Icon: MapPinned,
  },
];

const skillThemeByType = {
  Frontend: "btn-back-orange",
  Backend: "btn-back-green",
  Database: "btn-back-yellow",
  "Version Control": "btn-back-pink",
  "State Management": "btn-back-black",
  Animation: "btn-back-pink",
  "API Testing": "btn-back-blue",
  "Data Visualization": "btn-back-yellow",
};


const About = () => {
  return (
    <BackgroundLines className='w-full'>
      <section className='max-container'>
      <h1 className='head-text'>
        Hello, I'm{" "}
        <span className='blue-gradient_text font-semibold drop-shadow'>
          {" "}
          Ankit
        </span>{" "}
        👋
      </h1>

      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>
          Student at IIT Guwahati, and a Software Engineer with a passion for innovative
          solutions. Currently working at Physics Wallah as a Full Stack Developer.
        </p>
      </div>

      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text'>My Skills</h3>

        <div className='mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8'>
          {skills.map((skill) => (
            <div className='flex flex-col items-center gap-3' key={skill.name}>
              <div className='block-container w-20 h-20'>
                <div
                  className={`btn-back rounded-xl ${
                    skillThemeByType[skill.type] || "btn-back-blue"
                  }`}
                />
                <div className='btn-front rounded-xl flex justify-center items-center border border-black/10'>
                  <div className='w-14 h-14 rounded-lg shadow-sm flex items-center justify-center'>
                    <img
                      src={skill.imageUrl}
                      alt={skill.name}
                      className='w-8 h-8 object-contain'
                    />
                  </div>
                </div>
              </div>

              <div className='text-center'>
                <p className='text-sm font-semibold text-slate-900'>{skill.name}</p>
                <p className='text-xs text-slate-600'>{skill.type}</p>
              </div>
            </div>
          ))}
        </div>
      </div>



      <div className='py-10'>
        <h3 className='subhead-text'>Work Experience</h3>
        <div className='mt-5 flex flex-col gap-3 text-slate-500'>
          <p>
            I've had the opportunity to work on real-world projects, enhancing my skills
            and collaborating with talented developers to create impactful solutions.
          </p>
        </div>

        <Timeline items={experience} />
      </div>

      <div className='py-16'>
        <h3 className='subhead-text'>Educational Journey</h3>
        <div className='mt-5 flex flex-col gap-3 text-slate-500'>
          <p>
            In my educational journey, I have cultivated a foundation of knowledge through a dedicated pursuit of learning, navigating both the formative years of schooling and the enriching experiences of college life.
          </p>
        </div>

        <Timeline items={education} />
      </div>
      <div className='py-10'>
        <h3 className='subhead-text'>Interests</h3>
        <div className='mt-5 flex flex-col gap-3 text-slate-500'>
          <p>
            Beyond coding, these interests keep me creative, disciplined, and curious.
          </p>
        </div>

        <div className='mt-10 grid grid-cols-1 md:grid-cols-3 gap-8'>
          {interests.map((interest) => (
            <article
              key={interest.title}
              className='bg-white/80 rounded-2xl p-5 border-2 border-black shadow-[6px_6px_0px_#000] hover:shadow-[10px_10px_0px_#000] transition-all'
            >
              <div className='block-container w-16 h-16'>
                <div className={`btn-back rounded-xl ${interest.theme}`} />
                <div className='btn-front rounded-xl flex justify-center items-center'>
                  <interest.Icon className='w-8 h-8 text-slate-900 animate-pulse' />
                </div>
              </div>

              <h4 className='mt-5 text-lg font-poppins font-semibold text-black'>
                {interest.title}
              </h4>
              <p className='mt-2 text-sm text-slate-700 leading-relaxed'>
                {interest.description}
              </p>
            </article>
          ))}
        </div>
      </div>

      <hr className='border-slate-200' />

      <CTA />
      </section>
    </BackgroundLines>
  );
};

export default About;
