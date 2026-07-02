import { CTA } from "@/components";
import { projects } from "@/constants";
import { BackgroundLines } from "@/components/ui/background-lines";

export const metadata = {
  title: "Projects | Ankit Raj",
};

const Projects = () => {
  const validProjects = projects.filter(
    (project) => project.githubLink || project.liveLink || project.link
  );

  return (
    <BackgroundLines className='w-full'>
      <section className='max-container'>
      <h1 className='head-text'>
        My{" "}
        <span className='blue-gradient_text drop-shadow font-semibold'>
          Projects
        </span>
      </h1>

      <p className='text-slate-500 mt-2 leading-relaxed'>
        Completed many projects across years, few are there in my project
        section.
      </p>



      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 my-16'>
        {validProjects.map((project) => {
          const projectImage = project.imageUrl || project.iconUrl;
          const githubLink = project.githubLink || null;
          const liveLink = project.liveLink || project.link || null;

          return (
            <article
              className='bg-[#f8fbff] rounded-2xl p-5 border-2 border-black shadow-[8px_8px_0px_#000] hover:shadow-[12px_12px_0px_#000] transition-all duration-200'
              key={project.name}
            >
              <div className='relative rounded-xl overflow-hidden border-2 border-black bg-white shadow-[4px_4px_0px_#000]'>
                <img
                  src={projectImage}
                  alt={project.name}
                  className='w-full h-52 object-cover bg-white'
                />
                <div className='absolute top-3 left-3 block-container w-10 h-10'>
                  <div className={`btn-back rounded-lg ${project.theme}`} />
                  <div className='btn-front rounded-lg flex justify-center items-center'>
                    <img
                      src={project.iconUrl}
                      alt={`${project.name} icon`}
                      className='w-1/2 h-1/2 object-contain'
                    />
                  </div>
                </div>
              </div>

              <div className='mt-5 flex flex-col'>
                <h4 className='text-xl font-poppins font-semibold text-black'>
                  {project.name}
                </h4>
                <p className='mt-2 text-slate-700 leading-relaxed'>
                  {project.description}
                </p>

                {Array.isArray(project.skills) && project.skills.length > 0 && (
                  <div className='mt-4 flex flex-wrap gap-2'>
                    {project.skills.map((skill) => (
                      <span
                        key={`${project.name}-${skill}`}
                        className='px-3 py-1 text-xs font-bold rounded-md bg-[#ffe66d] text-black border-2 border-black shadow-[2px_2px_0px_#000]'
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}

                <div className='mt-5 flex items-center gap-3 font-poppins'>
                  {githubLink && (
                    <a
                      href={githubLink}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='px-4 py-2 rounded-lg text-sm font-bold text-black bg-white border-2 border-black shadow-[3px_3px_0px_#000] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_#000] transition-all'
                    >
                      GitHub
                    </a>
                  )}
                  {liveLink && (
                    <a
                      href={liveLink}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='px-4 py-2 rounded-lg text-sm font-bold text-black bg-[#00c6ff] border-2 border-black shadow-[3px_3px_0px_#000] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_#000] transition-all'
                    >
                      Live Link
                    </a>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </div>

      <hr className='border-slate-200' />

      <CTA />
      </section>
    </BackgroundLines>
  );
};

export default Projects;
