'use client'
import React, {useState} from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ProjectCard from '@/components/ProjectCard';

const projectData = [
    {
      image: "/work/1.png",
      category: "next js",
      name: "Event Guru",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, iure!",
      link: "/",
      github: "/",
    },
    {
      image: "/work/2.png",
      category: "fullstack",
      name: "Event Guru",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, iure!",
      link: "/",
      github: "/",
    },
    {
      image: "/work/3.png",
      category: "fullstack",
      name: "Event Guru",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, iure!",
      link: "/",
      github: "/",
    },
    {
      image: "/work/4.png",
      category: "react js",
      name: "Event Guru",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, iure!",
      link: "/",
      github: "/",
    },
  ];
  //category 
  const uniqueCategories =[
    'all projects',
    ...new Set(projectData.map((item) => item.category)),
  ]
const Demo = () => {
    const [categories, setCategories] = useState(uniqueCategories);
    const [category, setCategory] = useState('all projects')
 const filteredProjects = projectData.filter(project => {
    return category === 'all projects' ? project : project.category === category
 });
 console.log(filteredProjects);
    return (
        <section className='min-h-screen pt-12'>
           <div className="container mx-auto">
            <h2 className='section-title mb-8 xl:mb-16 text-center mx-auto'>My Projects</h2>
            {/* tabs */}
            <Tabs defaultValue={category} className='mb-24 xl:mb-48'>
            <TabsList className='w-full grid h-full md:grid-cols-4 lg:max-w-[64opx] mb-12 mx-auto md:border dark:border-none'>
                {
                categories.map((category, index) => {
                    return <TabsTrigger onClick={() => setCategory(category)} key={index} value={category} className='capitalize w-[162px] md:w-auto'>{category}</TabsTrigger>
                })
                }
                
            </TabsList>
            {/* content */}
            <div className='text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4 '>
                {
                    filteredProjects.map((project, index)=> {
                        return <TabsContent value= {category} key={index}>
                            <ProjectCard  project={project}/>
                        </TabsContent>
                    })
                }
            </div>
            </Tabs>
           </div>
        </section>
    );
};

export default Demo;